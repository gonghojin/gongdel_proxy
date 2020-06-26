const express = require('express');
const pino = require('express-pino-logger')();

const app = express();

app.get('/api/greeting', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ result:true }));
});

app.listen(8080, () =>
    console.log('Express server is running on localhost:3001')
);