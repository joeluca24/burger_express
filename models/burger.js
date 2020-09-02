const orm = require("../config/orm.js");


const burger = {
    read: () => orm.selectAll(),
    create: (cols, vals) => orm.insertOne(cols, vals),
    update: (objcolsvals, condition) => orm.updateOne(objcolsvals, condition),
    delete: (condition) => orm.deleteOne(condition)
}






module.exports = burger;