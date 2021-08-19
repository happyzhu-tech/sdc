const { Pool } = require('pg');
const info = require('../info.js');

const pool = new Pool({
  host: info.db_host,
  user: info.db_user,
  password: info.db_password,
  database: 'overview',
  port: 5432,
});

module.exports = pool;
