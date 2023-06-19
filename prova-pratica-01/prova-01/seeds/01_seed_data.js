exports.seed = function(knex) {
    return knex('tb_autores')
    .del()
    .then(function() {
        return knex('tb_autores').insert([
            { nome: 'Machado de Assis', biografia: 'Nasceu em 21/06/1839 em Rio de Janeiro; morreu em 29/09/1908, também em Rio de Janeiro. Foi escritor, jornalista, contista, cronista, dramaturgo e poeta. É considerado por muitos críticos, estudiosos, escritores e leitores o maior nome da literatura brasileira. Escreveu em praticamente todos os gêneros literários, sendo poeta, romancista, cronista, dramaturgo, contista, folhetinista, jornalista e crítico literário.', nacionalidade: 'Império do Brasil' },
            { nome: 'José de Alencar', biografia: 'Nasceu em 01/05/1829 em Messejana (atualmente parte de Fortaleza); morreu em 12/12/1877 em Rio de Janeiro. Foi jornalista, político, advogado, crítico literário e escritor. É notável como escritor por ter sido o fundador do romance de temática nacional, e por ser o patrono da cadeira fundada por Machado de Assis na Academia Brasileira de Letras.', nacionalidade: 'Império do Brasil' },
            { nome: 'Luís de Camões', biografia: 'Nasceu por volta de 1524, provavelmente em Lisboa; morreu em 10/06/1579 ou 1580 em Lisboa. Foi poeta e soldado, considerado uma das maiores figuras da literatura lusófona e um dos grandes poetas da tradição ocidental.', nacionalidade: 'Reino de Portugal' },
            ]);
        })
    .then(function() {
        return knex('tb_livros')
        .del()
        .then(function() {
            return knex('tb_livros').del();
        });
    });
};