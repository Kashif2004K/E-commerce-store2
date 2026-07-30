import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/api/products", (req, res) => {
  res.send("created product");
});

app.patch("/api/products/:id", (req, res) => {
  res.send("product updated");
});

app.delete("/api/products/:id", (req, res) => {
  res.send("product deleted");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
