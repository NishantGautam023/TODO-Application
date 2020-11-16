const express = require('express');
const port = process.env.PORT || 8848;
const db = require('./config/mongoose')


const app = express();






// use ejs as our view engine
app.set('view engine', 'ejs');
app.set('views', './views')


// set up the static files
app.use(express.static('./assets'))

// use the express router
app.use('/', require('./routes'))


app.listen(port, (err) => {
    if(err) {
        console.log(`There is an error ${err}`);
        return;
    }
    console.log(`The server is ruining at Port ${port}`)

})