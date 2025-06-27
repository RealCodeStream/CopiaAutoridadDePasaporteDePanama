import express from 'express'
import paymentRoutes from './routes/routes.js'
import {PORT} from './config.js'
import path from 'path'
import cors from 'cors';



const app = express()

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json())

app.use(paymentRoutes)

app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log('Server on port', PORT)