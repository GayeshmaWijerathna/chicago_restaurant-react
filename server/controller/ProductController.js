// const  {productList}=require("../constants/Consts")
// const Product= require("../model/Product");
// const ProductController={
//
//     getAllProducts: async function (req, res, next) {
//
//         try {
//             const productList = await Product.find();
//             res.status(200).json(productList)
//
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({error: 'Something Went Wrong..!'})
//         }
//     },
//
//
//     saveProduct: async function (req, res, next) {
//
//         try {
//             const productData = req.body;
//
//             const product = await Product.create(productData);
//
//             res.status(200).json(product);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({error: "Something Went Wrong!!"})
//         }
//     },
//
// }
//
// module.exports=ProductController;



const Product = require('../model/Product')


const getAllItems = async (rew, res) =>{
    try {

        // Get all existing documents from tables collection
        const items = await Product.find();

        if (items) {

            res.status(200).send(items);

        }
        else {

            // Repond with status code 400 (Bad Request) if unsucessfull
            res.status(400).send("failed to get tables")
        }

    } catch (error) {
        // print error message
        console.log(error.message);
    }
}

const getItem = async (req, res) => {
    try {

        // Find the particular document
        const items = await Product.findOne({ _id: req.params.id })

        if (items) {

            // Respond with status code 200 (OK) if sucessful
            res.status(200).send(items);

        }
        else {

            // Repond with status code 400 (Bad Request) if unsucessful
            res.status(400).send("failed to find the table")
        }
    } catch (error) {
        // print error message
        console.log(error);
    }
}


const addItem = async (req, res) => {

    // Create new document
    const items = new Product({

        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        currency: req.body.currency,
        image: req.body.image,

    })
    try {

        // Insert the new document
        await items.save();

        // Respond with status code 200 (OK) if sucessful
        res.status(200).send("table added successfully");

    } catch (error) {

        // Repond with status code 400 (Bad Request) if unsucessful
        res.status(400).send("failed to add the table")

        // print error message
        console.log(error);
    }
}


const updateItem = async (req, res) => {
    try {

        // Update the particular document with the new data
        await Product.findOneAndUpdate({
                id: req.params.id
            },
            {
                $set: {
                    name: req.body.name,
                    price: req.body.price,
                    currency: req.body.currency,
                    image: req.body.image,

                }
            })

        // Respond with status code 200 (OK) if sucessful
        res.status(200).send("table updated successfully");

    } catch (error) {

        // Repond with status code 400 (Bad Request) if unsucessful
        res.status(400).send("failed to update the table");

        // Print the error message
        console.log(error);
    }
}

const deleteItem = async (req, res) => {
    try {

        // Find the particular document and delete it
        await Product.findOneAndDelete({ id: req.params.id });

        // Respond with status code 200 (OK) if sucessful
        res.status(200).send("table deleted successfully");

    } catch (error) {

        // Repond with status code 400 (Bad Request) if unsucessful
        res.status(400).send("failed to delete the table");

        console.log(error);
    }
}

module.exports = {
    getAllItems,
    getItem,
    addItem,
    updateItem,
    deleteItem
};
