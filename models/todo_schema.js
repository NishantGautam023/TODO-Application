// Building our TODOList Schema

//1. Since mongoose is being used to create that schema, we require mongoose
const mongoose = require('mongoose');

//2. Create a schema using fields ===> refer mongoose documentation. 

const todoListSchema = new mongoose.Schema({
     // Defining our fields
     task: {
         type: String,
         required: true,  // putting validation
     },
     dueDate: {
         type:Date,
         required: true,
     },
     category: {
         type: String,
         required: true,
     },   
     
});

//3. Naming our collection to be stored in database ,

const TODO = mongoose.model('TODO',TODOSchema)
//1st parameter: TODO, => This would be the name in the database
//2nd paramter: TODOSchema => defined by the schema

// Export it
module.exports = TODO;
