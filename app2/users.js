import express from 'express';

const router = express.Router();

router.get('/' , (req,res) =>{
    res.send('Kullanıcı Listesi');
})
router.get('/:id' , (req,res)=>{
    res.send(`Kullanıcı ${req.params.id}`);
})
export default router;
