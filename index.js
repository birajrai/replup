const http = require("http");

function config(options = {}) {
  const port = options.port || 3000;
  const customUrl = options.path || "/";
  const customResponse = options.message || "200 OK!";
  const debug = options.debug || false;

  const server = http.createServer((req, res) => {
    if (debug) {
      console.log(`::debug:: => ${req.method.toLowerCase()} ${req.url}`);
    }

    if (req.url === customUrl) {
      res.writeHead(200);
      res.end(customResponse);
    }
  });

  server.listen(port, () => {
    if (debug) {
      console.log(`::debug:: => Server listening on port ${port}`);
    }
  });
}

module.exports = { config };
