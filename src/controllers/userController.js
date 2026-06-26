const userService = require('../services/userService');

// POST /users
async function create(req, res) {
    try {
        const { name, email } = req.body;

        // validação
        if (!name || !email) {
            return res.status(400).json({
                error: 'name e email são obrigatórios'
            });
        }

        const novoUsuario = await userService.createUser(name, email);
        return res.status(201).json(novoUsuario);
    } catch (err) {
        console.error('Erro ao criar usuário:', err.message);
        return res.status(500).json({ error: 'erro interno ao criar usuário' });
    }
}

// GET /users 
async function list(req, res) {
    try {
        const usuarios = await userService.listUsers();
        return res.status(200).json(usuarios);
    } catch (err) {
        console.error('Erro ao listar usuários:', err.message);
        return res.status(500).json({ error: 'erro interno ao listar usuários' });
    }
}

// GET /users/:id 
async function getById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await userService.getUserById(id);

        if (!usuario) {
            return res.status(404).json({ error: 'usuário não encontrado' });
        }

        return res.status(200).json(usuario);
    } catch (err) {
        console.error('Erro ao buscar usuário:', err.message);
        return res.status(500).json({ error: 'erro interno ao buscar usuário' });
    }
}

module.exports = { create, list, getById };