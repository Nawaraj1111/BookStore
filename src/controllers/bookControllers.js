 class BookController{
    async addBook (req,res,model){
        const value = await model.create(req.body);
        if(value)
        {
            value.save();
          res.send("Response is send successfully");
        }
        else{
         res.send("Database is not created successfully");
        }
    }
}

export default BookController;