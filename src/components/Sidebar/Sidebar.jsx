import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Bag, PlusCircle } from "react-bootstrap-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Nav className="flex-column bg-dark sidebar">
      <Link to="/products" className="link-wrapper">
        <div className="link-icon">
          <Bag size={25} />
        </div>
        <span className="link-text">کالا ها</span>
      </Link>
      <Link to="/add-product" className="link-wrapper">
        <div className="link-icon">
          <PlusCircle size={25} />
        </div>
        <span className="link-text">اضافه کردن کالا</span>
      </Link>
    </Nav>
  );
};

export default Sidebar;
