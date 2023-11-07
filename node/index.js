const express = require("express");
const app = express();
const mysql = require("mysql");

const PORT = 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.get("/health", (req, res) => {
  if (!pool) {
    var pool = mysql.createPool({
      host: "docker-mysql",
      user: "root",
      password: "1234",
      database: "joinc",
      port: 3306,
    });
  }
  pool.getConnection((err, conn) => {
    if (err) {
      console.log(err);
      res.send(err.message);
    } else {
      conn.release();
      res.send("db connection success");
    }
  });
});

app.listen(PORT, () => {
  console.log("node js server is running");
});
