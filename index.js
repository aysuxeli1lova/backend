const express = require("express");
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Plov", price: 8, quantity: 25 },
  { id: 2, name: "Dolma", price: 10, quantity: 18 },
  { id: 3, name: "Kabab", price: 12, quantity: 30 },
  { id: 4, name: "Düşbərə", price: 7, quantity: 20 },
  { id: 5, name: "Qutab", price: 3, quantity: 60 },
  { id: 6, name: "Lahmacun", price: 4, quantity: 45 },
  { id: 7, name: "Toyuq şorbası", price: 5, quantity: 22 },
  { id: 8, name: "Pizza", price: 14, quantity: 15 },
  { id: 9, name: "Burger", price: 9, quantity: 35 },
  { id: 10, name: "Paxlava", price: 6, quantity: 40 }
];

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Yemək tapılmadı" });
  }

  res.json(product);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
