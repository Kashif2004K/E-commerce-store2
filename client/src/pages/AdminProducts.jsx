import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productServices";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <div>
      <h1>Admin Products</h1>
      <ProductForm />
      <h2>Products</h2>
      <div style={{ display: "flex" }}>
        {products.map((product) => (
          <div key={product._id} style={{ margin: "20px" }}>
            <img
              src={product.image}
              alt="product-image"
              style={{ width: "140px", height: "100px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>Price: Rs. {product.price}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
