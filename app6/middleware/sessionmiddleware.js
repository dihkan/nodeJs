export const sessionControl = (req , res, next) => {
    if(req.session.isLoggedIn)
    {
        return res.redirect("/");
    }
    next()

}