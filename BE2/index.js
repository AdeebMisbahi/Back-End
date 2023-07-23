const express=require('express');
const path =require('path');
const port=3000;

// connection mangoose to here
const db=require('./config/mongoose')
const Contact=require('./models/contact');
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

 async function getContacts(){

    const Items = await Contact.find({});
    return Items;
  
  }

app.get('/', function(req, res){

getContacts().then(function(FoundItems){
    res.render('home',{
        title: 'Contact List',
        contact_list: FoundItems
    })
})
/*
// Now call backfuntion is no longer in use for Module.find

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts form db')
            return;
        }
        return res.render('home', {
            title: 'Contact List',
            contact_list: contacts
        })
    })
   */
})
 


app.get('/practise', function(req, res){
    return res.render('practise',{
        title: "Play With EJS"
    })
})



app.post('/create-contact', function(req, res){
   
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    const yourData={
        name:req.body.name,
        phone:req.body.phone
     }
 Contact.create(yourData)
    .then(createdItem => {
        console.log('Item created:', createdItem);
        return res.redirect('back')
      })
      .catch(error => {
        console.error('Error creating item:', error);
      });
    
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