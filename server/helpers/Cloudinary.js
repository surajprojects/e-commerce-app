const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config(); 

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

const storage = new multer.memoryStorage();

async function ImageUploadUtil(file) {
    try {
        const result = await cloudinary.uploader.upload(file, {
            resource_type: "auto"
        });
        return result;
    } catch (err) {
        console.error("Cloudinary upload failed:", err);
        throw err;
    }
}

const upload = multer({storage});

module.exports = {upload, ImageUploadUtil}