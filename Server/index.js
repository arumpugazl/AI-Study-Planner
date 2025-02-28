const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Planner").then(() => console.log("Connected to mongodb"))
.catch((err) => console.log(err))

app.listen(3000,console.log("Connected to server",port))
