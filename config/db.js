const mongoose = require('mongoose');


const connectDB = async ()=>{
    try{ 
        await mongoose
  .connect('mongodb://localhost/devconnector', { useNewUrlParser: true })
  .then(() => console.log('connected to MongoDB..'))

    }
    catch(err){
     console.error('Could not connect to MongoDB...', err)
    }
}

 module.exports = connectDB

