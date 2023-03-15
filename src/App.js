import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import NotFound from "./components/NotFound";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/products" element={<ProductsList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
