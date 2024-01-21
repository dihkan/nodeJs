import express from 'express'
import dotenv from 'dotenv'
import auth from "./routes/auth.js";
import session from 'express-session'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true
}))

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:true}))
app.use((req,res,next) => {
    res.locals.session = req.session
    next()
})
app.get("/" , (req, res) =>{
    res.render("index" , {
        title: "Sayfa Başlığı",
        header : "Hoşgeldin Gardaş"
    })
})
app.use("/auth" , auth);

app.listen(PORT , () => {
    console.log(`Sunucu http://localhost:${PORT} portunda çalışıyor`)
})