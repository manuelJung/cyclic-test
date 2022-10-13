const express = require('express')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const fs = require('fs')
const mongoose = require('mongoose')

const DB_URL = '0.0.0.0'
const DB_PORT = 27017
const DB_NAME = 'devq'
const PORT = 3000

mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`).then(() => console.log('mongo started'))


const app = express()

app.use(async (req, res) => {
  const pw = await bcrypt.hash('foo', 10)
  const equal = await bcrypt.compare('foo', pw)
  const token = crypto.randomBytes(64).toString('hex')
  const filename = '/tmp/test.txt'
  fs.writeFileSync(filename, 'Helllo World!', 'utf-8')
  const data = fs.readFileSync(filename, 'utf-8')

  res.status(200).send(`${data}. equal: ${equal}, token:${token}`)
})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})