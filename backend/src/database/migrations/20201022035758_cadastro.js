
exports.up = function(knex) {
    return knex.schema.createTable('registro', function(table) {
        table.increments();
        table.string('titulo').notNullable();
        table.string('data').notNullable();
        table.string('hora').notNullable();
        table.string('descricao').notNullable();
        table.string('nome').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('registro');
  
};