import { Route, Routes } from "react-router-dom";
import { Authentication } from "./Utilis/Authentication";
import { Home } from "./Pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/sign up page/signup";
import Profile from "./components/Profile/profile";
import Accessories from "./components/Accessories/Accessories";
import { Product } from "./Pages/Product_Page/Product";

function Allroutes() {
  return (
    <Authentication>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/accessories" element={<RequiredAuth><Accessories/></RequiredAuth>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Product/>} />
      </Routes>
    </Authentication>
  );
}
export default Allroutes;
