const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./dbmessages.js');

const app = express();
const port = process.env.PORT || 9001;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/instant-messenger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => handleError(error));

app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(`new message created: \n${data}`);
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});