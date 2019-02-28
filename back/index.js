let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./routes/api")


// Configure bodyparser para manejar peticiones post
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Conectar a mongodb
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;
// puerto server
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));

// Usar /api para rutas
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});