const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const JSPlanRoutes = require('./routes/JSPlanRouter');
const IndexRoutes = require('./routes/JSPlanRouter');
const NodePlanRoutes = require('./routes/JSPlanRouter');
const testRoutes = require('./routes/initJSBase');
const path = require('path');

const bodyParser = require('body-parser')


const PORT = process.env.PORT || 9000;

const app = express();
const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(JSPlanRoutes);
app.use(IndexRoutes);
app.use(NodePlanRoutes);
app.use(testRoutes);

async function start() {
    console.log('Starting server');
    try{
        await mongoose.connect('mongodb+srv://haloperidol:Arian1998@cluster0.9wqpk.mongodb.net/js-todo', {
            useNewUrlParser: true
        })
        app.listen(PORT, () =>{
            console.log('Server has been started');
        })
    } catch (err) {
        console.log('Errors:')
        console.log(err);
    }
}

start();
