const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite3'
  },
  useNullAsDefault: true
});

const Disciplinas = {
  getAll: async () => {
    return db('disciplinas');
  },

  getById: async (id) => {
    return db('disciplinas').where({ id }).first();
  },

  create: async (disciplina) => {
    return db('disciplinas').insert(disciplina);
  },

  update: async (id, disciplina) => {
    return db('disciplinas').where({ id }).update(disciplina);
  },

  delete: async (id) => {
    return db('disciplinas').where({ id }).del();
  }
};

module.exports = Disciplinas;