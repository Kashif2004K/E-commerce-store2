import { getProducts } from "../services/productServices";
import ProductCard from "../components/ProductCard";
import { useEffect, useEffectEvent, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPoducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {}
    };
    fetchPoducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
