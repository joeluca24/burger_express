var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.read()
        .then(data => {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            
              res.render("index", hbsObject);
        })
        .catch(err => {
            console.log(err);
        });
});











module.exports = router;