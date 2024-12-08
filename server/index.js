const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const imageRoute = require('./routes/image')




const app = express();
dotenv.config();
const cors = require('cors');

app.use(cors ());
app.use(express.json())
app.use('/api/v1/all',imageRoute);


const port = process.env.PORT || 8082


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})