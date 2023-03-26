import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductsList from "./routes/ProductsList";
import ProductDetails from "./routes/ProductDetails";
import AddProduct from "./routes/AddProduct";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
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
