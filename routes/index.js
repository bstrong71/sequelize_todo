const express   = require("express");
const models    = require("../models/index");

const router    = express.Router();


router.get("/", function(req, res) {

  res.render("index");
});

router.get("/complete/:task", function(req, res) {
  todos[req.params.task - 1].complete = true;
  res.redirect("/");
})

router.post("/", function(req, res) {
  let obj = {task: req.body.task, complete: false, id: todos.length + 1};
  todos.push(obj);
  res.redirect("/");
})


module.exports = router;
