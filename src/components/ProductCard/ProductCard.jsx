import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { id, title, price, image } = props.product;
  return (
    <div className="card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="img-product" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card--footer">
          <p className="price">${price}</p>
          <button onClick={() => props.delProduct(id)} className="del-btn">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
