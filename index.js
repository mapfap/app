const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`[sys] Express started on ${port}!`))

app.get('/', (req, res) => {
  res.json({up: true})
})

module.exports = app
