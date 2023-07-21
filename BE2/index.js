const express=require('express');
const path =require('path');
const port=3000;

const app=express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());

// middleWare 1
app.use(function(req, res, next){
    req.myName="Misbahi";
    // console.log(('middleWare 1 called'));
    next();
})
// middleWare 2
app.use(function(req, res, next){
    console.log("My Name from MW2", req.myName)
//    console.log('middleware 2 called');
   next();
})


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
    console.log('from the get route Controller', req.myName)
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

app.post('/create-contact', function(req, res){
    // console.log(req);

    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    
    return res.redirect('/'); // or res.redirect('back')

    // return res.redirect('./practise')
})


app.listen(port, function(err){
    if (err){
        console.log('Error in running the server',err);

    }
    console.log('Yup! My express server is running on port:',port);
})