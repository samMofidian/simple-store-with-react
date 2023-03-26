import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import "./ProductsList.css";

const ProductsList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // fetch products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const delProduct = (id) => {
    const newProducts = products.filter((obj) => obj.id !== id);
    setProducts(newProducts);
    toast.success("با موفقیت حذف شد", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {loading ? (
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
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {currentProducts.map((product) => (
              <div className="col mb-5" key={product.id}>
                <ProductCard product={product} delProduct={delProduct} />
              </div>
            ))}
          </div>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <ToastContainer style={{ fontSize: "1.5rem", fontWeight: 600 }} />
        </>
      )}
    </div>
  );
};

export default ProductsList;
