const express = require('express');
const port = process.env.PORT || 8848;
const db = require('./config/mongoose')
const CONTACT = require('./models/todo_schema')
// the collection would be populated using this CONTACT ...

const app = express();






// use ejs as our view engine
app.set('view engine', 'ejs');
app.set('views', './views')


// set up the static files
app.use(express.urlencoded({  extended: true  }))
app.use(express.static('./assets'))

// use the express router
app.use('/', require('./routes/index'))


app.listen(port, (err) => {
    if(err) {
        console.log(`There is an error ${err}`);
        return;
    }
    console.log(`The server is ruining at Port ${port}`)

})