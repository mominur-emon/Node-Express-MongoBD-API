//  study source -> mongoosejs.com

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create product schema
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

//create product model
const Product = mongoose.model("Products", productsSchema);

//db connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not  connected");
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

//create a product
app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      rating: req.body.rating,
      description: req.body.description,
    });
    const productData = await newProduct.save(); //save to database
    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//return all products
app.get("/products", async (req, res) => {
  try {
    let products;
    //design for query
    const price = req.query.price;
    const rating = req.query.rating;
    if (price && rating) {
      products = await Product.find({
        $and: [{ price: { $gt: price } }, { rating: { $gt: rating } }],
      });
    } else {
      products = await Product.find();
    }

    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).send({ message: "products not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//return a specific products
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id; //get id
    const product = await Product.findOne({ _id: id });
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "products not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//delete
app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "products not deleted this id " });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
