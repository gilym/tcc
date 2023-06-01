const mysql = require('mysql');

const db = mysql.createPool({
  host: '35.226.249.81',
  user: 'root',
  password: '12345678',
  database: 'coba'
});

exports.db = db;