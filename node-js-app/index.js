import express from 'express';
const app = express();
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static('assets'));


app.get("/" , (req,res) => {
    // res.sendFile(__dirname+'/index.html');
    res.json({id:1 , name:'ihsan Dihkan'});
})

app.get("/profile" , (req , res) => {
    res.redirect('/');
})

app.get('/deneme' , (req,res) => {
    res.send('get request')
})
app.post('/deneme' , (req,res) => {
    res.send('post request')
})
app.delete('/deneme' , (req,res) => {
    res.send('delete request')
})
app.put('/deneme' , (req,res) => {
    res.send('put request')
})
app.listen(3000 , () =>{
    console.log(`Proje http://localhost:3000 numaralı portta çalışıyor`);
});