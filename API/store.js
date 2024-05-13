const express = require('express');
const router = express.Router();
const connection = require('../database');

//buys the character rambow
router.post('/buyRambow', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 3

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_rambow = n_rambow + 1 WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ cost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
                                    function (error, rows, fields) {
                                        if (error){
                                            res.send(error);
                                        } else {
                                            res.send(rows);
                                        };
                                    }
                                );
                            };
                        }
                    );
                };
            };
        }
    )
});

//buys the character decibelle
router.post('/buyDecibelle', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 3;

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_decibelle = n_decibelle + 1 WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ cost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
                                    function (error, rows, fields) {
                                        if (error){
                                            res.send(error);
                                        } else {
                                            res.send(rows);
                                        };
                                    }
                                );
                            };
                        }
                    );
                };
            };
        }
    )
});

//buys the character el ventito
router.post('/buyElVentito', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 4;

                if (bits < cost){
                    res.send("You don't have enough bits (someone with a similar name seems disappointed)")
                } else {
                    connection.execute("UPDATE inventory SET n_gipio = n_gipio + 1 WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ cost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
                                    function (error, rows, fields) {
                                        if (error){
                                            res.send(error);
                                        } else {
                                            res.send(rows);
                                        };
                                    }
                                );
                            };
                        }
                    );
                };
            };
        }
    )
});

//buys the character gipio
router.post('/buyGipio', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 4

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_gipio = n_gipio + 1 WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ cost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
                                    function (error, rows, fields) {
                                        if (error){
                                            res.send(error);
                                        } else {
                                            res.send(rows);
                                        };
                                    }
                                );
                            };
                        }
                    );
                };
            };
        }
    )
});

//buys the character rommy
router.post('/buyRommy', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 2

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_rommy = n_rommy + 1 WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ cost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
                                    function (error, rows, fields) {
                                        if (error){
                                            res.send(error);
                                        } else {
                                            res.send(rows);
                                        };
                                    }
                                );
                            };
                        }
                    );
                };
            };
        }
    )
});

module.exports = router;