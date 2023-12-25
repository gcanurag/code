const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {    // cb= callback euta null linxa arkoo uploads linxa...
        //logic to validate the fileType (mimeType)
        const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        if (!allowedFileTypes.includes(file.mimetype)) {
            cb(new Error("Invalid fileType.Only supports png,jpeg,jpg"))   /// cb(error)  euta matra argumrnt means error duita arg means success
            return;
        }

        cb(null, "./public/data/uploads");
    },
    filename: function (req, file, cb) {
        // console.log(file,"file");
        cb(null, Date.now() + "-" + file.originalname);
    },
});

module.exports = {
    multer,
    storage,
};