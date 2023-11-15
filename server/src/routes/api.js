const express = require('express');
const router = express.Router();
const { persona } = require("../controller/api");

router.get('/persona', persona);

module.exports = router;
