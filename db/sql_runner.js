// Get a Pool instance from the pg package.
// Configure the Pool object to connect to our local database
// Declare a class called SqlRunner with a static **run** method
// **run** will take 2 arguments. An SQL string, array of values
// Use the Pool object to run the SQL query
// .then takes a callback that will be passed the results of the SQL query

const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: "star_wars"
});

class SqlRunner {
  static run(sqlQuery, values = []) {
    return pool.query(sqlQuery, values).then(results => {
      return results;
    });
  }
}

module.exports = SqlRunner;
