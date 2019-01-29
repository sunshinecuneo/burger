var express = require("express");
var router = express.Router();
var db = require("../models");


// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  db.Burger.findAll().then(function (burgers) {
    res.render("index", { burgers });
  })
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function (burger) {
    console.log(burger);
    res.redirect("/");
  })
});


// put route -> back to index
router.put("/burgers/update/:id", function (req, res) {
  db.Burger.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (burger) {
      console.log(burger);
      res.end();
    })
});

module.exports = router;
