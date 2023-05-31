const mysql = require('mysql');

const db = mysql.createPool({
  host: '35.226.249.81',
  user: 'root',
  password: '',
  database: 'coba'
});

exports.db = db;