const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express()

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//routs
app.get('/api', (req, res) => {
    res.json({time: Date().toString()})
})

//port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`The beast is running on port ${port}`)
})