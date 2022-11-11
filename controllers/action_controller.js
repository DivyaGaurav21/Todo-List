// import database configuaration
const db = require('../config/mongoose');
//import database model
const Task = require('../models/todo_list')


module.exports.create = (req ,res) =>{
    console.log(req.body);
    Task.create({
        description : req.body.description ,
        category : req.body.category ,
        date : req.body.date
    }) , (err) => {
        if(err){
            console.log('Error creating Contact');
            return;
        }
    }
    return res.redirect('back');
}

// controller for deleting item for  todo list  

module.exports.delete = (req, res) => {
    // If user haven't selected any task to delete
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    //  If multiple tasks are to be deleted
 else if(typeof(req.body.id) == 'string'){
        Task.findByIdAndDelete(req.body.id, function(err){
                if(err){
                    console.log("error deleting task ");
                    return;
                }
                return res.redirect('back');
            });
    }
    // If only one task is to be deleted
    else{
        for(let i of req.body.id){
            Task.findByIdAndDelete(i, function(err){
                if(err){
                    console.log("error deleting tasks ");
                    return;
                }
            });
        }
        return res.redirect('back');
    }
};