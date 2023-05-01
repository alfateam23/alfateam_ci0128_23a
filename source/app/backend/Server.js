// Node server for serving API endpoints, without using Express.
// Based on https://progressivecoder.com/how-to-implement-nodejs-routing-without-express/

const http = require('http');
const host = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
    if (req.url == '/visitors' && req.method == 'GET') {
        res.writeHead(200, 'Content-Type', 'application/json')
            .end(JSON.stringify(visitors));
    } else {
        res.writeHead(404)
            .end();
    }
});

server.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}`);
});
