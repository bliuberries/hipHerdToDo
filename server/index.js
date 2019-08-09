var express = require('express');
const bodyParser = require('body-parser');

const db = require('../database/index.js');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.get('/', (req, res) => {
  db.connection.query('SELECT * from todos', (err, data)=> {
    if(err){return console.log(err, 'err')}
    res.send(data);
  })
})

app.post('/savetodos', (req, res) => {

})