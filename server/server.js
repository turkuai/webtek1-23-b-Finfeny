//const { defaulttitles } = require('./data.js');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Vili",
  password: "1234",
  database: "vili"
});

con.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log(err);
});

const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');

app.get('/recipes', (req, res) => {

  con.query("select * from products", function (err, result, fields) {
    if (err) {
      throw err;
    }

    result.forEach(element => {
      element.items = []
      element.pictureUrl = "";
    });

    console.log(result);
    res.json(result);
  });
});

app.post('/recipes', bodyParser.json(), (req, res) => {
  const newItem = req.body;

  console.log("GET products");

  const sql = "insert into products (title, description) values (?, ?)"

  con.query(sql, [newItem.title, newItem.description], function (err, result, fields) {
    if (err) {
      throw err;
    }

    console.log(result);
    res.json({ id: result.insertId })
  });
})

app.patch('/recipes', bodyParser.json(), (req, res) => {
  const updateItem = req.body;

  const sql = "update products set title = ?, description = ? where id = ?";

  con.query(sql, [updateItem.title, updateItem.description, updateItem.id], function (err, result, fields) {
    if (err) {
      throw err;
    }

    console.log(result);
    res.json({ status: "OK" });
  })
});

app.delete('/recipes', bodyParser.json(), (req, res) => {

  const deleteId = req.body.id;

  const sql = "delete from products where id = ?";

  con.query(sql, [deleteId], function (err, result, fields) {
    if (err) {
      throw err;
    }

    console.log(result);
    res.json({ status: "OK" });
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

/*lastId++;

const newItem = req.body;

//new.newItem.id = lastId;

console.log("new Item:", newItem);

defaultItems.push({ id: newItem.id });
});

//insert into products (title, description) values ("My title", "My description");*/

