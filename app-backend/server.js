const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./dbmessages.js');
const Pusher = require("pusher");

const app = express();
const port = process.env.PORT || 9001;

const pusher = new Pusher({
    appId: "1102886",
    key: "cedd086a7e00d1d82fe1",
    secret: "af6518d16e3a1d965385",
    cluster: "eu",
    useTLS: true
  });

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/instant-messenger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => handleError(error));

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected');

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
    });
});

app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

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