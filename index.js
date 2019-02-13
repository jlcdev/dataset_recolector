const express = require('express');
const fileUpload = require('express-fileupload');
const app = express()


const PORT = 8000
app.use('/', express.static(__dirname + '/index.html'))

app.use(fileUpload())

app.post('/upload', (req, res) => {
  if(Object.keys(req.files).length == 0)
  {
    return res.status(400).send('No files were uploaded.')
  }
  let sampleFile = req.files.sampleFile

  sampleFile.mv('nameFile', (err) => {
    if(err) return res.status(500).send(err)
    res.send('File uploaded!')
  });
});

app.get('/phrase', (req, res) => {
  let phrases = ['Esta frase es una prueba']
  res.send(phrases)
})

app.listen(PORT, () => {
  console.log('Express server listening on port ', PORT)
});
