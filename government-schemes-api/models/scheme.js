const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: String,
  description: String,
  profession: String,
  minAge: Number,
  imageUrl: String,
  gender: String,
  benefits: String,
  applicationProcess: String,
  requiredDocuments: String,
  startDate: String,
  endDate: String,
  applicationLink: String,
  applications: Number,
});

const Scheme = mongoose.model("Scheme", schemeSchema);

module.exports = Scheme;
