require('dotenv').config();
const jwt = require('jsonwebtoken');
const snowflake = require('snowflake-sdk');
const { Client } = require('pg');

const pgClient = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

const connection = snowflake.createConnection({
    account: process.env.SNOWFLAKE_ACCOUNT,
    username: process.env.SNOWFLAKE_USERNAME,
    password: process.env.SNOWFLAKE_PASSWORD,
    warehouse: process.env.SNOWFLAKE_WAREHOUSE,
    role: process.env.SNOWFLAKE_ROLE
});


pgClient.connect((err) => {
    if (err) {
        console.error("Failed to connect to PostgreSQL:", err);
    } else {
        console.log("Connected to PostgreSQL.");
    }
});

connection.connect((err, conn) => {
    if (err) {
        console.error("Failed to connect to Snowflake:", err);
    } else {
        console.log("Connected to Snowflake with connection ID:", conn.getId());
    }
});

const getUsersFromPostgres = async () => {
    try {
        const res = await pgClient.query('SELECT username, password FROM users');
        // console.log(res.rows);
        return res.rows;
    } catch (err) {
        console.error('Error fetching users from PostgreSQL:', err);
        throw err;
    }
};

const querySnowflake = async (sqlQuery) => {
    return new Promise((resolve, reject) => {
        connection.execute({
            sqlText: sqlQuery,
            complete: (err, stmt, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        });
    });
};

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.sendStatus(403);
    }
    jwt.verify(token, 'secret-key', (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};

async function login(username, password) {
    try {
        const users = await getUsersFromPostgres();
        var user = null;
        for (let i=0; i<users.length; i++) {
            if ( users[i].username == username ) {
                user = users[i];
                // console.log(username, user.username);
                break;
            }
        }
        if (!user || user.password !== password) {
            throw new Error('Invalid username or password');
        }
        // const token = jwt.sign({ username: user.username }, 'secret-key', { expiresIn: '1h' });
        return 0;
    } catch (error) {
        console.log(error.message);
        return 1;
    }

};

module.exports = {
    querySnowflake,
    authenticateJWT,
    login
};
