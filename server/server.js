const express = require('express')
const lessons = require('./lessons.json')
let bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.listen(PORT, () => {
    console.log(`server started atÍ ${PORT}.`)
})
app.get('/api/lessons', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const { filter = '' } = req.query;

    if (!filter) {
        res.json(lessons)
    } else {
        res.json(
            lessons.filter(({ title }) => title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        )
    }
})
app.post('/api/login', (req, res) => {

    if (req.body.username === 'ayuan' && req.body.password === 'ayuan5858') {
        res.json({success: true})
    } else {
        res.json({success: false})
    }
})
// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });


