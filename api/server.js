const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const ItemRoutes = require("./Routes/ItemRoutes");

connectDB();

const port = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/", ItemRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
