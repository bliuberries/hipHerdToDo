var express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js');
const cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.use(cors());

const port = 3000;

app.listen(port, function() {
  console.log(`Server started and listening on port ${port}`);
});

app.get('/getTodos', (req, res) => {
  db.connection.query('SELECT * from mytodo', (err, data)=> {
    if(err){return console.log(err, 'err')}
    res.send(data);
  })
})

app.post('/addtodo', (req, res) => {
  db.connection.query(`INSERT into mytodo (todo, completed) values ("${req.body.toDo}", "false")`, (err, data) => {
    res.send();
  });
})

app.put('/', (req, res) => {
  db.connection.query(`UPDATE `)
})