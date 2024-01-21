import express from 'express';
import userRouter from './users.js';
const app = express();

app.use('/users' , userRouter);

app.listen(3000 , ()=>{
    console.log("Sunucu http://localhost:3000 adresinde çalışıyor");
})