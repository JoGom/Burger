const orm = require("../config/orm");

let burger = {
    //grabs all data in burgers table
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
        cb(res);
        });
    },
    // creates new burger, only requires burger name everything else is auto generated or has a default value
    insertOne: function(name, cb) {
        orm.insertOne("burgers", ["burger_name"], [name], cb);
      },
    //chooses burger based on id and changes devoured to true
    updateOne: function(id, cb) {
        orm.updateOne("burgers", {devoured: true} , `id=${id}`, cb);
    },
    };

// Export the database functions for the controller (catsController.js).
module.exports = burger;
  