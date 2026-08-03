import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img className="product-img" src={product.image} alt="product image" />
      <div className="card-content">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
