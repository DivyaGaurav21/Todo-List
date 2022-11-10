const express = require('express');
const port = 8000;
const app = express();

//use express router
app.use('/' , require('./routers/index'))





app.listen(port , (err) => {
    if(err){
        console.log('error in runnig server => ' , err);
    }else{
        console.log(`Yeah :)  my express server is runnig on port : ${port}`)
    }
})