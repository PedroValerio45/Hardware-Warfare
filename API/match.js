const express = require('express');
const router = express.Router();
const connection = require('../database');

// Endpoint for creating a match
router.post('/createMatch', (request, response) => {
    var playerID = request.session.playerID;

    // if playerID is not set, we send a message to the user
    if (!playerID){
        response.send("playerID is not set.");
        return;
    }

    // We are inserting into the table match_ the id of player1, and also setting the match state to 2 (matchmaking) and the turns to 0. match_winner and match_player2_id are currently NULL
    connection.execute('INSERT INTO match_ (match_state_id, match_player1_id, match_turn) VALUES (?,?,?)',
        [2, playerID, 0],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                //get match_id to then be put into var match
                connection.execute('SELECT * FROM match_ WHERE match_player2_id is null AND match_player1_id = ?',
                [playerID],
                function (err, results, fields) {
                if (err){
                    response.send(err);
                }else{
                    // If the results.length is 0 means that we don't have any match with the defined criteria.
                    if (results.length == 0){
                        response.send(results);
                        console.log("No match found, create match failure 1.")
                    }else{
                        //create var with the match_id value
                        var match = results[0].match_id;
                        //create cookie with the value of the var match (so the match_id value)
                        request.session.matchID = match;
                        console.log("match creating: " + match);
                        //create row in match_player for this player in this match, to then be able to create an inventory for them
                        connection.execute("INSERT INTO match_player (mp_match_id, mp_player_id) VALUES (?, ?)",
                        [match, playerID],
                        function (err, results, fields) {
                            if (err){
                                console.log(err);
                                response.send(err);
                                console.log("create match failure 2, match: " + match)
                            }else{
                                //create row in inventory for this player in this match
                                connection.execute("INSERT INTO inventory (inv_match_id, inv_player_id, bits, n_rambow, n_elventito, n_gipio, n_decibelle, n_rommy) VALUES (?, ?, 16, 0, 0, 0, 0, 0)",
                                [match, playerID],
                                function (err, results, fields) {
                                    if (err){
                                        response.send(err);
                                        console.log("create match inventory failure 1, match: " + match)
                                    }else{
                                        //get inv_id to then be put into var inv
                                        connection.execute("SELECT inv_id FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                                        [match, playerID],
                                        function (err, results, fields) {
                                            if (err){
                                                response.send(err);
                                                console.log("create match inventory failure 2, match: " + match)
                                            }else{
                                                //create var with the inv_id value
                                                var inv = results[0].inv_id;
                                                console.log("inv_id:" + inv)
                                                connection.execute("UPDATE match_player SET mp_player_inv_id = ? WHERE mp_id = ?",
                                                [inv, match],
                                                function (err, results, fields) {
                                                    if (err){
                                                        response.send(err);
                                                        console.log("create match inventory failure 3, match and inv: " + match + " " + inv)
                                                    }else{
                                                        response.send(results);
                                                        console.log("Match created. player_id, match_id, inv_id: " + playerID + " " + match + " " + inv);
                                                        //success in creating match, setting the player as player 1, assigning an inventory to it, and entering the match
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                }})
            }
        }
    );
});

// Endpoint for joining a match
router.put('/joinMatch', (request, response) =>  {
    var playerID = request.session.playerID;
    // var matchID = request.session.matchID;

    // If playerID or matchID is not set, we send a message to the user
    if (!playerID){
        response.send("Data is missing. 💩");
        return;
    }

    console.log("Getting data from player: " + playerID)
    // We are checking if the match exists and if match_player2_id is not set. Also, we are checking if match_player1_id is different from the playerID since he can't join his own match.
    connection.execute("SELECT * FROM match_ WHERE match_player2_id is null AND match_player1_id = ?",
    [playerID],
    function (err, results, fields) {
        if (err) {
            response.send(err);
            return;
        }

        // If the results length is 0, it means that we don't have any match where the player1 is the player OR all matches have both players
        if (results.length == 0){
            connection.execute('SELECT * FROM match_ WHERE match_player2_id is null AND match_player1_id != ?',
                [playerID],
                function (err, results, fields) {
                    if (err){
                        response.send(err);
                    }else{
                        // If the results.length is 0 means that we don't have any match with the defined criteria.
                        if (results.length == 0){
                            response.send(results);
                            console.log("No match found, must create one.")
                            //the match.html will jump to the /createMatch endpoint here
                        }else{
                            //create var with the match_id value
                            var match = results[0].match_id;
                            //create cookie with the value of the var match (so the match_id value)
                            request.session.matchID = match;
                            console.log("match joining: " + match);
                            // If we have a match, we update match_player2_id with the playerID
                            connection.execute('UPDATE match_ SET match_player2_id = ? WHERE match_id = ?',
                            [playerID, match],
                            function (err, results, fields) {
                                if (err){
                                    response.send(err);
                                    console.log("join match failure 1, match: " + match)
                                }else{
                                    //create row in match_player for this player in this match, to then be able to create an inventory for them
                                    connection.execute("INSERT INTO match_player (mp_match_id, mp_player_id) VALUES (?, ?)",
                                    [match, playerID],
                                    function (err, results, fields) {
                                        if (err){
                                            response.send(err);
                                            console.log("join match failure 2, match: " + match)
                                        }else{
                                            //create row in inventory for this player in this match
                                            connection.execute("INSERT INTO inventory (inv_match_id, inv_player_id, bits, n_rambow, n_elventito, n_gipio, n_decibelle, n_rommy) VALUES (?, ?, 16, 0, 0, 0, 0, 0)",
                                            [match, playerID],
                                            function (err, results, fields) {
                                                if (err){
                                                    response.send(err);
                                                    console.log("join match inventory failure 1, match: " + match)
                                                }else{
                                                    //get inv_id to then be put into var inv
                                                    connection.execute("SELECT inv_id FROM inventory WHERE inv_match_id = ? AND inv_player_id = ?",
                                                    [match, playerID],
                                                    function (err, results, fields) {
                                                        if (err){
                                                            response.send(err);
                                                            console.log("join match inventory failure 2, match: " + match)
                                                        }else{
                                                            //create var with the inv_id value
                                                            var inv = results[0].inv_id;
                                                            console.log("inv_id:" + inv)
                                                            connection.execute("UPDATE match_player SET mp_player_inv_id = ? WHERE mp_id = ?",
                                                            [inv, match],
                                                            function (err, results, fields) {
                                                                if (err){
                                                                    response.send(err);
                                                                    console.log("join match inventory failure 3, match and inv: " + match + " " + inv)
                                                                }else{                                                
                                                                    response.send(results);
                                                                    console.log("You joined match " + match + " 💩🦄");
                                                                    //success in joining match, setting the player as player 2, assigning an inventory to it, and entering the match
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }
                });
        }else{              
            var match = results[0].match_id;                                           
            request.session.matchID = match
            console.log("You joined match " + match + " 💩🦄");
            response.send(results);
            //success in joining your previous match
        }
    })
    
    // this.connection.execute("SELECT COUNT(match_id) FROM match_player")
});

// Endpoint for getting all matches
router.get('/matches', (request, response) => {
    connection.execute('SELECT * FROM match_',
    [],
    function (err, results, fields) {
        if (err)
        {
            response.send(err);
        }else{
            response.send(results);
        }
    });
});

// Endpoint for getting a specific match (:id is a parameter that we can use to get the matchID from the URL - e.g. http://localhost:2000/matches/1)
router.get('/matches/:id', (request, response) => {
    var matchID = request.params.id;
    connection.execute('SELECT * FROM match_ WHERE match_id = ?',
    [matchID],
    function (err, results, fields) {
        if (err)
        {
            response.send(err);
        }else{
            response.send(results);
        }
    });
})

// get player stats from certain match, to use in multiple phaser text objects
router.get('/getData', (request, response) => {
    console.log("/match/matches/playerStats")
    var matchID = request.session.matchID;

    if (!matchID){
        response.send("Not allowed");
        return;
    }


    console.log("Getting data from match " + matchID);

    connection.execute('SELECT * FROM player INNER JOIN match_player ON player_id = mp_player_id WHERE mp_match_id = ?',
    [matchID],
    function (err, results, fields) {
        if (err)
            response.send(err);
        else if (results.length == 0)
            response.send("No players found in the match."); // We are sending a message if we don't have any players in the match.
        else
            response.send(results); // We are sending the array of players.
    });
});

module.exports = router;

// neste ficheiro: conseguir encontrar e criar uma match, se nao houver um player 1 entao criar um, se sim entao criar um player 2, e also dar get de todas as matches, uma match especifica, e a info dum certo player duma certa match