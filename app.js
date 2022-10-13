const express = require('express')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const fs = require('fs')

const PORT = 3000

const app = express()

app.use(async (req, res) => {
  const pw = await bcrypt.hash('foo', 10)
  const equal = await bcrypt.compare('foo', pw)
  const token = crypto.randomBytes(64).toString('hex')
  const filename = __dirname + '/test.txt'
  try {
    fs.unlinkSync(filename)
  }
  catch(e) {}
  fs.closeSync(fs.openSync(filename, "w"))
  // const fd = fs.openSync(filename, "r+")
  // const text = "Welcome to Test"
  // const position = 0
  // fs.writeSync(fd, text, position, 'utf8')
  // fs.closeSync()


  // fs.writeFileSync(__dirname + '/test.txt', 'Helllo World!', 'utf-8')
  const data = fs.readFileSync(filename, 'utf-8')

  res.status(200).send(`${data} equal: ${equal}, token:${token}`)
})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})