var express = require('express');
var app = express();
console.log('Hello World');

app.get('/', (req, res) => {
  res.send('Successful response.');
 console.log('Hello World');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));

































 module.exports = app;
