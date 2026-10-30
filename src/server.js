const http = require("http");
const todos = [];
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/todos") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(todos));
  }
  res.writeHead(404); res.end();
});
if (require.main === module) server.listen(3000, () => console.log("todo api on :3000"));
module.exports = { server, todos };
