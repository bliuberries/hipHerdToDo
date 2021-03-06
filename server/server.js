var express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js');
const cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
// app.use(morgan('dev'));
app.use(cors());

const port = 3000;

app.listen(port, function() {
  console.log(`Server started and listening on port ${port}`);
});

app.get('/todo', (req, res) => {
  db.connection.query('SELECT * from mytodo', (err, data)=> {
    if(err){return console.log(err, 'err')}
    res.send(data);
  })
})

app.post('/todo', (req, res) => {
  db.connection.query(`INSERT into mytodo (todo, completed) values ("${req.body.todo}", "false")`, (err, data) => {
    res.send();
  });
})

app.delete('/todo', (req,res) => {
  db.connection.query(`DELETE FROM mytodo where todo = "${req.body.todo}"`, (err, data) => {
    res.send();
  })
})
app.put('/todo', (req, res) => {
  db.connection.query(`UPDATE mytodo SET todo = "${req.body.edited}" WHERE todo = "${req.body.todo}"`, (err, data) => {
    res.send();
  })
})

app.delete('/todo-da', (req, res) => {
  db.connection.query('DELETE FROM mytodo', (err, data) => {
    res.send();
  })
})


app.put('/markcomplete', (req, res) => {
  db.connection.query(`UPDATE mytodo SET completed = "${req.body.bool}" WHERE todo = "${req.body.todo}"`, (err, data) => {
    res.send();
  })
})