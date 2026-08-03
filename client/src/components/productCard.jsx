import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img className="product-img" src={product.image} alt="product image" />
      </div>
      <div className="card-content">
        <h2 className="p-name">{product.name}</h2>
        <p>Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
