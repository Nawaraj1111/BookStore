import express from 'express';
const router = express.Router();
import bookModel from '../models/bookmodel.js';
import BookController from '../controllers/bookControllers.js';

router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    const users = await bookModel.findByPk(id);
    // console.log(users);
});

const bookController=new BookController()

router.post("/",async(req,res)=>{
    bookController.addBook(req,res,bookModel);
});


export default router;

