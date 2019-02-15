const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express()


const PORT = 8000
console.log("__dirname:" + __dirname)
app.use('/', express.static(__dirname + '/public'))

app.use(fileUpload())

app.post('/upload', (req, res) => {
  if(Object.keys(req.files).length == 0)
  {
    return res.status(400).send('No files were uploaded.')
  }
  audioDescriptor = req.files.audioFile
  console.log(audioDescriptor)
  
  fs.writeFile('audioFiles/'+audioDescriptor.name+'.ogg', audioDescriptor.data, (err) => {
    if (err) throw err;
    console.log(audioDescriptor.name + ': The file has been saved!');
  })
  /*
  let sampleFile = req.files.sampleFile

  sampleFile.mv('nameFile', (err) => {
    if(err) return res.status(500).send(err)
    res.send('File uploaded!')
  });
  */
});

app.get('/phrase', (req, res) => {
  let phrases = ['Esta frase es una prueba']
  res.send(phrases)
})

app.listen(PORT, () => {
  console.log('Express server listening on port ', PORT)
});
