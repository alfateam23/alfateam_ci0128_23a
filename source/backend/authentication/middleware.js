// middleware.js
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const withAuth = function(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}
module.exports = withAuth;

// Con esto se pueden proteger rutas
/* Para llamarlo es así:

// server.js
const withAuth = require('./middleware');
...
app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});
*/