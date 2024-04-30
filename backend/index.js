const express = require('express');
const cors = require("cors");
const mainRouter = require("./routes/index")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
    // /api/v1 to maintain the api version more efficiently throuout the production and more meaningful structure for express app

    // /api/v1/user/signup
    // /api/v1/user/signin
    // /api/v1/user/changePassword....

   // /api/v1/user/transfermoney....
    // /api/v1/user/balance....

    app.listen(3000,()=>{console.log('app running in port:3000')});