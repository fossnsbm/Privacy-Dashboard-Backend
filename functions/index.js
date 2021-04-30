const express = require('express')
var cors = require('cors')
const serverless = require('serverless-http');
app = express()
app.use(cors())

app.use('/', require('./routes/check'))

// app.listen(4000, ()=>{
//     console.log("Server start")
// })
module.exports.handler = serverless(app);