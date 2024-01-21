

import {loginControl} from '../database/database.js';
import flash from 'connect-flash';



export const getLoginController = (req, res) => {

    res.render('auth/login')
}
export const postLoginController = (req, res) => {

    const {username , password} = req.body
    res.locals.formData = req.body
    let error
    loginControl(username , password)
    .then(result => {
        if(result.length> 0)
        {
            req.session.isLoggedIn = true
            req.session.user = {
                eleman_id: result[0].eleman_id,
                isim: result[0].isim,
                kullanici: username
            }

            res.redirect("/");
        }else{
            req.flash("error" , "Kayit bulunamadı")
            res.redirect("/auth/login")
        }
    })
    .catch(error =>{
        console.error("Hata : " , error)
    } )


}
export const logoutController = (req, res) => {
    req.session.destroy();
    res.redirect('/')
}