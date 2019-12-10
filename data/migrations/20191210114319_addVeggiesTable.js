exports.up = function(knex) {
  return knex.schema.createTable('veggies', tbl => {
    tbl.increments();

    tbl
      .string('name', 255)
      .unique()
      .notNullable()
      .index();
    tbl.boolean('like_it').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};
