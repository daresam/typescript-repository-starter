
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
      table.charset('utf8mb4');
      table.collate('utf8mb4_unicode_ci');
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').unique().notNullable();
      table.string('username');
      table.string('password').notNullable();
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };

  