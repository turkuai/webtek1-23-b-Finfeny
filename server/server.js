//const { defaulttitles } = require('./data.js');

const express = require('express') // on http palvelin joka käyttää nodejs kirjastoa
const app = express()
const port = 8080
const bodyParser = require('body-parser'); //bogdan selittää myöhemmin

app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Vili",
  password: "1234",
  database: "vili"
});

con.connect(function (err) {
  if (err) {
    throw err;  //jos ei pysty yhdistämään niin näyttää terminalissa syyn eli "err" ja lopettaa palvelimen
  }
});

app.get('/recipes', (req, res) => {   //get:in eka parametri on osoite eli "/" ja siihen voi laittaa mitä haluaa. request ja response ovat objekteja. request on tietoa selaimelta ja response joka palautetaan selaimelle

  con.query("select * from products", function (err, result) {
    if (err) {
      throw err;
    }

    result.forEach(element => {
      element.items = []
      element.pictureUrl = "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg";
    });

    console.log(result);
    res.json(result);
  });
});

app.post('/recipes', bodyParser.json(), (req, res) => {   //post on create      //bodyparser formatoi bodyn eli html elementin json muotoon
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


app.listen(port, () => {  //ajaa palvelimen ja ajaa funktion "()" sisällä jos haluaa.
  console.log(`Example app listening on port ${port}`)
});

/*lastId++;

const newItem = req.body;

//new.newItem.id = lastId;

console.log("new Item:", newItem);

defaultItems.push({ id: newItem.id });
});

//insert into products (title, description) values ("My title", "My description");*/

