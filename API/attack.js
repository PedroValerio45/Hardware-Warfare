const express = require('express');
const router = express.Router();
const connection = require('../database');

router.put("/attackCharacter", (req, res) => {
    var playerID = req.session.playerID;
    var attackerID = req.body.attackerID;
    var targetID = req.body.targetID;
    var matchID = req.params.matchID;

    if (!playerID || !attackerID || !targetID || !matchID){
        res.send("Hey sorry there's data missing I can't let u continue :(");
        return;
    }

    connection.execute("SELECT match_player1_id AS player1, match_turn FROM match_ WHERE match_id = ?", 
        [matchID],
        function (error, rows, fields){
            if (error){
                res.send(error)
            } else {
                //console.log(rows);
                var FirstPlayerID = rows[0].player1;
                var Turn = rows[0].match_turn;
                if(Turn % 2 == 0){
                    if (FirstPlayerID == playerID){
                        res.send("It's not your turn yet! Be patient.")
                        return;
                    } else {
                        //console.log(rows);
                        attackStarts();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        //console.log(rows);
                        attackStarts();
                    } else {
                        res.send("It's not your turn yet! Be patient.")
                        return;
                    };
                };
            };
        }
    );

    function attackStarts(){
        connection.execute("SELECT mpc_cha_id FROM match_player_character WHERE mpc_match_id = ? AND mpc_mp_id = ? AND mpc_board_slot = ?", //get ID of the type of the attacker character.
            [matchID, playerID, attackerID],
            function (error, rows, fields){
                if (error){
                    res.send(error)
                } else {
                    //console.log(rows);
                    var attackerTypeID = rows[0].mpc_cha_id;
                    connection.execute("SELECT cha_range, mpc_tile_x, mpc_tile_y FROM character_, match_player_character WHERE cha_id = "+ attackerTypeID +" AND mpc_match_id = ? AND mpc_mp_id = ? AND mpc_board_slot = ?", //get the range and position of the character that's attacking.
                        [matchID, playerID, attackerID],
                        function (error, rows, fields){
                            if (error){
                                res.send(error)
                            } else {
                                //console.log(rows);
                                var Attacker_range = rows[0].cha_range;
                                var Attacker_x = rows[0].mpc_tile_x;
                                var Attacker_y = rows[0].mpc_tile_y;
                                connection.execute("SELECT mpc_tile_x, mpc_tile_y FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?", //get the position of the character that's gonna suffer damage
                                    [matchID, playerID, targetID],
                                    function (error, rows, fields){
                                        if (error){
                                            res.send(error)
                                        } else {
                                            //console.log(rows);
                                            var Target_x = rows[0].mpc_tile_x;
                                            var Target_y = rows[0].mpc_tile_y;

                                            // To calculate the distance between the attacker and the target to confirm if it's within range
                                            if (Attacker_range < Math.abs(Attacker_x - Target_x)){
                                                res.send("NUH-UH you can't attack you are OUT OF RANGE!");
                                                return;
                                            } else {
                                                if (Attacker_range < Math.abs(Attacker_y - Target_y)){
                                                    res.send("NUH-UH you can't attack you are OUT OF RANGE!");
                                                    return;
                                                } else {

                                                    if (attackerTypeID == 2){ //if it's el ventito
                                                        connection.execute("SELECT match_player1_id AS player1, match_player2_id AS player2 FROM match_ WHERE match_id = ?", 
                                                            [matchID],
                                                            function (error, rows, fields){
                                                                if (error){
                                                                    res.send(error)
                                                                } else {
                                                                    var LeftPlayer_id = rows[0].player1;
                                                                    var RightPlayer_id = rows[0].player2;
                                                                    var ventitoPush;
                                                                    if (playerID == LeftPlayer_id){
                                                                        ventitoPush = 1;
                                                                    } else if (playerID == RightPlayer_id){
                                                                        ventitoPush = -1;
                                                                    };
                                                                    connection.execute("UPDATE match_player_character SET mpc_tile_x = mpc_tile_x + " + ventitoPush + " WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?", //push enemy, making sure to target the right match, the player that is not the attacker, and the character in the right board slot, respectively
                                                                        [matchID, playerID, targetID],
                                                                        function (error, rows, fields) {
                                                                            if (error){
                                                                                res.send(error);
                                                                                //console.log(rows);
                                                                            } else {
                                                                                connection.execute("UPDATE match_ SET match_turn = match_turn + 1 WHERE match_id = ?", //increase match turn by 1
                                                                                    [matchID],
                                                                                    function (error, rows, fields){
                                                                                        if (error){
                                                                                            res.send(error);
                                                                                            //console.log(rows);
                                                                                        } else {
                                                                                            console.log("Trocou a turn.");
                                                                                        };
                                                                                    }
                                                                                );
                                                                            };
                                                                        }
                                                                    );
                                                                };
                                                            }
                                                        );

                                                    } else if (attackerTypeID == 4){ //if it's decibelle
                                                        connection.execute("SELECT cha_atk FROM character_ WHERE cha_id = "+ attackerTypeID +"", //get the DMG value of the character thats gonna attack
                                                            function (error, rows, fields) {
                                                                if (error){
                                                                    res.send(error);
                                                                } else {
                                                                    //console.log(rows);
                                                                    var Damage = rows[0].cha_atk; //store the value from select in a variable
                                                                    //console.log("Damage = " + Damage);
                                                                    connection.execute("UPDATE match_player_character SET cha_cur_hp = cha_cur_hp - " + Damage + " WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND (mpc_tile_x <= ("+ Attacker_x +" + "+ Attacker_range +") AND mpc_tile_x >= ("+ Attacker_x +" - "+ Attacker_range +") AND mpc_tile_y <= ("+ Attacker_y +" + "+ Attacker_range +") AND mpc_tile_y >= ("+ Attacker_y +" - "+ Attacker_range +"))", //damage enemy, making sure to target the right match, the player that is not the attacker, and the character in the right board slot, respectively
                                                                        [matchID, playerID],
                                                                        function (error, rows, fields) {
                                                                            if (error){
                                                                                res.send(error);
                                                                                //console.log(rows);
                                                                            } else {
                                                                                connection.execute("SELECT match_turn FROM match_ WHERE match_id = ?", //get match turn value
                                                                                    [matchID],
                                                                                    function (error, rows, fields){
                                                                                        if (error){
                                                                                            res.send(error);
                                                                                        } else {
                                                                                            //console.log(rows);
                                                                                            var Turn = rows[0].match_turn; //store value in a variable
                                                                                            //console.log("Turn = " + Turn);
                                                                                            connection.execute("UPDATE match_ SET match_turn = match_turn + 1 WHERE match_id = ?", //increase match turn by 1
                                                                                                [matchID],
                                                                                                function (error, rows, fields){
                                                                                                    if (error){
                                                                                                        res.send(error);
                                                                                                    //console.log(rows);
                                                                                                    } else {
                                                                                                        console.log("Trocou a turn, atacou e...");
                                                                                                        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                                                                                                        console.log(matchID, playerID, targetID)
                                                                                                        connection.execute("DELETE FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND cha_cur_hp <= 0",
                                                                                                            [matchID, playerID],
                                                                                                            function (error, rows, fields){
                                                                                                                if (error){
                                                                                                                    console.log(error);
                                                                                                                    return;
                                                                                                                } else {
                                                                                                                    console.log("MATOUUUU");
                                                                                                                    connection.execute("SELECT count(mpc_board_slot) AS alive_enemies FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ?",
                                                                                                                        [matchID, playerID],
                                                                                                                        function (error, rows, fields){
                                                                                                                            if (error){
                                                                                                                                res.send(error);
                                                                                                                            } else {
                                                                                                                                console.log("Checking number of enemies on board...");
                                                                                                                                var AliveEnemies = rows[0].alive_enemies;
                                                                                                                                connection.execute("SELECT n_rambow, n_elventito, n_gipio, n_decibelle, n_rommy FROM inventory WHERE inv_match_id = ? AND NOT inv_player_id = ?",
                                                                                                                                    [matchID, playerID],
                                                                                                                                    function (error, rows, fields){
                                                                                                                                        if (error){
                                                                                                                                            res.send(error);
                                                                                                                                        } else {
                                                                                                                                            console.log("Checking the enemy's inventory...");
                                                                                                                                            var numRambow = rows[0].n_rambow;
                                                                                                                                            var numElventito = rows[0].n_elventito;
                                                                                                                                            var numGipio = rows[0].n_gipio;
                                                                                                                                            var numDecibelle = rows[0].n_decibelle;
                                                                                                                                            var numRommy = rows[0].n_rommy;

                                                                                                                                            if (!(AliveEnemies == 0 && numRambow == 0 && numElventito == 0 && numGipio == 0 && numDecibelle == 0 && numRommy == 0)){
                                                                                                                                                console.log("Enemy still has manfire in camp. The war resides.")
                                                                                                                                            } else {
                                                                                                                                                connection.execute("UPDATE match_ SET match_winner = ?, match_state_id = 6 WHERE match_id = ?",
                                                                                                                                                    [playerID, matchID],
                                                                                                                                                    function (error, rows, fields){
                                                                                                                                                        if (error){
                                                                                                                                                            res.send(error);
                                                                                                                                                        } else {
                                                                                                                                                            res.send(rows);
                                                                                                                                                            console.log("JOGO TERMINADO!!!");
                                                                                                                                                            connection.execute("UPDATE player SET player_wins = player_wins + 1 WHERE player_id = ?",
                                                                                                                                                                [playerID],
                                                                                                                                                                function (error, rows, fields){
                                                                                                                                                                    if (error){
                                                                                                                                                                        res.send(error);
                                                                                                                                                                    } else {
                                                                                                                                                                        console.log("Toma a win player :)");
                                                                                                                                                                        return;
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            )
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                );
                                                                                                                                            };
                                                                                                                                        };
                                                                                                                                    }
                                                                                                                                );
                                                                                                                            };
                                                                                                                        }
                                                                                                                    );
                                                                                                                }
                                                                                                            }
                                                                                                        )
                                                                                                    };
                                                                                                }
                                                                                            );
                                                                                        };
                                                                                    }
                                                                                );
                                                                            };
                                                                        }
                                                                    );
                                                                };
                                                            }
                                                        );

                                                    } else { // if it's any other character
                                                        connection.execute("SELECT cha_atk FROM character_ WHERE cha_id = "+ attackerTypeID +"", //get the DMG value of the character thats gonna attack
                                                            function (error, rows, fields) {
                                                                if (error){
                                                                    res.send(error);
                                                                } else {
                                                                    //console.log(rows);
                                                                    var Damage = rows[0].cha_atk; //store the value from select in a variable
                                                                    //console.log("Damage = " + Damage);
                                                                    connection.execute("UPDATE match_player_character SET cha_cur_hp = cha_cur_hp - " + Damage + " WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?", //damage enemy, making sure to target the right match, the player that is not the attacker, and the character in the right board slot, respectively
                                                                        [matchID, playerID, targetID],
                                                                        function (error, rows, fields) {
                                                                            if (error){
                                                                                res.send(error);
                                                                                //console.log(rows);
                                                                            } else {
                                                                                connection.execute("SELECT cha_cur_hp FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?",
                                                                                    [matchID, playerID, targetID],
                                                                                    function (error, rows, fields){
                                                                                        if (error){
                                                                                            res.send(error);
                                                                                        } else {
                                                                                            //console.log(rows);
                                                                                            var TargetHealth = rows[0].cha_cur_hp;
                                                                                            connection.execute("SELECT match_turn FROM match_ WHERE match_id = ?", //get match turn value
                                                                                                [matchID],
                                                                                                function (error, rows, fields){
                                                                                                    if (error){
                                                                                                        res.send(error);
                                                                                                    } else {
                                                                                                        //console.log(rows);
                                                                                                        var Turn = rows[0].match_turn; //store value in a variable
                                                                                                        //console.log("Turn = " + Turn);
                                                                                                        connection.execute("UPDATE match_ SET match_turn = match_turn + 1 WHERE match_id = ?", //increase match turn by 1
                                                                                                            [matchID],
                                                                                                            function (error, rows, fields){
                                                                                                                if (error){
                                                                                                                    res.send(error);
                                                                                                                    //console.log(rows);
                                                                                                                } else {
                                                                                                                    console.log("Trocou a turn, atacou e...");
                                                                                                                    if (TargetHealth <= 0){
                                                                                                                        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                                                                                                                        console.log(matchID, playerID, targetID)
                                                                                                                        connection.execute("DELETE FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?",
                                                                                                                            [matchID, playerID, targetID],
                                                                                                                            function (error, rows, fields){
                                                                                                                                if (error){
                                                                                                                                    console.log(error);
                                                                                                                                } else {
                                                                                                                                    console.log("MATOUUUU");
                                                                                                                                    connection.execute("SELECT count(mpc_board_slot) AS alive_enemies FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ?",
                                                                                                                                        [matchID, playerID],
                                                                                                                                        function (error, rows, fields){
                                                                                                                                            if (error){
                                                                                                                                                res.send(error);
                                                                                                                                            } else {
                                                                                                                                                console.log("Checking number of enemies on board...");
                                                                                                                                                var AliveEnemies = rows[0].alive_enemies;
                                                                                                                                                connection.execute("SELECT n_rambow, n_elventito, n_gipio, n_decibelle, n_rommy FROM inventory WHERE inv_match_id = ? AND NOT inv_player_id = ?",
                                                                                                                                                    [matchID, playerID],
                                                                                                                                                    function (error, rows, fields){
                                                                                                                                                        if (error){
                                                                                                                                                            res.send(error);
                                                                                                                                                        } else {
                                                                                                                                                            console.log("Checking the enemy's inventory...");
                                                                                                                                                            var numRambow = rows[0].n_rambow;
                                                                                                                                                            var numElventito = rows[0].n_elventito;
                                                                                                                                                            var numGipio = rows[0].n_gipio;
                                                                                                                                                            var numDecibelle = rows[0].n_decibelle;
                                                                                                                                                            var numRommy = rows[0].n_rommy;

                                                                                                                                                            if (!(AliveEnemies == 0 && numRambow == 0 && numElventito == 0 && numGipio == 0 && numDecibelle == 0 && numRommy == 0)){
                                                                                                                                                                console.log("Enemy still has manfire in camp. The war resides.")
                                                                                                                                                            } else {
                                                                                                                                                                connection.execute("UPDATE match_ SET match_winner = ?, match_state_id = 6 WHERE match_id = ?",
                                                                                                                                                                    [playerID, matchID],
                                                                                                                                                                    function (error, rows, fields){
                                                                                                                                                                        if (error){
                                                                                                                                                                            res.send(error);
                                                                                                                                                                        } else {
                                                                                                                                                                            res.send(rows);
                                                                                                                                                                            console.log("JOGO TERMINADO!!!");
                                                                                                                                                                            connection.execute("UPDATE player SET player_wins = player_wins + 1 WHERE player_id = ?",
                                                                                                                                                                                [playerID],
                                                                                                                                                                                function (error, rows, fields){
                                                                                                                                                                                    if (error){
                                                                                                                                                                                        res.send(error);
                                                                                                                                                                                    } else {
                                                                                                                                                                                        console.log("Toma a win player :)");
                                                                                                                                                                                        return;
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            )
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                );
                                                                                                                                                            };
                                                                                                                                                        };
                                                                                                                                                    }
                                                                                                                                                );
                                                                                                                                            };
                                                                                                                                        }
                                                                                                                                    );
                                                                                                                                };
                                                                                                                            }
                                                                                                                        );
                                                                                                                    } else {
                                                                                                                        console.log("Não matou (ainda hehehe)")
                                                                                                                        res.send(rows)
                                                                                                                    }
                                                                                                                };
                                                                                                            }
                                                                                                        );
                                                                                                    };
                                                                                                }
                                                                                            );
                                                                                        }
                                                                                    }
                                                                                )
                                                                            };
                                                                        }
                                                                    );
                                                                };
                                                            }
                                                        );
                                                    }
                                                }
                                            };
                                        };
                                    }
                                );
                            };
                        }
                    );
                };
            }
        );
    };
});


router.put("/attackCPU", (req, res) => {
    var playerID = req.body.playerID;
    var attackerID = req.body.attackerID;
    var matchID = req.body.matchID;

    var CPU_x;
    var CPU_y = 4;

    if (!playerID || !attackerID || !matchID){
        res.send("Hey sorry there's data missing I can't let u continue :(");
        return;
    }

    connection.execute("SELECT match_player1_id AS player1, match_turn FROM match_ WHERE match_id = ?", 
        [matchID],
        function (error, rows, fields){
            if (error){
                res.send(error)
            } else {
                //console.log(rows);
                var FirstPlayerID = rows[0].player1;
                var Turn = rows[0].match_turn;
                if(Turn % 2 == 0){
                    CPU_x = 1;
                    if (FirstPlayerID == playerID){
                        res.send("It's not your turn yet! Be patient.")
                        return;
                    } else {
                        //console.log(rows);
                        attackCPU_Starts();
                    };
                } else {
                    CPU_x = 9;
                    if (FirstPlayerID == playerID){
                        //console.log(rows);
                        attackCPU_Starts();
                    } else {
                        res.send("It's not your turn yet! Be patient.")
                        return;
                    };
                };
            };
        }
    );

    function attackCPU_Starts(){
        connection.execute("SELECT mpc_cha_id FROM match_player_character WHERE mpc_match_id = ? AND mpc_mp_id = ? AND mpc_board_slot = ?", //get ID of the type of the attacker character.
            [matchID, playerID, attackerID],
            function (error, rows, fields){
                if (error){
                    res.send(error)
                } else {
                    //console.log(rows);
                    var attackerTypeID = rows[0].mpc_cha_id;
                    connection.execute("SELECT cha_range, mpc_tile_x, mpc_tile_y FROM character_, match_player_character WHERE cha_id = "+ attackerTypeID +" AND mpc_match_id = ? AND mpc_mp_id = ? AND mpc_board_slot = ?", //get the range and position of the character that's attacking.
                        [matchID, playerID, attackerID],
                        function (error, rows, fields){
                            if (error){
                                res.send(error)
                            } else {
                                //console.log(rows);
                                var Attacker_range = rows[0].cha_range;
                                var Attacker_x = rows[0].mpc_tile_x;
                                var Attacker_y = rows[0].mpc_tile_y;

                                // To calculate the distance between the attacker and the target to confirm if it's within range
                                if (Attacker_range < Math.abs(Attacker_x - CPU_x)){
                                    res.send("NUH-UH you can't attack the CPU it's OUT OF RANGE!");
                                    return;
                                } else {
                                    if (Attacker_range < Math.abs(Attacker_y - CPU_y)){
                                        res.send("NUH-UH you can't attack the CPU it's OUT OF RANGE!");
                                        return;
                                    } else {

                                        connection.execute("SELECT cha_atk FROM character_ WHERE cha_id = "+ attackerTypeID +"", //get the DMG value of the character thats gonna attack
                                            function (error, rows, fields) {
                                                if (error){
                                                    res.send(error);
                                                } else {
                                                    //console.log(rows);
                                                    var Damage = rows[0].cha_atk; //store the value from select in a variable
                                                    //console.log("Damage = " + Damage);
                                                    connection.execute("UPDATE match_player SET mp_current_cpu_hp = mp_current_cpu_hp - " + Damage + " WHERE mp_match_id = ? AND NOT mp_player_id = ?", //damage CPU, making sure to target the right match and the player that is not the attacker
                                                        [matchID, playerID],
                                                        function (error, rows, fields) {
                                                            if (error){
                                                                res.send(error);
                                                                //console.log(rows);
                                                            } else {
                                                                connection.execute("SELECT mp_current_cpu_hp FROM match_player WHERE mp_match_id = ? AND NOT mp_player_id = ?",
                                                                    [matchID, playerID],
                                                                    function (error, rows, fields){
                                                                        if (error){
                                                                            res.send(error);
                                                                        } else {
                                                                            //console.log(rows);
                                                                            var CPU_Health = rows[0].mp_current_cpu_hp;
                                                                            connection.execute("SELECT match_turn FROM match_ WHERE match_id = ?", //get match turn value
                                                                                [matchID],
                                                                                function (error, rows, fields){
                                                                                    if (error){
                                                                                        res.send(error);
                                                                                    } else {
                                                                                        //console.log(rows);
                                                                                        var Turn = rows[0].match_turn; //store value in a variable
                                                                                        //console.log("Turn = " + Turn);
                                                                                        connection.execute("UPDATE match_ SET match_turn = match_turn + 1 WHERE match_id = ?", //increase match turn by 1
                                                                                            [matchID],
                                                                                            function (error, rows, fields){
                                                                                                if (error){
                                                                                                    res.send(error);
                                                                                                    //console.log(rows);
                                                                                                } else {

                                                                                                    //Verificar se o jogo acabou ao matar o CPU ou não
                                                                                                    console.log("Trocou a turn, atacou e...");
                                                                                                    if (CPU_Health > 0){
                                                                                                        console.log("Ainda n mataste o CPU (ainda hehehe)")
                                                                                                        res.send(rows)                                       
                                                                                                    } else {
                                                                                                        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                                                                                                        console.log(matchID, playerID)
                                                                                                        connection.execute("UPDATE match_ SET match_winner = ?, match_state_id = 6 WHERE match_id = ?",
                                                                                                            [playerID, matchID],
                                                                                                            function (error, rows, fields){
                                                                                                                if (error){
                                                                                                                    res.send(error);
                                                                                                                } else {
                                                                                                                    res.send(rows);
                                                                                                                    console.log("JOGO TERMINADO!!!");
                                                                                                                    connection.execute("UPDATE player SET player_wins = player_wins + 1 WHERE player_id = ?",
                                                                                                                        [playerID],
                                                                                                                        function (error, rows, fields){
                                                                                                                            if (error){
                                                                                                                                res.send(error);
                                                                                                                            } else {
                                                                                                                                console.log("Toma a win player :)");
                                                                                                                                return;
                                                                                                                            };
                                                                                                                        }
                                                                                                                    );
                                                                                                                };
                                                                                                            }
                                                                                                        );
                                                                                                    };
                                                                                                };
                                                                                            }
                                                                                        );
                                                                                    };
                                                                                }
                                                                            );
                                                                        }
                                                                    }
                                                                )
                                                            };
                                                        }
                                                    );
                                                };
                                            }
                                        );
                                    };
                                };
                            };
                        }
                    );
                };
            }
        );
    };
});


module.exports = router;
