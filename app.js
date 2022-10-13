const express = require('express')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const fs = require('fs')
const mongoose = require('mongoose')
const Answer = require('./models/Answer')

const DB_URL = '0.0.0.0'
const DB_PORT = 27017
const DB_NAME = 'devq'
const PORT = 3000

const uri = 'mongodb+srv://mjung:mongotest@cluster0.di05mk9.mongodb.net/?retryWrites=true&w=majority';
// const client = new mongoose.MongoClient(uri)



const app = express()

app.get('/simple', (req, res) => {
  res.status(200).send('simple')
})

app.use(async (req, res) => {
  res.status(200).send('test')
  // const pw = await bcrypt.hash('foo', 10)
  // const equal = await bcrypt.compare('foo', pw)
  // const token = crypto.randomBytes(64).toString('hex')
  // const filename = '/tmp/test.txt'
  // fs.writeFileSync(filename, 'Helllo World!', 'utf-8')
  // const data = fs.readFileSync(filename, 'utf-8')

  // let item = await Answer.findById('unknown')

  // res.status(200).send(`${data}. equal: ${equal}, token:${token}, item: ${item}`)
})

mongoose.connect(uri, err => {
  if(err){ console.error(err); return false;}
  // connection to mongo is successful, listen for requests
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
});