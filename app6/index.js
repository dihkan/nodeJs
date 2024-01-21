import dotenv from 'dotenv';
import express from  'express'
import session from 'express-session'
import auth from './routes/auth.js'
import flash from 'connect-flash';


const app = new express();
dotenv.config();
// esp engine kullanımı 
app.set('view engine' , 'ejs')
const PORT = process.env.PORT || 3002;
app.use(flash());

//* bu kod formdan gelen verilein işlenebilmesi için body değişkenine ayrıştırabilmek için kullanıyoruz

app.use(express.urlencoded({extended:true}));
app.use(session({
    secret : process.env.SECRET_KEY,
    resave: false,
    saveUninitialized : true,
    cookie: {
        
        maxAge: 30 * 60 * 1000 // Oturum süresi 30 dakika (milisaniye cinsinden)
      }
}))
app.use((req,res,next) => {
    res.locals.session = req.session
    res.locals.success_messages = req.flash('success');
    res.locals.error_messages = req.flash('error');
    next()
})
app.get("/" , (req, res) => {
    res.render('index',  {
        title:"Sayfa Başlığı",
        header:"Hoşgeldiniz"
    })
})
app.use('/auth' , auth);
app.listen(PORT , () => {
    console.log(`Sistem http://localhost:${PORT} portunda çalışıyor`)
})