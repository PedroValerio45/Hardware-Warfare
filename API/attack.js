const express = require('express');
const router = express.Router();
const connection = require('../database');

router.put("/attackCharacter", (req, res) => {
    var playerID = req.body.playerID;
    var attackerID = req.body.attackerID;
    var targetID = req.body.targetID;
    var matchID = req.body.matchID;

    if (!playerID || !attackerID || !targetID || !matchID){
        response.send("Hey sorry there's data missing I can't let u continue :(");
        return;
    }

    connection.execute("SELECT match_player1_id AS player1, match_turn FROM match_ WHERE match_id = ?", 
        [matchID],
       function (error, rows, fields){
            if (error){
                res.send(error)
            } else {
                console.log(rows);
                var FirstPlayerID = rows[0].player1;
                var Turn = rows[0].match_turn;
                if(Turn % 2 == 0){
                    if (FirstPlayerID == playerID){
                        res.send("It's not your turn yet! Be patient.")
                        return;
                    } else {
                        console.log(rows);
                        attackStarts();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        console.log(rows);
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
                    console.log(rows);
                    var attackerTypeID = rows[0].mpc_cha_id;
                    connection.execute("SELECT cha_range, mpc_tile_x, mpc_tile_y FROM character_, match_player_character WHERE cha_id = "+ attackerTypeID +" AND mpc_match_id = ? AND mpc_mp_id = ? AND mpc_board_slot = ?", //get the range and position of the character that's attacking.
                        [matchID, playerID, attackerID],
                        function (error, rows, fields){
                            if (error){
                                res.send(error)
                            } else {
                                console.log(rows);
                                var Attacker_range = rows[0].cha_range;
                                var Attacker_x = rows[0].mpc_tile_x;
                                var Attacker_y = rows[0].mpc_tile_y;
                                connection.execute("SELECT mpc_tile_x, mpc_tile_y FROM match_player_character WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?", //get the position of the character that's gonna suffer damage
                                    [matchID, playerID, targetID],
                                    function (error, rows, fields){
                                        if (error){
                                            res.send(error)
                                        } else {
                                            console.log(rows);
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


                                                    connection.execute("SELECT cha_atk FROM character_ WHERE cha_id = "+ attackerTypeID +"", //get the DMG value of the character thats gonna attack
                                                        function (error, rows, fields) {
                                                            if (error){
                                                                res.send(error);
                                                            } else {
                                                                console.log(rows);
                                                                var Damage = rows[0].cha_atk; //store the value from select in a variable
                                                                console.log("Damage = " + Damage);
                                                                connection.execute("UPDATE match_player_character SET cha_cur_hp = cha_cur_hp - " + Damage + " WHERE mpc_match_id = ? AND NOT mpc_mp_id = ? AND mpc_board_slot = ?", //damage enemy, making sure to target the right match, the player that is not the attacker, and the character in the right board slot, respectively
                                                                    [matchID, playerID, targetID],
                                                                    function (error, rows, fields) {
                                                                        if (error){
                                                                            res.send(error);
                                                                            console.log(rows);
                                                                        } else {
                                                                            connection.execute("SELECT match_turn FROM match_ WHERE match_id = ?", //get match turn value
                                                                                [matchID],
                                                                                function (error, rows, fields){
                                                                                    if (error){
                                                                                        res.send(error);
                                                                                    } else {
                                                                                        console.log(rows);
                                                                                        var Turn = rows[0].match_turn; //store value in a variable
                                                                                        console.log("Turn = " + Turn);
                                                                                        connection.execute("UPDATE match_ SET match_turn = match_turn + 1 WHERE match_id = ?", //increase match turn by 1
                                                                                            [matchID],
                                                                                            function (error, rows, fields){
                                                                                                if (error){
                                                                                                    res.send(error);
                                                                                                    console.log(rows);
                                                                                                } else {
                                                                                                    res.send(rows);
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



module.exports = router;

//neste ficheiro: calcular range e posiçao de cada personagem e atacar, mudar turnos