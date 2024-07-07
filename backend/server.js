require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const placementRoutes = require('./routes/placements')
const companyRoutes = require('./routes/companies')



//express app
const app=express();

//middlewares

app.use(cors(
    {
        origin:"https://placement-dashboard-v2-0-fe.vercel.app", 
        method:["GET","POST","DELETE","PATCH"],
        credentials:true
    }
))



app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path , req.method , req.body);
    next();
})

//routes

app.use('/api/placements',placementRoutes);

app.use('/api/companies',companyRoutes);

//connect to mongoDB

mongoose.connect(process.env.MONGO_URI).then(()=>{

    console.log('Connected to mongo DB');
    //listen to port
    app.listen(process.env.PORT, ()=>{
        console.log(`Ready to listen on port : ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})