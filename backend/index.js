const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRouter = require("./src/routes/user.routes");
const connectDB = require("./src/database/connectDB");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Allow requests only from your frontend
app.use(
  cors({
    origin: "https://prabinshrestha-theta.vercel.app", // replace with your frontend URL
    credentials: true, // if you plan to use cookies or authentication
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
