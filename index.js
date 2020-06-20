const PDFDocument = require('pdfkit');
const fs = require('fs');
const prompt = require('prompt-sync')();
const escape = require('escape-path-with-spaces');
var express = require('express');
const naturalSort = require('node-natural-sort');
const doc = new PDFDocument({ autoFirstPage: false });
var logger = require('./server')
var path = require('path')

console.log(logger);

runpdfcreator(logger.a)
function runpdfcreator(input) {

  testFolder = escape(input);




 
  var path1 = `${testFolder}/output.pdf`;
  var pdfname = "output.pdf";
  var countforpdf = 1;
  try {
    while (fs.existsSync(path1)) {
      //file exists
      console.log("file exists")
      pdfname = "output" + counterforpdfname() + ".pdf";
      path1 = `${testFolder}/${pdfname}`
      console.log(path1);
    }
  } catch (err) {
    console.log(err)
  }

  function counterforpdfname() {
    return countforpdf++;
  }


  doc.pipe(fs.createWriteStream(path1));

  let count = 0;
  var imgpath;
  var arraylistforpath = [];
  var resultsArray = fs.readdirSync(testFolder);


  resultsArray.forEach(file => {



    imgpath = (`${input}/${file}`);
    if(path.extname(file)=='.png'|| path.extname(file)=='.PNG'){
    arraylistforpath.push(imgpath);
    // console.log ("recorded png")
    }
  });

  arraylistforpath.sort(naturalSort());
  // console.log("array" + arraylistforpath + "\n");

  arraylistforpath.forEach(element => {

    var img = doc.openImage(element);
    doc.addPage({ size: [img.width, img.height] });
    doc.image(element, 0, 0);
    console.log(element);
  
  });

  console.log(arraylistforpath.length + " pages pdf created");

  doc.end()

}

