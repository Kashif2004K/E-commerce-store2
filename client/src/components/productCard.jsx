import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img className="product-img" src={product.image} alt="product image" />
      </div>
      <div className="card-content">
        <div>
          <h2 className="p-name">{product.name}</h2>
          <h3 className="p-category">{product.category}</h3>
          <p>Rs. {product.price}</p>
        </div>
        <div>
          <h4 className="p-stock">In Stock: {product.stock}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
