const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/user");

// API Routes
router.use("/", apiRoutes);



module.exports = router;