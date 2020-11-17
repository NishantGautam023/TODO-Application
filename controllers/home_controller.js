// Using our COllection (controller ==> then collection)
const TODO = require('../models/todo_schema')



// home page 

module.exports.load = function (req, res) {
    TODO.find({}, (err, list) => {
        if (err) {
            console.log('there is an error', err);
            return;
        }
        return res.render('home', {
            title: 'Home',
            todo_list: list
        })   
    });
};  

// Creating our Task ..i.e put data in database
module.exports.creating = function(req, res) {
    TODO.create( {
        task: req.body.task,
         dueDate: req.body.dueDate,
         category: req.body.category,
    },
    // whenever we create something we need, to callback a function which tells 
    // whether an error is there,or has it been created(if created access it)
     function(err, newTODO)  {
         //1st argument is err and 2nd we can name anything
         if(err) {
             console.log("Error in creating a TODO");
             return;
         }
         // if created ...
         console.log("************", newTODO);
         res.redirect('back') // if created redirect back..
     });
    
};