const { run, get, all } = require('../database/helpers');

// insere um usuário e devolve o id gerado
async function create(name, email) {
    const result = await run(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email]
    );
    return result.id;
}

// busca um usuário pelo id
async function findById(id) {
    return get('SELECT * FROM users WHERE id = ?', [id]);
}

// busca um usuário pelo email (vai ser útil no Ticket 003!)
async function findByEmail(email) {
    return get('SELECT * FROM users WHERE email = ?', [email]);
}

// lista todos os usuários
async function findAll() {
    return all('SELECT * FROM users ORDER BY id');
}

module.exports = { create, findById, findByEmail, findAll };