// criate a migration npx knex migrate:make name_migration
// create a table npx knex migrate:latest

exports.up = function (knex) {
  return knex.schema.createTable("incidents", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("value").notNullable();

    table.string("ong_id").notNullable();

    table.foreign("ong_id").references("id").inTable("ongs"); // cria uma chave estrangeira, que pertence a outra tabela
  });
};

exports.down = function (knex) {
  // voltar atrás, deletar a tabela

  return knex.schema.dropTable("incidents");
};
