const mysql = require('mysql');

const db = mysql.createPool({
  host: '34.27.126.61',
  user: 'root',
  password: '',
  database: 'coba'
});

exports.db = db;