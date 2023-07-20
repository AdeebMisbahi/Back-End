const express=require('express');
const path =require('path');
const port=3000;

const app=express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));


var contactList= [
        {
            name: "Adeeb",
            phone: "XXXXXX1234"

        },
        {
           name: "Tony Start",
           phone:"XXXXXX1234"
        },
        {
            name: "Steve",
            phone:"XXXXXX1234"
        }
 ]
 
app.get('/',function(req, res){
    // console.log(__dirname);
  return res.render('home', {
    title:"My Contact List",
    contact_list: contactList
});
});
app.get('/practise', function(req, res){
    return res.render('practise',{
        title: "Play With EJS"
    })
})

app.listen(port, function(err){
    if (err){
        console.log('Error in running the server',err);

    }
    console.log('Yup! My express server is running on port:',port);
})