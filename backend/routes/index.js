const express = require('express');

const userRouter = require("./user");
const accountRouter = require("./account");

// Create a router instance
const router = express.Router();


router.use("/user",userRouter);
router.use("/account",accountRouter);

// Export the router
module.exports = router;
