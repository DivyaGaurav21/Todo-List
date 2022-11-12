// import database configuaration
const db = require('../config/mongoose');
//import database model
const Task = require('../models/todo_list')


module.exports.create = (req ,res) =>{
    // console.log(req.body);
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
    // console.log(req.body.id , "in main")
    // If user haven't selected any task to delete
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    //  If only one tasks are to be deleted
 else if(typeof(req.body.id) == 'string'){
    // console.log(req.body , " single selection")
        Task.findByIdAndDelete(req.body.id, function(err){
                if(err){
                    console.log("error deleting task ");
                    return;
                }
                return res.redirect('back');
            });
    }
    // multiple task is to be deleted by else function
    else{
        for(let i of req.body.id){    // console.log(i , "in multiple") 
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