const db = require('./db');

// executa comandos que alteram o banco (INSERT, UPDATE, DELETE)
// devolve informações como o id gerado e quantas linhas mudaram
function run(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) {
                reject(err);
            } else {
                // 'this' aqui traz lastID (id inserido) e changes (linhas afetadas)
                resolve({ id: this.lastID, changes: this.changes });
            }
        });
    });
}

// busca uma linha (ex: um usuário por id)
function get(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

// busca várias linhas (ex: lista de usuários)
function all(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

module.exports = { run, get, all };