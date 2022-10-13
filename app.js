const express = require('express')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const PORT = 3000

const app = express()

app.use(async (req, res) => {
  const pw = await bcrypt.hash('foo', 10)
  const equal = await bcrypt.compare('foo', pw)
  const token = crypto.randomBytes(64).toString('hex')

  res.status(200).send(`hello world. equal: ${equal}, token:${token}`)
})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})