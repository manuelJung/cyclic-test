const express = require('express')

const PORT = 3000

const app = express()

app.use((req, res) => {
  res.status(200).send('hello world')
})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})