require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

let mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect()
    }
  
    connect() {
        mongoose.connect('mongodb://' + process.env.DB_HOST+':'+process.env.DB_PORT +'/'+process.env.DB_NAME, {
            "auth": { "authSource": "admin" },
            useNewUrlParser: true,
            useUnifiedTopology: true,
            "user": process.env.DB_USER,
            "pass": process.env.DB_PASSWORD
        })
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error');
            console.log(err);
            console.log('mongodb://' + process.env.DB_HOST+':'+process.env.DB_PORT +'/'+process.env.DB_NAME);
        });
    }
}

module.exports = new Database()