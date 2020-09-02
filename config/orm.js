var connection = require("../config/connection.js");

var connectionQuery = require('util').promisify(connection.query.bind(connection));

var orm = {
 
    selectAll: function(){
      var query = "SELECT * from burgers";
      return connectionQuery(query);
    },
    insertOne: function( cols, vals){
        var queryString = "INSERT INTO ??";

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += '?'.repeat(vals.length).split('').join(', '); "?, ?"
        queryString += ") ";
    
        console.log(queryString);
    
        return connectionQuery(queryString, ["burgers", ...vals]);
    },
    updateOne: function(objColVals, condition){
        var queryString = "UPDATE " + " burgers SET ? WHERE ?";
    
        // UPDATE burgers SET ? WHERE ?
        console.log(queryString);
        return connectionQuery(queryString, [objColVals,condition]);
    },
    // DELETE FROM burgers WHERE id = 1
    deleteOne: function(condition){
        var queryString = " DELETE " + "burgers";
        queryString += " WHERE ? ";
    
        console.log(queryString);
        return connectionQuery(queryString,[condition]);
    }

};


module.exports = orm;