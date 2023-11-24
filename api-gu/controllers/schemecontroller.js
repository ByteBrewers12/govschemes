// controllers/schemeController.js

const {
  getSchemeById,
  getFilteredSchemes,
  getPopularSchemes,
  getRecentSchemes,
} = require("./schemeHandlers");

exports.handleSchemeById = (req, res) => {
  try {
    const result = getSchemeById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: "Scheme not found" });
  }
};

exports.handleFilteredSchemes = (req, res) => {
  try {
    const result = getFilteredSchemes(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.handlePopularSchemes = (_, res) => {
  try {
    const result = getPopularSchemes();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.handleRecentSchemes = (_, res) => {
  try {
    const result = getRecentSchemes();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.handleRoot = (_, res) => {
  res.status(200).send("Welcome to the Government Schemes Information API");
};
