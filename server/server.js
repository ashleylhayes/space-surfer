const express = require('express');
const app = express();
const port = process.env.PORT || 8383;
const bodyParser = require('body-parser');
const data = require('./data.json');
const trivia = require('./trivia.json')
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/static',
express.static('public'))

app.get('/objects', (_req, res) => {
    res.json(data)
});

app.get('/trivia', (_req, res) => {
    res.json(trivia)
});
  
app.get('/objects/:id', (req, res) => {
    const objectID = req.params.id;
    if (data.some(dataObject => dataObject.id === objectID)) {
        res.json(data.find(dataObject => dataObject.id === objectID));
    }
});

app.listen(port, () => console.log(`Running on ${port}`))