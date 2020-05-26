
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send({
        "value": "true"
    });
});

const server = app.listen(8000, () => {
    console.log(`Ejecutando en ${host}:${port}`);
});
