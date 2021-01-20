const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const serverPort = 5000;

const db = require('./db');

const userRouter = require('./routes/user-router');
const personalDataRouter = require('./routes/personaldata-router');
const familyDataRouter = require('./routes/familydata-router');

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.get('/', (req, res) => {
    res.send('Yoooooo');
})

app.use('/api', userRouter);
app.use('/api', personalDataRouter);
app.use('/api', familyDataRouter);

app.listen(serverPort, () => console.log(`Let's get started. Port: ${serverPort}`))