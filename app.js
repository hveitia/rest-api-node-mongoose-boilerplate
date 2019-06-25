require('dotenv').config();
const express        = require("express"),
    cors           = require('cors'),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose       = require('mongoose');

const dbURI = "mongodb://root:vicoc123@cluster0-shard-00-00-agzuy.mongodb.net:27017,cluster0-shard-00-01-agzuy.mongodb.net:27017," +
    "cluster0-shard-00-02-agzuy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    dbName: process.env.DB_NAME
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

// Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// API routes
const routesIndex = require('./src/http/routes/index');
const routesBase = require('./src/http/routes/base');
const routesUser = require('./src/http/routes/user');

app.use('/api', routesIndex);
app.use('/api', routesUser);
app.use('/api', routesBase);

// Start server
app.listen(process.env.SERVER_PORT, function() {
  console.log(`Node server running on http://localhost: ${process.env.SERVER_PORT}`);
});
