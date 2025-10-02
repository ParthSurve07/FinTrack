import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.get('/', (req, res) => {
  res.send('Backend server is running')
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})