var orm = require("../config/orm.js");
 

var burger = {
    read: () => orm.selectAll(),
    create: (cols,vals) => orm.insertOne(cols,vals),
    update: (objcolsvals, condition) => orm.updateOne(objcolsvals, condition)
 }






















module.exports = burger;