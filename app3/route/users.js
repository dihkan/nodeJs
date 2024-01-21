import express from "express";
const router = express.Router();

router.get("/" , (req,res) => {
    res.send("users sayfasındasın");
})
router.get("/:slug" , (req,res) => {
    res.send(`Gelen değer ${req.params.slug}`);
})

export default router;