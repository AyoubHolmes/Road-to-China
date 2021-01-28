const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const UserCtrl = require('./controllers/user-ctrl');
const path = require("path");
const querystring = require('querystring');


const serverPort = 5000;

const db = require('./db');

const userRouter = require('./routes/user-router');
const personalDataRouter = require('./routes/personaldata-router');
const familyDataRouter = require('./routes/familydata-router');


app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser());




db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use('/api', userRouter);
app.use('/api', personalDataRouter);
app.use('/api', familyDataRouter);
app.use(express.static(path.join(__dirname, "../frontend/", "build")));
app.use('/login', express.static(path.join(__dirname, "../frontend/", "build")));
app.use('/signup', (req, res) => res.redirect('/login'));
app.use('/confirmation',express.static("confirmationmailpage"));
app.use('/application',express.static("application"));
app.get ('/checkToken', UserCtrl.withAuth)
app.get('/confirm/user', UserCtrl.confirmUser);
app.get('/apply/user', UserCtrl.applyUser);
app.use('/user',express.static("form"));

app.listen(serverPort);
