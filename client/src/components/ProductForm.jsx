import { useState } from "react";
import { createProduct } from "../services/productServices";

const ProductForm = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = await createProduct({
        ...form,
        price: Number(form.price),
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Product name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        placeholder="Product price"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Product image link"
        value={form.image}
        onChange={handleChange}
      />
      <button type="submit">Add product</button>
    </form>
  );
};

export default ProductForm;
