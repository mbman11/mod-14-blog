const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
require("dotenv").config();


// sets up express app
const app = express();
const PORT = 3001;

// use handlebars engine
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);


//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/blog-routes.js'));

//listen for port
app.listen(PORT, () =>{
  console.log(`listening at: http//:localhost:${PORT}`);
});


