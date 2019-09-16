const express = require('express');
const app = express();
const path = require('path')


app.use(express.static(path.resolve(__dirname,'../client')));


app.get('/', (req,res,next) => {
  res.sendFile('../client/index.html')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})