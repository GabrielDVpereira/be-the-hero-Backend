// criate a migration npx knex migrate:make name_migration
// create a table npx knex migrate:latest

exports.up = function (knex) {
  return knex.schema.createTable("ongs", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable(); //2 limita o tamanho do texto pra 2
  });
};

exports.down = function (knex) {
  // voltar atrás, deletar a tabela

  return knex.schema.dropTable("ongs");
};
