
exports.up = function(knex) {
    // Create a table
   return knex.schema
      .createTable('bookstores', table => {
        table.increments('id');
        table.string('bookstore_name').notNullable();
        table.timestamps(true,true);
      })
      // ...and another
      .createTable('books', table => {
        table.increments('id');
        table.string('book_title');
        table.integer('quantity');
        table.string('status')
        table
          .integer('bookstore_id')
          .unsigned()
          .references('bookstores.id');
      })
   
};

exports.down = function(knex) {
  return knex.schema.dropTable('bookstores');
};
