const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');


app.use(express.static(path.resolve(__dirname,'../client')));

app.use(bodyParser.json())

app.get('/', (req,res,next) => {
  res.sendFile('../client/index.html')
})

app.post('/generate', (req,res,next) => {
  console.log(req.body)
  fs.writeFile('quickjest.test.js', req.body.formattedString, (err)=>{
    if (err) res.status.send(err);
    console.log('the file has been saved')
    res.download(path.resolve(__dirname,'../quickjest.test.js'));
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})