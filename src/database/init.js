const db = require('./db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela users:', err.message);
        } else {
            console.log('Tabela users pronta.');
        }
    });
});