const express = require('express');
const app = express();
const cors = require('cors');
const { connect } = require('./dbConfig/dbConfig');
require('dotenv').config();
const authRoute = require('./routes/auth');
const issueRoute = require('./routes/issueRoutes');
const cookieParser = require('cookie-parser');


//middlewares
app.use(cookieParser());
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
app.use('', issueRoute);
app.use(express.static("public/"))



app.get('/', (req, res) => {
    res.send("hello");
    const token = req.cookies.token
    console.log(token,"this is token");
})



connect().then(() => 
    app.listen(3000, () => {
        console.log("Server has started at port 3000");
    })
)
