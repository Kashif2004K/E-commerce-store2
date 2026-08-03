import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/productServices";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchSingleProduct = async (id) => {
      try {
        const data = await getSingleProduct(id);
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSingleProduct(id);
  }, []);
  return (
    <div>
      <div key={product._id}>
        <img src={product.image} alt="product.image" />
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        <h4>{product.description}</h4>
        <h3>{product.price}</h3>
        <h3>{product.stock}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
