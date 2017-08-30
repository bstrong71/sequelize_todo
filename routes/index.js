const express   = require("express");
const models    = require("../models/index");

const router    = express.Router();

//find all Todos when hitting main page//
router.get("/", function(req, res) {
  models.Todo.findAll()
    .then(function(data) {
      console.log("THIS IS TODO DATA", data);
      res.render("index", {todo: data});
    });
});

//creates and saves all in one step//
router.post("/", function(req, res) {
  models.Todo.create({
    task: req.body.task,
  })
  .then(function(data) {
    res.redirect("/");
  });
});

//complete tast//
router.get("/complete/:id", function(req, res) {
  models.Todo.update({
    name: req.body.name,
    complete: true
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(function(data) {
      res.redirect("/");
    });
});




module.exports = router;
