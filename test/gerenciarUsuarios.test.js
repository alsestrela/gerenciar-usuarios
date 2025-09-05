//Importar as funções que serão testadas
const { listarUsuarios } = require('../src/gerenciarUsuarios');
const { adicionarNovoUsuario } = require('../src/gerenciarUsuarios');

//Importar comando que será usado da biblioteca chai
const { expect } = require('chai');

describe ('Testes das funções de Gestão de Usuários', function() {
    it ('Validar que posso adicionar um novo nome lista de usuarios ', function () {

        //1.Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario ('Luzia');
        
        //2.Retornar a lista de usuários na caixa lista de usuarios
        const listaDeUsuarios = listarUsuarios();

        //3.comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Luzia');
    });
 });