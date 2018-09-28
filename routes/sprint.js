var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var sprint = require("../models/sprint.js");

/* GET ALL sprintS */
router.get("/sprint/:user", function(req, res, next) {
  var query = { user: req.url.split(":")[1] };
  sprint.find(query, function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
/* GET SINGLE sprint BY ID */
router.get("/:id", function(req, res, next) {
  sprint.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE sprint */
router.post("/", function(req, res, next) {
  sprint.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE sprint */
router.put("/:id", function(req, res, next) {
  sprint.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE sprint */
router.delete("/sprint/:user", function(req, res, next) {
  var query = { user: req.url.split(":")[1] };
  sprint.deleteMany(query, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
