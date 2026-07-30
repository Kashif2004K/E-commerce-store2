const ProductCard = ({ product }) => {
  return (
    <div>
      <img className="product-img" src={product.image} alt="product image" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
