const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const MongoConnection = require("./config/mongodb");
const app = express();

//@@@@ Load env files
dotenv.config({ path: "config/config.env" });

//@@@@ Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//@@@@ Database connection
MongoConnection();

//@@@@ Set view engine
app.set("view engine", "ejs");

//@@@@ Mount router
app.use("/", routes);

//@@@@ Initialize the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
