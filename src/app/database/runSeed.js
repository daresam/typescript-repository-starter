function runSeed(tableName, seedsData) {
    return function(knex, Promise) {
      return knex.schema
        .raw('SET foreign_key_checks=0')
        .then(() => {
          // Deletes ALL existing entries
          return knex(tableName)
            .truncate()
            .then(function() {
              // Inserts seed entries
              return knex(tableName).insert(seedsData);
            });
        })
        .then(() => knex.schema.raw('set foreign_key_checks=1'));
    };
  }
  
  module.exports = {
    runSeed,
  };
  