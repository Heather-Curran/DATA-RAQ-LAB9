//Node server.js to run
//Rightclick on server.js and open in integrated terminal
//Others npm start to run

const express = require('express') //Express is web framework
const app = express() //Running express
const port = 4000 //Define port
const bodyParser = require('body-parser'); //Allows you to search body of Http request (Need this for Post Method)

// parse application/x-www-form-urlencoded (Need this for Post Method)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json (Need this for Post Method)
app.use(bodyParser.json())


//Importing mongoose library
//Package that allows to conect to database
const mongoose = require('mongoose');

//Catch Errors
main().catch(err => console.log(err));

//Connects to database
async function main() {
    //Connection string tells mongoose where to connect to
    //Using this user and password
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.zo0qzsa.mongodb.net/?retryWrites=true&w=majority'); //Connection string for database
  
}

//Define Schema - What type of data you want to save
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
  });

//Represents a collection called books
//Books will hold objects following bookSchema
//Object that represents database
const bookModel = mongoose.model('books', bookSchema);


//Allows access to other server.
const cors = require('cors');
    app.use(cors());
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Listen for post request at this URL and send back this object
//Find will find every document in database and send it back to you
//Every document in database has a unique identifier
app.get('/api/books', (req, res) => {
   bookModel.find((error, data)=>{
    res.json(data);
   })
})

//Listens for http request at this URL. Pass id as part of URL
app.get('/api/book/:id', (req, res)=>{
    console.log(req.params.id);
    
    //Search database for this parameter id
    //BookModel represents database
    bookModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    })
})

app.put('/api/book/:id', (req, res)=> {
    console.log("Update: " + req.params.id);
    console.log(req.body);

    //Pass it the id of what you want to overwrite and data you want to overwrite with
    bookModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
        (error, data) => {
        res.send(data);
    })
})

//Listen for post request at this URL
//When conditions are met - Log book data to console
app.post('/api/books', (req, res)=>{
    console.log(req.body)
    //Persist data
    //Pulls out the information you want
    bookModel.create({
        title:req.body.title,
        cover:req.body.cover,
        author:req.body.author
    })
    
    res.send('Data Received');
})

//Listening for http request with delete method at this url
app.delete('/api/book/:id', (req, res)=>{
    console.log("Deleting: " + req.params.id)
    //Find by id and delete
    bookModel.findByIdAndDelete({_id: req.params.id},(error,data)=>{
        res.send(data); //Once deleted, send back data
    })
})

//Listens for request at port 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})