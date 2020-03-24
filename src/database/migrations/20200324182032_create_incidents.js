
exports.up = function(knex) {
  knex.schema.createTable('indicents', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreing('ong-id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('incidents');
};
