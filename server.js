const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');


// use handlebars engine
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/blog-routes'));

//listen for port
sequelize.sync({ force: false }).then(()=> {
  app.listen(PORT, () => console.log('Now Listening'));
});

