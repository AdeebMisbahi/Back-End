const express=require('express');
const path =require('path');
const port=3000;

const app=express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'))
var contactList= [
        {
            name: "Adeeb",
            phone: "XXXXXX1234"

        },
        {
           name: "Tony Start",
           phone:"XXXXXX4321"
        },
        {
            name: "Steve",
            phone:"XXXXXX1432"
        }
 ]
 
app.get('/',function(req, res){
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
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    
    return res.redirect('/'); // or res.redirect('back')

    // return res.redirect('./practise')
})

// for deleting  a contact
app.get('/delete-contact/', function(req, res){
    // get the query from the url
    let phone = req.query.phone;
    let contactIndext=contactList.findIndex(contact=>contact.phone==phone);
    if(contactIndext!=-1){
        contactList.splice(contactIndext,1)
    }
    return res.redirect('back')
})

app.listen(port, function(err){
    if (err){
        console.log('Error in running the server',err);

    }
    console.log('Yup! My express server is running on port:',port);
})