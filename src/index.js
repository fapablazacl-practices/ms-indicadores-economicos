
const { IndeconService } = require('./indecon-service');

const indeconService = new IndeconService();

indeconService.getAu()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('error inside primise!');
        console.log(err);
    });

/*
const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
    http.request({
        host: 'www.indecon.online',
        path: '/values/plata',
        method: 'GET'
    }, (res) => {
        response.send({
            "result": res.response.
        });
    });    
});

app.listen(8000);
*/
