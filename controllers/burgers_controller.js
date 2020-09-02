const express = require("express");

const router = express.Router();


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
            res.status(500).json({error: "No data found on server. Error with reaad."});
        });
});
router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ])
    .then(function (result) {
        res.json({ id: result.insertId });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({error: "Cannot insert data correctly. Bad request"})
    })
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = {id : req.params.id};

    console.log("condition", condition);
    console.log(req.body);
    burger.update({
        devoured: req.body.devoured
    }, condition )
    .then(function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete("/api/burgers/:id", function (req, res) {
    var condition = { id: req.params.id };

    burger.delete(condition)
    .then(function(result) {
        if (result.affectedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;