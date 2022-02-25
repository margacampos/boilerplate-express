var express = require("express");
var bodyParser = require("body-parser");
var app = express();
console.log("Hello World");
let absolutePath = __dirname + "/views/index.html";

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.use(bodyParser.urlencoded({extended: false}));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json({
    message:
      process.env.MESSAGE_STYLE !== "uppercase" ? "Hello json" : "HELLO JSON",
    e: `${req.method} ${req.path} - ${req.ip}`,
  });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get('/:word/echo', (req, res)=>{
  res.json({echo: req.params.word});
});

app.get('/name', (req,res)=>{
  res.json({name: `${req.query.first} ${req.query.last}`})
});

app.post('/name', (req, res)=>{
  res.json({name:`${req.body.first} ${req.body.last}`})
});

module.exports = app;

































 module.exports = app;
