
const { createPool } = require('mysql2/promise');


module.exports = connect = async () => {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fashionstore',
        connectionLimit: 10
    });

    return connection;

}