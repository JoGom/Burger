const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

//redirects user to home page upon initial load
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    })
})

module.exports = router;