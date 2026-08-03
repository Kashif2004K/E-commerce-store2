import { getProducts } from "../services/productServices";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchPoducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPoducts();
  }, []);
  return (
    <div className="product-section">
      <div className="product-content">
        <h1 className="product-h1">All Figures</h1>
        <p className="product-p">
          Premium quality figures for true collectors..
        </p>
        <ul className="product-list">
          <li>All</li>
          <li>Frieren</li>
          <li>One Piece</li>
          <li>Jujutsu Kaisen</li>
          <li>Tokyo Ghoul</li>
        </ul>
      </div>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
