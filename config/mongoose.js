const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_todo_list_DB');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database-:)')
})