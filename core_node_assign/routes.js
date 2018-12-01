const fs = require("fs");

const routesHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    getFirstPage(req, res);
  }

  if (url === "/createuser" && method === "POST") {
    console.log(url);
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log(user);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
  if (url === "/users") {
    getUserPage(req, res);
  }
};

const getFirstPage = (req, res) => {
  fs.readFile("./htmls/greetings.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    return res.end();
  });
};
const getUserPage = (req, res) => {
  fs.readFile("./htmls/users.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    return res.end();
  });
};
const getCreateUserPage = (req, res) => {
  fs.readFile("./htmls/createuser.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    return res.end();
  });
};
module.exports = routesHandler;
