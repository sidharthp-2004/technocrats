const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
const index = require("./routes/index");
app.use("/", index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
export default app;