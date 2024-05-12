const express = require('express');
const router = express.Router();
const connection = require('../database');

/// Start of the endpoints
// Endpoint that will say hello to the person calling it
router.get('/hello', (request, response) => {
    console.log("Someone is saying hello to me!");

    // Get name from the request
    var name = request.body.name;

    // If the name is set, we say hello to that name
    // Otherwise we don't know who's calling us.
    if (name)
        response.send("Hello " + name);
    else
        response.send("Hello unknown person...");
});

// Endpoint that creates a player
router.post('/createPlayer', (request, response) => {
    // Get all the data from the body of the request
    var playerName = request.body.playerName;
    var playerEmail = request.body.playerEmail;
    var playerPassword = request.body.playerPassword;

    // If any of the data is missing, we send a message to the user
    if (!playerName || !playerEmail || !playerPassword){
        response.send("Missing data! 💩");
        return;
    }

    // The old fashion way (use execute instead. MAFALDA. execute!!!!!)
    // connection.query("INSERT INTO player (player_username) VALUES ('" + playerName + "')");

    // Check if the playerName already exists in the database
    connection.execute('SELECT * FROM player WHERE player_username = ?',
        [playerName],
        function (err, results, fields) {
            // Check if the results length is greater than 0
            if (results.length == 0){
                // If its 0 then we don't have any username with that name in the DB
                createAccount(request, response, playerName, playerEmail, playerPassword);
            }else{
                // If different of 0 (> 0), means we have a username with that name!
                response.send("Username already picked!");
            }
        });
});

// Auxiliar function to create a player. This is called after we validate that there is no playerName in the DB
function createAccount(request, response, playerName, playerEmail, playerPassword){
    // Execute the insert. The function defined here (third parameter) is called callback.
    // Callback gets executed after the insert gets executed (sucessfully or not!)
    connection.execute('INSERT INTO player (player_wins, player_losses, player_username, player_email, player_password) VALUES (?,?,?,?,?)',
        [0, 0, playerName, playerEmail, playerPassword],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                response.send("Account created - " + playerName);
            }
        });
}

module.exports = router;