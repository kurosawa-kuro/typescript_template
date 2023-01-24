require('dotenv').config();
const mysql = require('mysql');
const mysqlPromise = require('../utils/mysqlPromise');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'training',
    user: 'root',
    password: 'password',
});

type infomation = {
    id?: number
    content: string;
}

export async function data_error_promise(): Promise<{ data: infomation[], error: any }> {
    console.log("data_error invoked")
    try {
        await mysqlPromise.beginTransaction(connection);
        await mysqlPromise.query(connection, 'INSERT INTO posts (content) VALUES (?)', ['Hello!']);
        const data: infomation[] = await mysqlPromise.query(connection, 'SELECT * FROM posts');
        console.log("data[0]", data[0].content)
        // var log = 'Post ' + results.insertId + ' added';
        // await mysqlPromise.query(connection, 'INSERT INTO logs (message) VALUES (?)', log);
        await mysqlPromise.commit(connection);
        await mysqlPromise.end(connection);

        return { data, error: null }
    } catch (error) {
        return { data: [], error }
    }
}