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
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        return connectionQuery(queryString, ["burgers", ...vals]);
    },
    updateOne: function(objColVals, condition){
        var queryString = "UPDATE " + "burgers";

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        return connectionQuery(queryString);
    }


};


module.exports = orm;