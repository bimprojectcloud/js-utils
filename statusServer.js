const http = require("http");

const statusServer = http.createServer(
    (req, res) => {
        res.writeHead(200);
        res.end();
    },
);

module.exports = {
    start: (port) => statusServer.listen(port || process.env.PORT),
    stop: () => statusServer.close(),
};
