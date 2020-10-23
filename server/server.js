const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const data = require('./data.json');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use(express.static('assets'));

app.get('/objects', (_req, res) => {
    res.json(data)
});
  
app.get('/objects/:id', (req, res) => {
    const objectID = req.params.id;
    if (data.some(dataObject => dataObject.id === objectID)) {
        res.json(data.find(dataObject => dataObject.id === objectID));
    }
});

app.listen(port, () => console.log(`Running on ${port}`))