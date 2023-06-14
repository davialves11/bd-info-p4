const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite3'
  },
  useNullAsDefault: true
});

const Professores = {
  getAll: async () => {
    return db('professores');
  },

  getById: async (id) => {
    return db('professores').where({ id }).first();
  },

  create: async (professor) => {
    return db('professores').insert(professor);
  },

  update: async (id, professor) => {
    return db('professores').where({ id }).update(professor);
  },

  delete: async (id) => {
    return db('professores').where({ id }).del();
  }
};

module.exports = Professores;