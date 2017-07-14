var express = require('express');
var app = express();
var multer = require("multer")

app.set('view engine', 'pug');

var upload = multer();

app.get('/', function (req, res) {
  res.render('upload', { req:req })
})

app.post('/', upload.single('file'), function(req, res) {
    if (req.file != undefined){
        res.json({size:req.file.size});
    } else {
        res.status(400).send("Bad Request, File missing.")
    }
});


var port;
port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Example app listening on port: '+port)
})
