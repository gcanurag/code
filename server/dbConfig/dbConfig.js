const {  mongoose } = require("mongoose")

exports.connect = async() => {
   try {
   await  mongoose.connect(process.env.DB).then(() => {
        console.log("Connected to database successfully");
    })
   } catch (error) {
       console.log(error.message);
       process.exit();
   }
    
}