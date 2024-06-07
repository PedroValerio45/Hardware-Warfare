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

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
    function (error, rows, fields) {
        if (error) {
            res.send(error);
        } else {
            console.log("ok1");
            console.log(rows);

            var bits = rows[0].bits; // store the value from select in a variable
            const cost = 3 // Cost of the rambow
            const finalCost = cost * quantity;

            if (bits < finalCost){
                res.send("You don't have enough bits (lmao broke ass)")
            } else {
                console.log("buying rambow")
                connection.execute("UPDATE inventory SET n_rambow = n_rambow + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                [quantity, matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        } else {
                            connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                            [matchID, playerID],  // takes from the total of bits the cost of the character
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
    })
});

//buys the character el ventito
router.post('/buyElVentito/:quantity', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.matchID;
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyElVentito/:quantity");
        return;
    }
    
    console.log(playerID + " from " + matchID + " wants to buy/sell " + quantity + " el ventitos");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
    function (error, rows, fields) {
        if (error) {
            res.send(error);
        } else {
            console.log("ok1");
            console.log(rows);

            var bits = rows[0].bits; // store the value from select in a variable
            const cost = 4;
            const finalCost = cost * quantity;

            if (bits < finalCost){
                res.send("You don't have enough bits (someone with a similar name seems disappointed)")
            } else {                
                console.log("ok2");
                connection.execute("UPDATE inventory SET n_elventito = n_elventito + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                [quantity, matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        } else {
                            console.log("ok3");
                            connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                            [matchID, playerID],  // takes from the total of bits the cost of the character
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
    })
});

//buys the character gipio
router.post('/buyGipio/:quantity', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.matchID;
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyGipio/:quantity");
        return;
    }
    
    console.log(playerID + " from " + matchID + " wants to buy/sell " + quantity + " gipio");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
    function (error, rows, fields) {
        if (error) {
            res.send(error);
        } else {
            console.log("ok1");
            console.log(rows);

            var bits = rows[0].bits; // store the value from select in a variable
            const cost = 4
            const finalCost = cost * quantity;

            if (bits < finalCost){
                res.send("You don't have enough bits (lmao broke ass)")
            } else {
                connection.execute("UPDATE inventory SET n_gipio = n_gipio + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                [quantity, matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        } else {
                            connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                            [matchID, playerID],  // takes from the total of bits the cost of the character
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
    })
});

//buys the character decibelle
router.post('/buyDecibelle/:quantity', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.matchID;
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyDecibelle/:quantity");
        return;
    }
    
    console.log(playerID + " from " + matchID + " wants to buy/sell " + quantity + " decibelles");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
    function (error, rows, fields) {
        if (error) {
            res.send(error);
        } else {
            console.log("ok");
            console.log(rows);

            var bits = rows[0].bits; // store the value from select in a variable
            const cost = 3;
            const finalCost = cost * quantity;

            if (bits < finalCost){
                res.send("You don't have enough bits (lmao broke ass)")
            } else {
                connection.execute("UPDATE inventory SET n_decibelle = n_decibelle + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                [quantity, matchID, playerID], // adds one character
                    function (error, rows, fields) {
                        if (error){
                            res.send(error);
                        } else {
                            connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                            [matchID, playerID],  // takes from the total of bits the cost of the character
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
    })
});

//buys the character rommy
router.post('/buyRommy/:quantity', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.matchID;
    var quantity = req.params.quantity;

    if (!playerID || !matchID || !quantity) {
        res.send("Missing parameters at /buyRommy/:quantity");
        return;
    }
   
    console.log(playerID + " from " + matchID + " wants to buy/sell " + quantity + "rommy");

    connection.execute("SELECT bits FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                console.log(rows);

                var bits = rows[0].bits; // store the value from select in a variable
                const cost = 2
                const finalCost = cost * quantity;

                if (bits < finalCost){
                    res.send("You don't have enough bits (lmao broke ass)")
                } else {
                    console.log("buying rommy")
                    connection.execute("UPDATE inventory SET n_rommy = n_rommy + ? WHERE inv_match_id = ? AND inv_player_id = ?",
                    [quantity, matchID, playerID], // adds one character
                        function (error, rows, fields) {
                            if (error){
                                res.send(error);
                            } else {
                                connection.execute("UPDATE inventory SET bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                                [matchID, playerID],  // takes from the total of bits the cost of the character
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

router.get("/checkInv", (req, res) => {
    console.log("checking inv");
    playerID = req.session.playerID;
    matchID = req.session.matchID;

    connection.execute("SELECT * FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
    [matchID, playerID],
    function (error, results, fields) {
        if (error){
            res.send(error);
        } else {
            res.send(results);
        }
    })
})

module.exports = router;