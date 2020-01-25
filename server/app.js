const express = require ('express');
const bodyParse = require('body-parser');
const app = express();
const cors = require('cors');
require('./config/dbConn');

app.use(cors());

app.use(bodyParse.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(require('./routes/routes'));




app.listen(4000, function(){
    console.log('server runnning');
});