import mysql from 'mysql2';
import 'dotenv/config';

const con = mysql.createConnection({
    host: process.env.host ,
    user: process.env.user ,
    password: process.env.password ,
    database: process.env.database
 });

export default {con}