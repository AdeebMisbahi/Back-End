const express=require('express');
const port=3000;

const app=express();

app.get('/',function(req, res){
    res.send('<h1>cool, it is running ! is it ?</h1>')
});

app.listen(port, function(err){
    if (err){
        console.log('Error in running the server',err);

    }
    console.log('Yup! My express server is running on port:',port);
})