require('dotenv').config()
const express=require('express')
const app=express()
const connectDB=require("./db/connect");
const notFound=require('./middleware/not-found')
const asyncWrapper=require('./middleware/async')
const errorHandler=require('./middleware/error-handler')
//middleware 
app.use(express.json())
app.use(express.static('./public'))


//routes
const tasks = require("./routes/tasks");

app.use('/api/v1/tasks',tasks)
app.use(asyncWrapper); 
app.use(notFound);
app.use(errorHandler);
const port= process.env.PORT || 8000

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log('Server is listening on port '+port+'...'))
    }catch(err){
        console.log(err)
    }
}

start()