const express=require('express');
const port=3000;

const app=express();

// how do you access different types of request coming in
// as simple as that you have to do like this
//   GET, POST, PUT, PATCH, DELETE <= these are types of request from the user side
// to full fill these request do this app.get, app.post, app.put, app.patch, app.delete
app.get('/',function(req, res){
    res.send('<h1>cool, it is running ! is it ?</h1>')
});

app.listen(port, function(err){
    if (err){
        console.log('Error in running the server',err);

    }
    console.log('Yup! My express server is running on port:',port);
})