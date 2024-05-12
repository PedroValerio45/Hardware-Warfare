const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'uj3.h.filess.io', // Same as 127.0.0.1
    user: 'hardwarewarfare_prettyoil', // This could be different. Defined at installation!
    port: '3307',
    password: 'WarfareHardware', // This is the root password of the DB
    database: 'hardwarewarfare_prettyoil' // Schema name :)
});

module.exports = connection;