const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
const fs = require('fs');
var path = require('path')
let ejs = require('ejs');

 
//CREATE EXPRESS APP
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
 
 var Port= process.env.PORT || 3000
//ROUTES WILL GO HERE
app.get('/',function(req,res){
    // console.log(__dirname);
    var resultsArray=   fs.readdirSync(__dirname +"/uploads");

    res.sendFile(__dirname + '/index.html');
    console.log(resultsArray);
    if(resultsArray!= null)
    resultsArray.forEach(file => {



      imgpath = (__dirname +`/uploads/${file}`);
      if(path.extname(file)=='.png'|| path.extname(file)=='.PNG'){
        fs.unlinkSync(imgpath)
        // arraylistforpath.push(imgpath);
      // console.log ("recorded png")
      }
    });
    resultsArray =null  ;
    delete require.cache[require.resolve('./index.js')]
   
  });
 
app.listen(Port, () => console.log(`Server started on port ${Port}`));

//server.js
 
 
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

  //Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 120), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
    var pdfpath =  require('./index');
    console.log(pdfpath)
    // var url = window.location;
  //   var html='';
  // html +="<body>";
  // html += "<a href="+url+pdfpath.pdfpath1+" target='blank'>";
  // html += "Click here</a>";
  // html += "</body>";
   
 
      //  res.sendFile(pdfpath.pdfpath1);
     function function1(){
        res.download(pdfpath.pdfpath1)
      }

      setTimeout(function1, 3000);

        // res.send(html);
  })