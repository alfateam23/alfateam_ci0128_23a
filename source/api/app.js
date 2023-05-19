// Login and register backend
// Based on: https://github.com/expressjs/express/blob/master/examples/auth/index.js
// Using bcrypt to hash passwords: https://blog.logrocket.com/password-hashing-node-js-bcrypt/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3030

const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(bodyParser.json())

app.post('/login', (req, res) => {
  try {
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.pass, saltRounds)
    res.send(hash);
  }
  catch (e) {
    console.log(e);
  }
});

app.post('/register', (req, res) => {
  res.send('POST /register')
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
