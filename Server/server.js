require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const ShortUrl = require("./models/shortUrl");
const cors = require('cors');

app.use(express.urlencoded({extended: true}))

const username = process.env.username;
const password = process.env.password;

app.use(cors());
mongoose.connect('mongodb+srv://'+username+':'+password+'@database.kdl58.mongodb.net/urlShortener?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });


app.get('/get',async(req,res)=>{
    const shortUrls = await ShortUrl.find();
    res.json(shortUrls);
})

app.post('/post',async (req,res)=>{
    var url = req.param('url');
    try{
        await ShortUrl.create({url:url})
        .then(response => {
            res.json(response);
          })
    }
    catch(error){
        console.log(error.message);
    }
})

app.get('/:shorturl',async(req, res)=>{
    const shortUrl = await ShortUrl.findOne({shorturl:req.params.shorturl});
    console.log(shortUrl.url);
    if(shortUrl == null)return res.sendStatus(404)
    shortUrl.clicks++
    shortUrl.save();
    res.redirect(shortUrl.url);
    
})


app.listen(process.env.PORT||5000,()=>{
    console.log("Server is running at port 5000");
})
