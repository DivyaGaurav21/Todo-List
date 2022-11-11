// const TodoLists = require('../models/todo_list')


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

var todo = [
   {
      description : "shopping for festival" ,
      date : "2021 , 11, 28",
      category: 'work'
   },
   {
      description : "playetrsg for festival" ,
      date : "2021 , 11, 21",
      category: 'study'
   },
   {
      description : "pdfsdgfh for festival" ,
      date : "2021 , 11, 18",
      category: 'school'
   }
]

module.exports.home=(req , res) => {

   return res.render('home' , {
      title : 'home' ,
      todoList : todo ,
      color_list : colors

   })
}