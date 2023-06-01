import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write("<h1>Hello World!</h1>");
  res.end();
}).listen(port, () => {
  console.log(`server is running on port ${port}`)
})