const express = require('express');
const router = express.Router();
const connection = require('../database');

//speed
//router.get("/move", (req, res) => {

//});

//move right
router.put('/moveRight', (req, res) => {
    var playerID = req.body.playerID;
    var matchID = req.body.matchID;
    var peonID = req.body.peonID;

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
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    } else {
                        console.log(rows);
                        moveRight();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        console.log(rows);
                        moveRight();
                    } else {
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    };
                };
            };
        }
    );

    function moveRight(){
        connection.execute("SELECT mpc_tile_x as tilex FROM match_player_character WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ?", [playerID, matchID, peonID], //select tile_x to later update
        function (error, rows, fields) {
            if (error){
                res.send(error);
            }else{
                console.log(rows);
                var moveRight = rows[0].tilex; //store the value from select in a variable
                connection.execute("UPDATE match_player_character SET mpc_tile_x = " + moveRight + " + 1 WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ? AND mpc_tile_x < 9 AND cha_cur_hp > 0", [playerID, matchID, peonID],
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        }else{
                            console.log(rows);
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
                                                    location.reload();
                                                };
                                            }
                                        );
                                    };
                                }
                            );
                        }
                    }
                );
            }
        });
    }
});

//move left
router.put('/moveLeft', (req, res) => {
    var playerID = req.body.playerID;
    var matchID = req.body.matchID;
    var peonID = req.body.peonID;

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
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    } else {
                        console.log(rows);
                        moveLeft();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        console.log(rows);
                        moveLeft();
                    } else {
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    };
                };
            };
        }
    );

    function moveLeft(){
        connection.execute("SELECT mpc_tile_x as tilex FROM match_player_character WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ?", [playerID, matchID, peonID], //select tile_x to later update
        function (error, rows, fields) {
            if (error){
                res.send(error);
            }else{
                console.log(rows);
                var moveLeft = rows[0].tilex; //store the value from select in a variable
                connection.execute("UPDATE match_player_character SET mpc_tile_x = " + moveLeft + " - 1 WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ? AND mpc_tile_x > 1 AND cha_cur_hp > 0", [playerID, matchID, peonID],
                function (error, rows, fields) {
                    if (error){
                        res.send(error);
                    }else{
                        console.log(rows);
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
                                                    location.reload();
                                                };
                                            }
                                        );
                                    };
                                }
                            );
                        }
                    }
                );
            }
        });
    };
});

//move up
router.put('/moveUp', (req, res) => {
    var playerID = req.body.playerID;
    var matchID = req.body.matchID;
    var peonID = req.body.peonID;

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
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    } else {
                        console.log(rows);
                        moveUp();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        console.log(rows);
                        moveUp();
                    } else {
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    };
                };
            };
        }
    );

    function moveUp(){
        connection.execute("SELECT mpc_tile_y as tiley FROM match_player_character WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ?", [playerID, matchID, peonID], //select tile_y to later update
        function (error, rows, fields) {
            if (error){
                res.send(error);
            }else{
                console.log(rows);
                var moveUp = rows[0].tiley; //store the value from select in a variable
                connection.execute("UPDATE match_player_character SET mpc_tile_y = " + moveUp + " - 1 WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ? AND mpc_tile_y  > 1 AND cha_cur_hp > 0", [playerID, matchID, peonID],
                function (error, rows, fields) {
                    if (error){
                        res.send(error);
                    }else{
                        console.log(rows);
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
                                                    location.reload();
                                                };
                                            }
                                        );
                                    };
                                }
                            );
                        }
                    }
                );
            }
        });
    };
});

//move down
router.put('/moveDown', (req, res) => {
    var playerID = req.body.playerID;
    var matchID = req.body.matchID;
    var peonID = req.body.peonID;

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
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    } else {
                        console.log(rows);
                        moveDown();
                    };
                } else {
                    if (FirstPlayerID == playerID){
                        console.log(rows);
                        moveDown();
                    } else {
                        res.send("It's not your turn yet! Be patient.");
                        return;
                    };
                };
            };
        }
    );

    function moveDown(){
        connection.execute("SELECT mpc_tile_y as tiley FROM match_player_character WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ?", [playerID, matchID, peonID], //select tile_y to later update
        function (error, rows, fields) {
            if (error){
                res.send(error);
            }else{
                console.log(rows);
                var moveDown = rows[0].tiley; //store the value from select in a variable
                connection.execute("UPDATE match_player_character SET mpc_tile_y = " + moveDown + " + 1 WHERE mpc_mp_id = ? AND mpc_match_id = ? AND mpc_board_slot = ? AND mpc_tile_y  < 7 AND cha_cur_hp > 0", [playerID, matchID, peonID],
                function (error, rows, fields) {
                    if (error){
                        res.send(error);
                    }else{
                        console.log(rows);
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
                                                    location.reload();
                                                };
                                            }
                                        );
                                    };
                                }
                            );
                        }
                    }
                );
            }
        });
    };
});

module.exports = router;

//neste ficheiro: mover os characters no board usando o speed e verificando as bordas do board e se ha personagens a ocupar certos espaços