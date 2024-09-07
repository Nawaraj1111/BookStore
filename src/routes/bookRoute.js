import express from 'express';
const router = express.Router();
import bookModel from '../models/bookmodel.js';
import BookController from '../controllers/bookControllers.js';

const bookController=new BookController()

router.get("/:id",async(req,res)=>{
    bookController.addBook(req,res,bookModel);
});

router.post("/",async(req,res)=>{
    bookController.addBook(req,res,bookModel);
});


export default router;

