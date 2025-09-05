// constante global
const usuarios = ['Matheus', 'Lucas', 'Marcos', 'João'];

//Retorna uma lista de nomes gravados na lista de nomes de usuários
function listarUsuarios() {
    return usuarios;
} 

//Acrescenta um novo nome de usuário passado no momento da chamada da função ao fim da lista
// comando push - adicionar nome no final da fila
function adicionarNovoUsuario (nome) {
    usuarios.push(nome);
} 

//compartilhar funções para teste
module.exports = {
    listarUsuarios,
    adicionarNovoUsuario
}