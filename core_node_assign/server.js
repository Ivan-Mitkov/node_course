const http = require("http");
const routesHandler = require("./routes.js");

const server = http.createServer(routesHandler);

const port = process.env.port || 3000;
server.listen(3000, () => {
  console.log("Listen to port: ", port);
});
