const express = require("express");
const session = require("express-session");
// const bodyParser = require("body-parser");
const connection = require('./database');
const match = require('./API/match');
const player = require('./API/player');
const attack = require('./API/attack');
const movement = require('./API/movement');
const store = require('./API/store');
const port = 2000;

connection.connect((err) => {
    if (err){
        console.log("💩 Error connection to DB: " + err);
        return;
    }
    console.log("Connected to database");
});

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("www"));
app.use(session({
    secret: "CPU",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // for how long the code will be absolutely cooking 🔥🔥🔥
    }
}));

// Routes
app.use('/match', match); // Everytime a client requests some that begins with /match, it will be foward to match.js
app.use('/player', player); // Same but with /player
app.use('/attack', attack); // Same but with /attack
app.use('/movement', movement); // Same but with /movement
app.use('/store', store) // Same but with /store

//setTimeout(index, 2000)

//REGISTER ENDPOINT
app.post('/register', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    if (!username){
        res.status(400).send({
            "error": "Missing username! 💩"
        });
        return;
    }

    // Checks if the username already exists in the DB
    // If it does, we send an error message
    // Otherwise, we call the function createTheAccount
    function checkIfLoginExists() {
        connection.execute('SELECT * FROM player WHERE player_username = ?',
        [username],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
                return;
            }
            
            if (results.length > 0)
            {
                res.status(400).send({
                    "error": "Username already exists 💩"
                });
                return;
            }

            createTheAccount();
        });
    }

    function createTheAccount() {
        connection.execute("INSERT INTO player (player_wins, player_losses, player_username, player_email, player_password) VALUES (0, 0, ?, 0, ?)",
        [username, password],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
            }else{
                res.status(200).send({
                    "message": "Account created successfully!"
                });
            }
        });
    }

    checkIfLoginExists();
});

//LOGIN ENDPOINT
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    console.log("Username: " + username)
    console.log("Password: " + password)

    if (!username || !password){
        res.status(400).send({
            "error": "Missing username or password! 💩"
        })
        return;
    }

    // Checks if the login exists in the database.
    function checkLogin(){
        connection.execute('SELECT * FROM player WHERE player_username = ? AND player_password = ?',
        [username, password],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
                return;
            }

            if (results.length == 0){
                res.status(404).send({
                    "error": "Invalid username or password! 💩"
                });
                return;
            }

            LogPlayerIn(results[0].player_username, results[0].player_id);
        });
    }

    // Logs the player in. We store the playerID and the username in the session.
    function LogPlayerIn(playerName, playerID){
        req.session.playerID = playerID;
        req.session.username = username;
        res.status(200).send({
            "message": "Welcome " + playerName
        });
    }

    checkLogin();
});

// Endpoint that checks if the client is logged in. (Just for testing purposes)
app.get('/checkLogin', (req, res) => {
    if (req.session.playerID)
        res.status(200).send({
            "loggedIn": true
        });
    else
        res.status(401).send({
            "loggedIn": false
        })
});

app.get("/player/:playerID/players", (req,res) => {
    var playerID = req.params.playerID;
    
    connection.execute("SELECT * FROM match_player_character WHERE mpc_mp_id = ?",
    [playerID],
    function (err, rows, fields) {
        if (err){
            res.send(err);
            return;
        } else {
            res.send(rows);
        }
    })
});

app.get("/turn/:matchID/turns", (req,res) => {
    var matchID = req.params.matchID;
    
    connection.execute("SELECT * FROM match_ WHERE match_id = ?",
    [matchID],
    function (err, rows, fields) {
        if (err){
            res.send(err);
            return;
        } else {
            res.send(rows);
        }
    })
});

app.get("/hp/:playerID/hp", (req,res) => {
    var playerID = req.params.playerID;
    
    connection.execute("SELECT * FROM match_player_character WHERE mpc_mp_id = ?",
    [playerID],
    function (err, rows, fields) {
        if (err){
            res.send(err);
            return;
        } else {
            res.send(rows);
        }
    })
});

// app.get("/player/:playerID/characters", (req, res) => {
//     var chaID =  req.params.chaID

//     connection.execute("SELECT * FROM match_player_character WHERE mpc_mp_id = ?",
//     [playerID],
//     function (err, rows, fields) {
//         if (err){
//             res.send(err);
//             return;
//         } else {
//         res.send(rows);
//         }
//     })
    
// })

app.listen(port, () => {
    console.log("Server is doing stuff on localhost:" + port);
});