const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config");
const bodyParser = require("body-parser");



const userRoutes = require("./routes/userRoutes");
const supplierOrderDetailRoutes = require("./routes/supplierOrderDetailRoutes");
const shippingOrderRoutes = require("./routes/shippingOrderRoutes");
const portAuthorityOrderRoutes = require("./routes/portAuthorityOrderRoutes");
const orderRoutes = require("./routes/orderRoutes");
const oilTankerOrderRoutes = require("./routes/oilTankerOrderRoutes");
const customOrderRoutes = require("./routes/customOrderRoutes");

const productRoutes = require("./routes/productRoutes");


require("./loaders/db")();
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use("/api/customOrder", customOrderRoutes);
app.use("/api/oilTankerOrder", oilTankerOrderRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/portAuthorityOrder", portAuthorityOrderRoutes);
app.use("/api/shippingOrder", shippingOrderRoutes);
app.use("/api/supplierOrderDetail", supplierOrderDetailRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Initial route running...</h1>");
});
async function startServer() {
  app
    .listen(config.port, () => {
      console.log(` Server is listening on port: ${config.port}  `);
    })
    .on("error", (err) => {
      console.log("Server starting error: ", err);
      process.exit(1);
    });
}
startServer();
