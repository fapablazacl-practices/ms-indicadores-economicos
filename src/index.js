/**
 * index.js
 * Punto de entrada principal de la aplicacion
 */

const express = require('express');
const app = express();

const port = 8000;
const { IndicatorController } = require('./controller/indicator-controller');

app.get('/stats/:id', (req, res) => {
    const controller = new IndicatorController();

    controller
        .getStats(req.params.id)
            .then( (result) => {
                const body = {
                    code: 'success',
                    payload: result
                };

                res.send(body);
            })
            .catch( (err) => {
                console.error(err);

                const body = {
                    code: 'error', 
                    payload: {
                        reason: err.message
                    }
                }

                res.status(400);
                res.send(body);
            });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
    console.log('Errores se desplegaran por el terminal ...');
});
