var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/hello', function(req, res) {
    res.send('Well, hello to you too!');
});

app.get('/KEVIN_IS_AWESOME', function(req, res){
    res.send('I have to agree. He is simply the best;)');
});

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port 3000!');
});
