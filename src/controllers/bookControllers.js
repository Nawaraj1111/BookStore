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

    async showData(req,res,model){
      const {id} = req.params;
      const book = await model.findByPk(id);
      if (book === null) {
          console.log('Not found!');
      } else {
          console.log(book.id,book.writerName,book.authorName,book.pages);
          res.send(book.id,book.writerName,book.authorName,book.pages);
      }
  }
}

export default BookController;