const express = require('express');
const app = express();
const cors = require('cors');
const { connect } = require('./dbConfig/dbConfig');
require('dotenv').config();
const authRoute = require('./routes/auth');



//middlewares
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
  }));
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use('', authRoute);








connect().then(() => 
    app.listen(3000, () => {
        console.log("Server has started at port 3000");
    })
)
