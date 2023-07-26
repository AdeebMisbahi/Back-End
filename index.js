// acquire express library
const express=require('express');
// call express
const app=express();
const port=8000;

// use express router
app.use('/', require('./routes'));

app.listen(port ,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`server is running on the port:${port}`);
})