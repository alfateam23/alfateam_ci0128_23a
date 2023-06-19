module.exports = {
  HOST: "127.0.0.1",
  USER: "nodejs",
  PASS: "s0m3%S3cvr3@P2ssw0rd",
  DB: "nodejs",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
