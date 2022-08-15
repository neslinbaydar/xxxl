function ProductCard({ brand, image, name, price, id }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{brand}</h5>
        <p className="card-text">{name}</p>
        <button href="#" className="btn btn-primary">{price} €</button>
      </div>
    </div>
  );
}

export default ProductCard;