import express from 'express';
import sequelize from './models/index.js';
import bookRouter from './routes/bookRoute.js'
import userRouter from './routes/userRoute.js'
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
  console.log("Hello world");
  res.send("Backend is working");
});

app.use('/book',bookRouter);
app.use('/hello',userRouter);

app.listen(8000,async()=>{
  try {
    await sequelize.authenticate();
    await sequelize.sync({force:true})
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log("Server is started");
})