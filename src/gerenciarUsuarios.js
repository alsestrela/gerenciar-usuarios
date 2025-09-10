/* 
Modelo de um objeto
[
 {
    primeiraPropriedade: 'Valor'
    segundaPropriedade: 'Valor'
 },
 {
    primeiraPropriedade: 'Valor'
    segundaPropriedade: 'Valor'
 }
]
*/

// constante global
const usuarios = [
  {
    nome: 'Matheus',
    email:'matheus@email.com'
  },
  {
    nome: 'Lucas',
    email:'lucas@email.com'
  },
  {
    nome: 'Marcos',
    email:'marcos@email.com'
  },
  {
    nome: 'João',
    Email:'joao@email.com'
  }
];

//Retorna uma lista de nomes gravados na lista de nomes de usuários
function listarUsuarios() {
    return usuarios;
} 

//Acrescenta um novo nome de usuário passado no momento da chamada da função ao fim da lista
// comando push - adicionar nome no final da fila
function adicionarNovoUsuario (usuario) {
    usuarios.push(usuario);
} 

//compartilhar funções para teste
module.exports = {
    listarUsuarios,
    adicionarNovoUsuario
}