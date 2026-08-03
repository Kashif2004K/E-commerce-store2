import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  price: "",
  image: "",
  description: "",
  stock: "",
  category: "",
};

const ProductForm = ({ editingProduct, onSubmit, onCancel }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        price: editingProduct.price,
        image: editingProduct.image,
        stock: editingProduct.stock,
        category: editingProduct.stock,
        description: editingProduct.description,
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingProduct]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
      image: form.image,
      category: form.category,
      description: form.description,
    });
    setForm(emptyForm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Update Product" : "Add Product"}</h2>
      <input
        name="name"
        placeholder="Product name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Product category"
        value={form.category}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Product description"
        value={form.description}
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
        name="stock"
        placeholder="Product stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Product image link"
        value={form.image}
        onChange={handleChange}
      />
      <button type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
      {editingProduct && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ProductForm;
