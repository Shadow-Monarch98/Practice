const express =require('express');
const { stringify } = require('querystring');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/post')

mongoose.connect("mongodb+srv://Anu:Qj3G342apDV3sWvM@cluster0.omeyg.mongodb.net/angular-post?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(() => {
  console.log('Connected to mongo db');
}).catch(()=>{
  console.log('Connection Failed');
});
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
  next();
});
app.post('/api/posts',(req,res,next)=>{
  const post = new Post({
    title:req.body.title,
    content:req.body.content
  });
  post.save().then(result=>{
 res.status(201).json({
    message:'Post Added',
    postId:result._id

  });
  });
});
app.get('/api/posts',(req,res,next)=>{
  Post.find().then(documents=>{
         res.json({
   message:'this is a message from the server',
    posts:documents
    });
    });

});

app.delete('/api/posts/:id',(req,res,next)=>{
  Post.deleteOne({_id : req.params.id})
  .then(result =>{
  console.log( result);
  });

  res.status(200).json({message:"Post deleted!"});
});

module.exports =app;



//  Qj3G342apDV3sWvM
