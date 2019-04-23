var express = require('express');
var router = express.Router();
const SqlRunner = require("../db/sql_runner");

/* GET darkside chars only. */
router.get('/:darkside', function(req, res) {
  SqlRunner.run("SELECT * FROM characters WHERE darkside = $1", [req.params.darkside]).then(
    result => {
      res.status(200).json(result.rows);
});
});

/* GET characters listing. */
router.get('/', function(req, res) {
  SqlRunner.run("SELECT * FROM characters ORDER BY name ASC").then(result => {
  res.status(200).json(result.rows);
});
});

/* GET single user with id. */
router.get('/:id', function(req, res) {
  SqlRunner.run("SELECT * FROM characters WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result.rows);
});
});

/* POST create new user. */
router.post('/', function(req, res) {
  SqlRunner.run("INSERT INTO characters (name, darkside, age) VALUES ($1, $2, $3)",
    [req.body.name, req.body.darkside, req.body.age])
      .then((result) => {
        res.status(201).json(result);
    });
});

/* PUT update single user with id. */
router.put('/:id', function(req, res) {
  SqlRunner.run("UPDATE characters SET name=$2, darkside=$3, age=$4 WHERE id = $1",
    [req.params.id, req.body.name, req.body.darkside, req.body.age])
      .then((result) => {
        res.status(200).json(result);
    });
});

/* DELETE destroy single user with id. */
router.delete('/:id', function(req, res) {
  SqlRunner.run("DELETE FROM characters WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result);
});
});


module.exports = router;
