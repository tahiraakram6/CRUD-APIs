const Pool = require('pg').Pool
require('dotenv').config()
console.log(process.env)  //it show credential of env in terminal

const pool = new Pool(
    {
        user: process.env.db_user,
        host: process.env.db_host,
        database: process.env.db_database,
        password: process.env.db_password,
        port:process.env.db_port,
        ssl:{
            rejectUnauthorized : false   
        }
    }
);

module.exports = pool;