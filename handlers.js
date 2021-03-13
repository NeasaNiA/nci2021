const express = require("express")
let erc20 = require('./lab4_erc20_transfer_async.js')

const app = express()

app.use(express.json())

// GET - read
// POST - create a new value
// PUT - update a value
// DELETE - remove a value

app.get('/symbol', async (req, res) => {
  res.send(await erc20.getSymbol())
})

app.get('/supply', async (req, res) => {
  res.send(await erc20.getTotalSupply())
})


const port = 8080
app.listen(port, () => console.log(`listening on port ${port}...`))

