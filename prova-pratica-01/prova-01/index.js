const Autor = require('./models/Autor');
const Livro = require('./models/Livro');

const Autor4 = {
  nome: 'Thomas Mann',
  biografia: 'Nasceu em 06/06/1875 na Cidade Livre de Lübeck; morreu em 12/08/1955 em Zurique. Foi um escritor, romancista, ensaísta, contista e crítico social do Império Alemão. Tendo recebido o Nobel de Literatura de 1929, é considerado um dos maiores romancistas do século XX.',
  nacionalidade: 'Império Alemão'
};

const Livro1 = {
	titulo: 'Dom Casmurro',
	genero: 'Realismo psicológico e romance impressionista',
	data_publicacao: '1899',
	autor_id: 1
};

const Livro2 = {
	titulo: 'Quincas Borba',
	genero: 'Romance',
	data_publicacao: '1892',
	autor_id: 1
};

const Livro3 = {
	titulo: 'Ubirajara',
	genero: 'Romance histórico',
	data_publicacao: '1874',
	autor_id: 2
};

const Livro4 = {
	titulo: 'Os Lusíadas',
	genero: 'Poesia épica',
	data_publicacao: '1572',
	autor_id: 3
};

const Livro5 = {
	titulo: 'A Montanha Mágica',
	genero: 'Romance',
	data_publicacao: '1924',
	autor_id: 4
};

Autor.criarAutor(Autor4);
Autor.obterAutor(4);

Livro.criarLivro(Livro1);
Livro.obterLivro(1);

Livro.criarLivro(Livro2);
Livro.obterLivro(2);

Livro.criarLivro(Livro3);
Livro.obterLivro(3);

Livro.criarLivro(Livro4);
Livro.obterLivro(4);

Livro.criarLivro(Livro5);
Livro.obterLivro(5);

Autor.excluirAutor(4);