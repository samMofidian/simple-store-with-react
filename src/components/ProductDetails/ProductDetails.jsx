import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      {product ? (
        <div className="product-container">
          <h2 className="product-title">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="product-img"
          />
          <p className="product-price">${product.price}</p>

          <p className="product-rate">
            <span>امتیاز </span>
            <span style={{ fontWeight: 600, fontSize: "2.2rem" }}>
              {" "}
              {product.rating.rate}{" "}
            </span>
            <span>از</span>
            <span style={{ fontWeight: 600, fontSize: "2.2rem" }}>
              {" "}
              {product.rating.count}{" "}
            </span>
            <span>رای </span>
          </p>
          <div className="product-desc">
            <h3>توضیحات</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="spinner-border"
            role="status"
            style={{ width: "5rem", height: "5rem", borderWidth: "0.4em" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
