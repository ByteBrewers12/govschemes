const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connectMongoDb } = require("./mongoConnection");
const schemeRoutes = require("./routes/schemeRoutes");
const Scheme = require("./models/scheme"); // Import the Scheme model

const app = express();
const port = 3002;

// Set Content Security Policy headers
app.use((_, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src 'self' data:; img-src 'self' data:;"
  );
  return next();
});

// Middleware
app.use(cors());
app.use(express.json()); // Body -> raw -> json
app.use(express.urlencoded({ extended: false })); // Body -> urlencoded/x-www-form-urlencoded

// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/government-schemes")
  .then(() => {
    console.log("MongoDB Connected");
    // Insert scheme data into MongoDB
    // Scheme.insertMany(require("./data/schemes"));
    console.log("Schemes inserted into MongoDB");
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Use routes
app.use("/", schemeRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
