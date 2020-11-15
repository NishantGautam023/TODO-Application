const express = require('express');
const port = process.env.PORT || 8848;

const app = express();

// use the express router
app.use('/', require('./routes'))


app.listen(port, (err) => {
    if(err) {
        console.log(`There is an error ${err}`);
        return;
    }
    console.log(`The server is ruining at Port ${port}`)

})