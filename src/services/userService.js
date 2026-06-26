const userRepository = require('../repositories/userRepository');

// cria um usuário 
async function createUser(name, email) {
    const id = await userRepository.create(name, email);
    return { id, name, email };
}

// busca um usuário pelo id
async function getUserById(id) {
    return userRepository.findById(id);
}

// lista todos os usuários
async function listUsers() {
    return userRepository.findAll();
}

module.exports = { createUser, getUserById, listUsers };