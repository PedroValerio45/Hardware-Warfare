const express = require('express');
const router = express.Router();
const connection = require('../database');

// buys the character rambow
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
                // check if the number of this character in the player's inv, to see if its 0 or higher
                connection.execute("SELECT n_rambow FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                    [matchID, playerID],
                    function (error, rows, fields) {
                        if (error) {
                            res.send(error);
                        } else {
                            var numberOfChar = rows[0].n_rambow;

                            console.log("checked number of character: " + numberOfChar);
                            console.log(rows);

                            if (numberOfChar <= 0 && quantity < 0) {
                                res.send("You don't have any rambows")
                                console.log(numberOfChar)
                            } else {
                                console.log("buying rambow and taking bits")

                                // add/remove 1 character to player's inv and refund/remove the right ammount of bits
                                connection.execute("UPDATE inventory SET n_rambow = n_rambow + ?, bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                                [quantity, matchID, playerID],
                                    function (error, rows, fields) {
                                        if (error){
                                            res.send(error);
                                        } else {
                                            res.send(rows);
                                        };
                                    }
                                );
                            }
                        }
                    }
                )
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
                // check if the number of this character in the player's inv, to see if its 0 or higher
                connection.execute("SELECT n_elventito FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                    [matchID, playerID],
                    function (error, rows, fields) {
                        if (error) {
                            res.send(error);
                        } else {
                            var numberOfChar = rows[0].n_elventito;
                            console.log("checked number of character: " + numberOfChar);
                            console.log(rows);

                            if (numberOfChar <= 0 && quantity < 0) {
                                res.send("You don't have any el ventitos (boowomp)")
                                console.log(numberOfChar)
                            } else {

                                console.log("buying el ventito and taking bits");
                                // add/remove 1 character to player's inv and refund/remove the right ammount of bits
                                connection.execute("UPDATE inventory SET n_elventito = n_elventito + ?, bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                                [quantity, matchID, playerID],
                                function (error, rows, fields) {
                                    if (error){
                                        res.send(error);
                                    } else {
                                        res.send(rows);
                                    };
                                }
                            )};
                        }
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
                // check if the number of this character in the player's inv, to see if its 0 or higher
                connection.execute("SELECT n_gipio FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                    [matchID, playerID],
                    function (error, rows, fields) {
                        if (error) {
                            res.send(error);
                        } else {
                            var numberOfChar = rows[0].n_gipio;
                            console.log("checked number of character: " + numberOfChar);
                            console.log(rows);

                            if (numberOfChar <= 0 && quantity < 0) {
                                res.send("You don't have any gipios")
                                console.log(numberOfChar)
                            } else {
                                
                                console.log("buying el ventito and taking bits");
                                // add/remove 1 character to player's inv and refund/remove the right ammount of bits
                                connection.execute("UPDATE inventory SET n_gipio = n_gipio + ?, bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                                [quantity, matchID, playerID],
                                function (error, rows, fields) {
                                    if (error){
                                        res.send(error);
                                    } else {
                                        res.send(rows);
                                    };
                                }
                            )};
                        }
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
                // check if the number of this character in the player's inv, to see if its 0 or higher
                connection.execute("SELECT n_decibelle FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                    [matchID, playerID],
                    function (error, rows, fields) {
                        if (error) {
                            res.send(error);
                        } else {
                            var numberOfChar = rows[0].n_decibelle;
                            console.log("checked number of character: " + numberOfChar);
                            console.log(rows);

                            if (numberOfChar <= 0 && quantity < 0) {
                                res.send("You don't have any decibelle")
                                console.log(numberOfChar)
                            } else {
                                
                                console.log("buying decibelle and taking bits");
                                // add/remove 1 character to player's inv and refund/remove the right ammount of bits
                                connection.execute("UPDATE inventory SET n_decibelle = n_decibelle + ?, bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                                [quantity, matchID, playerID],
                                function (error, rows, fields) {
                                    if (error){
                                        res.send(error);
                                    } else {
                                        res.send(rows);
                                    };
                                }
                            )};
                        }
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
                    // check if the number of this character in the player's inv, to see if its 0 or higher
                connection.execute("SELECT n_rommy FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                    [matchID, playerID],
                    function (error, rows, fields) {
                        if (error) {
                            res.send(error);
                        } else {
                            var numberOfChar = rows[0].n_rommy;
                            console.log("checked number of character: " + numberOfChar);
                            console.log(rows);

                            if (numberOfChar <= 0 && quantity < 0) {
                                res.send("You don't have any rommy")
                                console.log(numberOfChar)
                            } else {
                                
                                console.log("buying rommy and taking bits");
                                // add/remove 1 character to player's inv and refund/remove the right ammount of bits
                                connection.execute("UPDATE inventory SET n_rommy = n_rommy + ?, bits = bits - "+ finalCost +" WHERE inv_match_id = ? AND inv_player_id = ?",
                                [quantity, matchID, playerID],
                                function (error, rows, fields) {
                                    if (error){
                                        res.send(error);
                                    } else {
                                        res.send(rows);
                                    };
                                }
                            )};
                        }
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