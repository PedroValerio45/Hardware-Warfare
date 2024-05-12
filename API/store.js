const express = require('express');
const router = express.Router();
const connection = require('../database');

//buys the character rambow
router.post('/buyRambow', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT n_rambow as rambow, bits as bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            }else{
                console.log("ok");
                console.log(rows);

                var rambow = rows[0].rambow; // store the value from select in a variable
                var bits = rows[0].bits; // store the value from select in a variable

                bits = 3;
                rambow = 1;

                connection.execute("UPDATE inventory SET n_rambow = n_rambow + " + rambow + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        }else{
                            connection.execute("UPDATE inventory SET bits = bits - " + bits + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID],  // takes from the total of bits the cost of the character
                                function (error, rows, fields) {
                                    if (error){
                                        console.log("Can't buy, not enough bits!");
                                        res.send(error);
                                    }else{
                                        res.send(rows);
                                    }
                                });
                        }
                    });
                }
            }
    )
});

//buys the character decibelle
router.post('/buyDecibelle', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT n_decibelle as decibelle, bits as bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            }else{
                console.log("ok");
                console.log(rows);

                var decibelle = rows[0].decibelle; // store the value from select in a variable
                var bits = rows[0].bits; // store the value from select in a variable

                bits = 3;
                decibelle = 1;

                connection.execute("UPDATE inventory SET n_decibelle = n_decibelle + " + decibelle + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        }else{
                            connection.execute("UPDATE inventory SET bits = bits - " + bits + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // takes from the total of bits the cost of the character
                                function (error, rows, fields) {
                                    if (error){
                                        console.log("Can't buy, not enough bits!");
                                        res.send(error);
                                    }else{
                                        res.send(rows);
                                    }
                                });
                        }
                    });
                }
            }
    )
});

//buys the character elventito
router.post('/buyElVentito', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT n_elventito as ventito, bits as bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            }else{
                console.log("ok");
                console.log(rows);

                var ventito = rows[0].ventito; // store the value from select in a variable
                var bits = rows[0].bits; // store the value from select in a variable

                bits = 4;
                ventito = 1;

                connection.execute("UPDATE inventory SET n_elventito = n_elventito + " + ventito + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        }else{
                            connection.execute("UPDATE inventory SET bits = bits - " + bits + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // takes from the total of bits the cost of the character
                                function (error, rows, fields) {
                                    if (error){
                                        console.log("Can't buy, not enough bits!");
                                        res.send(error);
                                    }else{
                                        res.send(rows);
                                    }
                                });
                        }
                    });
                }
            }
    )
});

//buys the character gipio
router.post('/buyGipio', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT n_gipio as gipio, bits as bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            }else{
                console.log("ok");
                console.log(rows);

                var gipio = rows[0].gipio; // store the value from select in a variable
                var bits = rows[0].bits; // store the value from select in a variable

                bits = 4;
                gipio = 1;

                connection.execute("UPDATE inventory SET n_gipio = n_gipio + " + gipio + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        }else{
                            connection.execute("UPDATE inventory SET bits = bits - " + bits + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // takes from the total of bits the cost of the character
                                function (error, rows, fields) {
                                    if (error){
                                        console.log("Can't buy, not enough bits!");
                                        res.send(error);
                                    }else{
                                        res.send(rows);
                                    }
                                });
                        }
                    });
                }
            }
    )
});

//buys the character rommy
router.post('/buyRommy', (req, res) => {
    var playerID = req.body.playerID
    var matchID = req.body.matchID;
    console.log("request.");

    connection.execute("SELECT n_rommy as rommy, bits as bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            }else{
                console.log("ok");
                console.log(rows);

                var rommy = rows[0].rommy; // store the value from select in a variable
                var bits = rows[0].bits; // store the value from select in a variable

                bits = 2;
                rommy = 1;

                connection.execute("UPDATE inventory SET n_rommy = n_rommy + " + rommy + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        }else{
                            connection.execute("UPDATE inventory SET bits = bits - " + bits + " WHERE inv_match_id = ? AND inv_player_id = ? AND bits >= 3", [matchID, playerID], // takes from the total of bits the cost of the character
                                function (error, rows, fields) {
                                    if (error){
                                        console.log("Can't buy, not enough bits!");
                                        res.send(error);
                                    }else{
                                        res.send(rows);
                                    }
                                });
                        }
                    });
                }
            }
    )
});

module.exports = router;