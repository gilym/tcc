const mysql = require('mysql');

const db = mysql.createPool({
  host: '34.133.150.216',
  user: 'root',
  password: '',
  database: 'coba'
});

exports.db = db;