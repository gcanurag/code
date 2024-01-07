const express = require('express');
const app = express();
const cors = require('cors');
const { connect } = require('./dbConfig/dbConfig');
require('dotenv').config();
const authRoute = require('./routes/auth');
const issueRoute = require('./routes/issueRoutes');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const CLIENT_ID = "5e79fba2e2aeb6154425";
const CLIENT_SECRET = "cc3d6cb08e6c4f00d31b68a1794845fb5c15ffda";
const GITHUB_URL = "https://github.com/login/oauth/access_token";

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
    console.log(token, "this is token");
});


app.get('oauth/redirect', (req, res) => {
    axios({
        method: "POST",
        url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
        headers: {
            Accept:"application/json",
        }
    }).then((response) => {
        const token = response.data.access_token;
        res.redirect(`http://localhost:5173?access_token=${response.data.access_token}`)
    }).catch((err) => {
        console.log(error,"occured")
    })
})

app.get("/user/data", (req, res) => {
  const token = req.headers["authorization"];
  axios({
    method: "GET",
    url: ` https://api.github.com/user`,
    headers: {
      Authorization: token,
    },
  })
    .then((resp) => {
      res.statusCode = 200;
      res.send(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});


connect().then(() => 
    app.listen(3000, () => {
        console.log("Server has started at port 3000");
    })
)
