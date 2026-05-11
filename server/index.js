const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const port = process.env.PORT || 5000
dotenv.config()

app.use(cors())
app.use(express.json())

const data = [
    {id: 1, device: 'Laptop', price: 1000},
    {id: 2, device: 'Smartphone', price: 500},
    {id: 3, device: 'Tablet', price: 300},
]

app.get('/user', (req, res) => {
  res.send(data)
})

app.get('/', (req, res) => {
  res.send('Hello World Umayer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
