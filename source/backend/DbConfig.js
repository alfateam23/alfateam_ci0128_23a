// Create connection to SQL Server at ECCI (requires ECCI VPN or running inside ECCI network)

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
        database: 'AlphaTeam',
        trustServerCertificate : true
    }
}