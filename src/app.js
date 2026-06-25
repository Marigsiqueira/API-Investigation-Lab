const express = require('express');

const app = express();

app.use(express.json());

// rota simples de health check
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'API Investigation Lab funcionando 🚀'
    });
});

module.exports = app;