const Product = require("../../models/Product")
const getFilteredProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success : true,
            data : products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Some Error Occured"
        })
    }
};

module.exports = { getFilteredProducts };