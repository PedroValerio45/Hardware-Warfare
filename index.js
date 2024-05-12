const express = require("express");
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

// Routes
app.use('/match', match); // Everytime a client requests some that begins with /match, it will be foward to match.js
app.use('/player', player); // Same but with /player
app.use('/attack', attack); // Same but with /attack
app.use('/movement', movement); // Same but with /movement
app.use('/store', store) // Same but with /store

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

// app.use(session({
//     secret: "CPU",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 // Time the cookie will last
//     }
// }));