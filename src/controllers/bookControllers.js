import { Op } from "sequelize";

  
 class BookController{
    async addBook (req,res,model){
        const value = await model.create(req.body);
        if(value)
        {
            value.save();
            console.log(value);
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
          res.send(book);
      } else {
          console.log(book.id,book.writerName,book.authorName,book.pages);
          res.send(book.id,book.writerName,book.authorName,book.pages);
      }
  }

  async updateBook(req, res, model) {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).send({ error: 'ID parameter is required' });
    }
    
    try {
      // Perform the update operation
      const [affectedRows] = await model.update(req.body, {
        where: { id },
        returning: true  // For some ORMs like Sequelize, to return the updated rows
      });
      
      if (affectedRows === 0) {
        return res.status(404).send({ error: 'Book not found' });
      }
  
      // Optionally, you can fetch the updated book if needed
      const updatedBook = await model.findByPk(id);
      
      // Send the updated book as the response
      res.send(updatedBook);
      
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).send({ error: 'An error occurred while updating the book' });
    }
  }


  async searchBook(req, res, model) {
    let valuequery=req.query 
    console.log(valuequery)
    if(valuequery)
      {
        const books = await model.findAll({
          where: {
            [Op.or]: [
              {
                writerName: {
                  [Op.like]: `%${valuequery.writerName}%`,
                },
              },
              {
                authorName: {
                  [Op.like]: `%${valuequery.authorName}%`,
                },
              },
            ],
          },
        });

        if(books.length >0)
        {
          console.log("Console is preparing");
          res.send({
            data:books,
            success:true,
          });
        }
        else{
          res.json({
            success:true,
            message:"Books are not available",
            data:books,
          });
        }

      } 
      else{
        res.json({
          success: false,
          message:"Empty query search",
        });
      } 
   
  }


}




export default BookController;