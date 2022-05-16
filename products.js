const express = require("express")
const router = express.Router()
const User = require('../Schemas/User');
const Product = require('../Schemas/Product');
const { updateOne } = require("../Schemas/Product");
const idx = require('../Schemas/index');

//make index routes, delete, update, create, and show routes 

router.get("/", (req, res) => {
  res.status(200).json({ message: "Boutique Luxe" })
  //Will be using product.find
})


//Change all instances of user to product 
router.post('/', (req, res) => {
  const productData = req.body
  Product.create(productData, (error, createdProduct) => {
    if (error) {
      console.error(error);
      res.status(400).json({
        error: 'an error has occurred'
      })
    } else {
      console.log('created product successfully');
      res.status(201).json({
        message: 'Created Successfully',
        product: createdProduct
      })
    }
  })
})


router.put("/:idx", (req, res) => {
  const idx = req.params.idx
  const body = req.body

  seedData[idx] = body.name

  res.status(200).json({ seedData })
})

seller.route("/")
  .get((req, res) => {
    res.status(200).json({ todos: seedData })
  })


router.delete('/:id', (req, res) => {
  Product.deleteOne({ // deletes one user
    _id: req.params.id // only the user we want to delete
  }, (error, resultB) => {
    if (error) {
      console.error(error); // error handling magic
      res.status(404).json({
        error: 'No User found!'
      })
    } else {
      console.log('Successfully deleted User');
      res.status(204).json({}); // sends back 204 when we succeed in both operations.
    }
  })
})



//Need update route which will be a put route (done)
//Need a normal update route for seller (done)
//Need a show route which will be the same as the index route but instead of find it will be findOne finding one specific product (done)
//Change instances of products in user and make it say user can copy/paste (?)

module.exports = router