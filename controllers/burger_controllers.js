const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

//redirects user to home page upon initial load
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", {burgers: data});
    });
});

router.post("/home/create", function(req, res) {
    burger.insertOne(req.body.name, function(data) {
        console.log(data);
        console.log("Burger Added");
        //refreshes the page to show new burger
        res.redirect("/home");
    });
});

router.put("/home/devour/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
    console.log(result)
    console.log(`burger ${req.params.id} eaten!`);
    res.status(200).end();
    });
});



module.exports = router;