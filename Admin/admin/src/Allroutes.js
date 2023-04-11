import { Route, Routes } from "react-router-dom";
// import Not from "./component/Not";
import AddProduct from "./component/product";
import Sidebar from "./component/sidebar/Sidebar";
import Products from "./component/Products/Products.js"
import Dashboard from "./component/Dashboard/Dashboard";
import User from "./component/Users/User";
import { EditProduct } from "./component/Edit_product/editProduct";
function Allroutes() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route index element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/users" element={<User/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path = 'editproduct' element= { <EditProduct/>}></Route>
        {/* <Route path="#" element={<Not/>} /> */}
      </Routes>
    </div>
  );
}
export default Allroutes;
