const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// rota simples de health check
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'API Investigation Lab funcionando 🚀'
    });
});

app.use('/users', userRoutes);

module.exports = app;