const express   = require("express");
const models    = require("../models/index");

const router    = express.Router();

//find all Todos when hitting main page//
router.get("/", function(req, res) {
  models.Todo.findAll()
    .then(function(data) {
      res.render("index", {todo: data});
    })
    .catch(function(err) {
      res.redirect("/");
    });
});

//creates and saves all in one step//
router.post("/", function(req, res) {
  models.Todo.create({
    task: req.body.task,
  })
  .then(function(data) {
    res.redirect("/");
  })
  .catch(function(err) {
    res.redirect("/");
  });
});

//view task to edit//
router.get("/edit/:id", function(req, res) {
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.render("edit", {todo: data});
  })
  .catch(function(err) {
    res.redirect("/");
  });
});

//edit a task//
router.post("/edit/:id", function(req, res) {
  models.Todo.update({
    task: req.body.task,
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(function(data) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.redirect("/");
    });
});


//complete task//
router.get("/complete/:id", function(req, res) {
  models.Todo.update({
    task: req.body.task,
    complete: true
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(function(data) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.redirect("/");
    });
});

//delete a task//
router.get("/delete/:id", function(req, res) {
  models.Todo.destroy({
    where: { //only retrieves if it exists//
      id: req.params.id
    }
  })
    .then(function(data) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.redirect("/");
    });
});


module.exports = router;
