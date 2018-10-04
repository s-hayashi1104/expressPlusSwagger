const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');

//cross site
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const options = {
    swaggerDefinition: {
        info: {
            title: 'Hello World',
            version: '1.0.0.'
        },
    },
    apis: ['./index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/api-docs.json', function(req, res){
    res.setHeader('Content-Type','application/json');
    res.send(swaggerSpec);
});

app.post('/login', function(req, res) {
    res.json(req.body);
});

//listen
app.listen(3000, function(){
    console.log("Listen on port 3000.");
});
