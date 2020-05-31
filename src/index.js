/**
 * index.js
 * Punto de entrada principal de la aplicacion
 */

const express = require('express');
const app = express();

const port = 8000;
const { IndicatorController } = require('./controller/indicator-controller');

app.get('/indicator', (req, res) => {
    const controller = new IndicatorController();

    controller
        .get()
            .then( (result) => {
                console.log(result);
                res.send(result);
            })
            .catch( (err) => {
                console.error(err);
                res.send(err);
            });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
