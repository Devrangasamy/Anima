import { Route, Routes } from "react-router-dom";
import Not from "./component/Not";
import AddProduct from "./component/product";
import Sidebar from "./component/sidebar/Sidebar";
import Products from "./component/Products/Products.js"
function Allroutes() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Not/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
      </Routes>
    </div>
  );
}
export default Allroutes;
