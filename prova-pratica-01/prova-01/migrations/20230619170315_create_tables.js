exports.up = function(knex) {
    return knex.schema
        .createTable('tb_autores', function(table) {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('biografia').notNullable();
        table.string('nacionalidade').notNullable();
      })
      .createTable('tb_livros', function(table) {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('genero').notNullable();
        table.string('data_publicacao').notNullable();
        table.integer('autor_id').unsigned();
        table.foreign('autor_id').references('tb_autores.id');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tb_autores')
      .dropTableIfExists('tb_livros');
  };