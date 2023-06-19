const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './BancoDeDados.db'
  }
});

class Livro {
  static async criarLivro(livro) {
    try {
      const [id] = await database('tb_livros').insert(livro);
      console.log('Livro criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarLivro(id, livro) {
    try {
      const result = await database('tb_livros').where({ id }).update(livro);
      console.log('Livro atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterLivro(id) {
    try {
      const livro = await database('tb_livros').where({ id }).first();
      console.log('Livro encontrado:', livro);
    } catch (error) {
      console.error('Erro ao obter livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirLivro(id) {
    try {
      const result = await database('tb_livros').where({ id }).del();
      console.log('Livro excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Livro;