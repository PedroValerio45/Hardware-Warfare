const express = require('express');
const router = express.Router();
const connection = require('../database');

//buys the character rambow
router.post('/buyRambow/:quantity', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.matchID;
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyRambow/:quantity");
        return;
    }

    console.log(playerID + " from " + matchID + " wants to buy/sell " + quantity + " rambows");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 3 // Cost of the rambow
                const finalCost = cost * quantity;

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_rambow = n_rambow + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                    [quantity, matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
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
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyDecibelle/:quantity");
        return;
    }

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 3;
                const finalCost = cost * quantity;

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_decibelle = n_decibelle + 1 WHERE inv_match_id = ? AND inv_player_id = ?",
                    [quantity, matchID, playerID], // adds one character
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
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyDecibelle/:quantity");
        return;
    }

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log("ok");
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 4;
                const finalCost = cost * quantity;

                if (bits < cost){
                    res.send("You don't have enough bits (someone with a similar name seems disappointed)")
                } else {
                    connection.execute("UPDATE inventory SET n_gipio = n_gipio + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                    [quantity, matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
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
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyDecibelle/:quantity");
        return;
    }
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
                const finalCost = cost * quantity;

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_gipio = n_gipio + 1 WHERE inv_match_id = ? AND inv_player_id = ?",
                    [quantity, matchID, playerID], // adds one character
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
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyDecibelle/:quantity");
        return;
    }
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
                const finalCost = cost * quantity;

                if (bits < cost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    connection.execute("UPDATE inventory SET n_rommy = n_rommy + 1 WHERE inv_match_id = ? AND inv_player_id = ?",
                    [quantity, matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?", [matchID, playerID],  // takes from the total of bits the cost of the character
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

router.get("/checkInv/:playerID/:matchID", (request, res) => {
    console.log("checking inv");
    playerID = request.session.playerID;
    matchID = request.session.matchID;

    connection.execute("SELECT * FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
    function (error, rows, fields) {
        if (error){
            res.send(error);
        } else {
            res.send(results);
        }
    })
})

module.exports = router;