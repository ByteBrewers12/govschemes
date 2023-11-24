// routes/schemeRoutes.js

const express = require("express");
const router = express.Router();
const schemeController = require("../controllers/schemecontroller");

router.get("/filtered-schemes/:id", schemeController.handleSchemeById);
router.get("/filtered-schemes", schemeController.handleFilteredSchemes);
router.get("/popular-schemes", schemeController.handlePopularSchemes);
router.get("/recent-schemes", schemeController.handleRecentSchemes);
router.get("/", schemeController.handleRoot);

module.exports = router;
