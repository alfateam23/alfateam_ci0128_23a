// Create connection to SQL Server at ECCI (requires ECCI VPN or running inside ECCI network)

/*const DbConfig = {
    server: '172.16.202.209',
    authentication: {
        type: 'default',
        options: {
            userName: 'AlphaTeam_Admin',
            password: 'AlphaTeam_Admin' // Never store password as plaintext
        }
    },
    options: {
        database: 'AlphaTeam',
        trustServerCertificate : true
    }
}*/

const DbConfig = {
    server: '172.16.202.209',
    authentication: {
        type: 'default',
        options: {
            userName: 'AlphaTeam_Admin',
            password: 'AlphaTeam_Admin' // Never store password as plaintext
        }
    },
    options: {
        database: 'AlphaTeam_Testing',
        trustServerCertificate : true
    }
}

const database = require('mssql');

async function executeQuery(query) {
    try {
        await database.connect(DbConfig);
        const result = await database.query(query);
        //database.close();
        return result;
    } catch (err) {
        throw err;
    }
    //quitar finally para correr en windows
}

module.exports = { executeQuery };
