const express = require("express");
var router = express.Router();
const app = express();
app.use(express.static("public"));
const products = [
  {
    catalogNumber: 1,
    name: "Lenovo V145 81MT005CAU 15.6 A4-9125 8GB 256GB SSD W10",
    image: "/images/image1.jpg",
    price: "$498.00",
  },
  {
    catalogNumber: 2,
    name: "HP 14-cm0012AU Notebook, 4NB46PA",
    image: "/images/image2.jpg",
    price: "$549.00",
  },
  {
    catalogNumber: 3,
    name: "HP Elitebook 840 G3 T6F46UT#ABA",
    image: "/images/image3.jpg",
    price: "$499.00",
  },
  {
    catalogNumber: 4,
    name: "Lenovo Ideapad C340 Pentium 4415U ",
    image: "/images/image4.jpg",
    price: "$799.00",
  },
  {
    catalogNumber: 5,
    name: "Lenovo Flex 14 Convertible Laptop",
    image: "/images/image5.jpg",
    price: "$833.70",
  },
];

router.get("/api/products/:name", (req, res, next) => {
  res.json(
    products.filter((product) =>
      product.name.toLowerCase().includes(req.params.name.toLowerCase())
    )
  );
});
router.get("/", (req, res, next) => {
  res.json(products);
});

module.exports = router;
