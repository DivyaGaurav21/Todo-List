const TodoLists = require('../models/todo_list')


//you can see on color on ui i store color in Array
let colors = {
   personal : 'darkgreen',
   work : 'darkmagenta',
   school : 'darkorange',
   cleaning : 'darkblue',
   other : 'darkcyan',
   study : 'grey' ,
   'n/a' : 'red',
} 

//function for redirect to main home page
module.exports.home=(req , res) => {
  TodoLists.find({} , (err , todo_divya) => {
    if(err){
      console.log('error in fetching data');
      return;
    }else{
      return res.render('home' , {
         title: 'home' ,
         todoList : todo_divya ,
         color_list: colors
      })
    }
  })
}