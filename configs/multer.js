const multer = require('multer');
const multerSlider = require("multer");
const multerProduct = require("multer");
const path = require("path");

var storageUpLoadBrand = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/brand'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

var storageSlider = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/slider'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var storageProduct = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/product'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var uploadBrand = multer({ storage: storageUpLoadBrand });
var uploadSlider = multerSlider({ storage: storageSlider });
var uploadProduct = multerSlider({ storage: storageProduct });

module.exports.uploadBrand = uploadBrand;
module.exports.uploadSlider = uploadSlider;
module.exports.uploadProduct = uploadProduct;

