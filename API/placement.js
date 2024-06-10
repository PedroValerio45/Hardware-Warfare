const express = require('express');
const router = express.Router();
const connection = require('../database');

router.put("/place/:chaID/:placeY", (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.matchID;
    var chaID = req.params.chaID;
    var placeY = req.params.placeY;

    if (!playerID || !matchID || !chaID || !placeY){
        res.send("Hey sorry there's data missing I can't let u continue :(");
        return;
    };

    if (placeY == 4){
        res.send("You can't place a character on the CPU! Silly goober ;D");
        return;
    };

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
                        placeCha();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        //console.log(rows);
                        placeCha();
                    } else {
                        res.send("It's not your turn yet! Be patient.")
                        return;
                    };
                };
            };
        }
    );

    function placeCha(){
        connection.execute("SELECT match_player1_id AS player1, match_player2_id AS player2 FROM match_ WHERE match_id = ?", 
            [matchID],
            function (error, rows, fields){
                if (error){
                    console.log("Bruh");
                    res.send(error);
                } else {
                    console.log("Player IDs collected");
                    var LeftPlayer_id = rows[0].player1;
                    var RightPlayer_id = rows[0].player2;

                    var placeX;
                    if (playerID == LeftPlayer_id){
                        placeX = 1;
                    } else if (playerID == RightPlayer_id){
                        placeX = 9;
                    };

                    var n_cha;
                    if (chaID == 1){
                        n_cha = "n_rambow";
                    } else if (chaID == 2){
                        n_cha = "n_elventito";
                    } else if (chaID == 3){
                        n_cha = "n_gipio";
                    } else if (chaID == 4){
                        n_cha = "n_decibelle";
                    } else if (chaID == 5){
                        n_cha = "n_rommy";
                    };
                    console.log(n_cha)
                    connection.execute("SELECT "+ n_cha +" AS cha_invnumber FROM inventory WHERE inv_player_id = ? AND inv_match_id = ?",
                        [playerID, matchID],
                    console.log(n_cha)
                    connection.execute("SELECT "+ n_cha +" AS cha_invnumber FROM inventory WHERE inv_player_id = ? AND inv_match_id = ?",
                        [playerID, matchID],
                        function (error, rows, fields){
                            if (error){
                                res.send(error);
                                return;
                            } else {
                                console.log("Verifying number of characters of that type...");
                                if (rows.length == 0){
                                    console.log("nuh uh uh pines, i'm not letting the previous message here stay in the code, what would the profs think? 😳");
                                } else {
                                    var cha_invNumber = rows[0].cha_invnumber;
                                    if (cha_invNumber <= 0){
                                        res.send("You don't have any more of those to place!");
                                        console.log("Woah buckaroo you cannot place a character you do not have!")
                                        return;
                                    } else {
                                        connection.execute("SELECT mpc_tile_x, mpc_tile_y FROM match_player_character WHERE mpc_tile_x = " + placeX + " AND mpc_tile_y = " + placeY + " AND mpc_match_id = ?",
                                            [matchID],
                                            function (error, rows, fields) {
                                                if (error){
                                                    res.send(error);
                                                } else {
                                                    console.log(rows);
                                                    if (rows.length != 0 || (placeX < 1 || placeX > 9) || (placeY < 1 || placeY > 7) || ((placeX == 1 || placeX == 9) && placeY == 4)){
                                                        res.send("You can't place it there!");
                                                        console.log("Desired new position is taken by someone or something");
                                                        return;
                                                    } else {
                                                        connection.execute("UPDATE inventory SET "+ n_cha +" = "+ n_cha +" - 1 WHERE inv_player_id = ? AND inv_match_id = ?",
                                                            [playerID, matchID],
                                                            function (error, rows, fields){
                                                                if (error){
                                                                    res.send(error);
                                                                    return;
                                                                } else {
                                                                    connection.execute("SELECT cha_hp FROM character_ WHERE cha_id = ?",
                                                                        [chaID],
                                                                        function (error, rows, fields){
                                                                            if (error){
                                                                                res.send(error);
                                                                                return;
                                                                            } else {
                                                                                console.log("HP of the character type collected.");
                                                                                var cha_hp = rows[0].cha_hp;
                                                                                connection.execute("SELECT max(mpc_board_slot) AS board_slot FROM match_player_character WHERE mpc_match_id = ? AND mpc_mp_id = ?",
                                                                                    [matchID, playerID],
                                                                                    function (error, rows, fields){
                                                                                        if (error){
                                                                                            res.send(error);
                                                                                            return;
                                                                                        } else {
                                                                                            if (rows.length == 0){
                                                                                                var board_slot = 0;
                                                                                                console.log("playerID: " + playerID + "in match" + matchID + "has no characters on the board")
                                                                                                console.log(rows)
                                                                                            } else {
                                                                                                var board_slot = rows[0].board_slot;
                                                                                                console.log("playerID: " + playerID + " in match " + matchID + "has " + board_slot + " characters on the board")
                                                                                                console.log(rows)
                                                                                            }
                                                                                            connection.execute("INSERT INTO match_player_character (mpc_match_id, mpc_mp_id, mpc_board_slot, mpc_cha_id, cha_cur_hp, mpc_tile_x, mpc_tile_y) VALUES (?, ?, ?, ?, ?, ?, ?)",
                                                                                                [matchID, playerID, board_slot+1, chaID, cha_hp, placeX, placeY],
                                                                                                function (error, rows, fields){
                                                                                                    if (error){
                                                                                                        res.send(error);
                                                                                                        return;
                                                                                                    } else {
                                                                                                        console.log("Character placed into board!");
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

