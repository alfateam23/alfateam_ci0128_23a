// Login and register backend
// Based on: https://github.com/expressjs/express/blob/master/examples/auth/index.js
// Using bcrypt to hash passwords: https://blog.logrocket.com/password-hashing-node-js-bcrypt/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3030

const bcrypt = require('bcrypt')
const saltRounds = 10

let storedHash

app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const credentials = req.body
    if(bcrypt.compareSync(credentials.pass, storedHash)) {
      res.send(`Login successful\n`)
    } else {
      res.send('Login failed\n')
    }
});

app.post('/register', (req, res) => {
  storedHash = bcrypt.hashSync(req.body.pass, saltRounds)
  res.send(`stored bcrypt hash is: \n${storedHash}\n`)
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
