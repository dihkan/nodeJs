import express from 'express';
import users from './route/users.js';
import ejs from 'ejs';
const app = express();

const port = 3000;

app.set('view engine','ejs');

app.get("/" , (req, res) => {
    res.render('index' , {
        title: 'Site Başlığı',
        heading: "Hosgeldiniz"
    })
})
app.use("/users", users);



app.listen(port ,() => console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`));
