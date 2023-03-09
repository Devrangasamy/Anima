import { Route, Routes } from "react-router-dom";
import Not from "./component/Not";
import AddProduct from "./component/product";
import Sidebar from "./component/sidebar/Sidebar";
import Products from "./component/Products/Products.js"
import Dashboard from "./component/Dashboard/Dashboard";
function Allroutes() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Not/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
      </Routes>
    </div>
  );
}
export default Allroutes;
