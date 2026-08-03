import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import "./AdminProducts.css";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productServices";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadProducts();
  }, []);

  const handleAddProduct = async (productData) => {
    try {
      const newProduct = await createProduct(productData);
      setProducts((prev) => [...prev, newProduct]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateProduct = async (productData) => {
    try {
      const updatedProduct = await updateProduct(
        editingProduct._id,
        productData,
      );

      setProducts((prev) =>
        prev.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product,
        ),
      );
      setEditingProduct(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (productData) => {
    if (editingProduct) {
      await handleUpdateProduct(productData);
    } else {
      await handleAddProduct(productData);
    }
  };

  return (
    <div className="admin-section">
      <div className="admin-form">
        <h1>Admin Products</h1>
        <ProductForm
          editingProduct={editingProduct}
          onSubmit={handleSubmit}
          onCancel={() => setEditingProduct(null)}
        />
      </div>
      <h2>Products</h2>
      <div
        className="admin-products"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {products.map((product) => (
          <div key={product._id} className="admin-card">
            <img
              src={product.image}
              alt="product-image"
              style={{ width: "140px", height: "200px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <h4 style={{ color: "orange" }}>{product.category}</h4>
            <p style={{ width: "130px", color: "cyan" }}>
              {product.description}
            </p>
            <p>Price: Rs. {product.price}</p>
            <p>In stock: {product.stock}</p>
            <button onClick={() => setEditingProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
