//Importa as funções que serão testadas
const { listarUsuarios } = require('../src/gerenciarUsuarios');
const { adicionarNovoUsuario } = require('../src/gerenciarUsuarios');

//Importa comando que será usado da biblioteca chai
const { expect } = require('chai');

describe ('Testes das funções de Gestão de Usuários', function() {
    it ('Validar que posso adicionar um novo nome lista de usuarios ', function () {

        //1.Adiciona um novo nome na lista de usuários
        adicionarNovoUsuario ({
            nome:'Luzia',
            email:'luzia@email.com'
        });
        
        //2.Retornar a lista de usuários na caixa lista de usuarios
        const listaDeUsuarios = listarUsuarios();

        //3.compara se o novo nome/objeto está no fim da lista de usuários
        //to.equal = compara 2 valores // at(-1) = está na posição x na lista // at(-0) = primeira posição

        //expect(listaDeUsuarios.at(-1).nome).to.equal('Luzia'); 
        //expect(listaDeUsuarios.at(-1).email).to.equal('luzia@email.com');
        
        //to.deep.equal = to.eql usado para comparar objeto
        expect(listaDeUsuarios.at(-1)).to.eql({  
            nome:'Luzia',
            email:'luzia@email.com'
        });
    });
 });