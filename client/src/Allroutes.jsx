import { Route, Routes } from "react-router-dom";
import { Authentication } from "./Utilis/Authentication";
import { Home } from "./Pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/sign up page/signup";
import { Profile } from "./Pages/Profile/Profile";
import Accessories from "./components/Accessories/Accessories";
import Contactus from "./components/Contactus/Conactus";
import { Forgetpassword } from "./components/ForgetPassword/Forgetpassword";
import { Product } from "./Pages/Product/Product";
import Doctor from "./Pages/Doctor/Doctor";
import RequiredAuth from "./Utilis/RequiredAuth";
import { Cart } from "./Pages/Product/Cart";
import Doctordetails from "./Pages/Doctor/Doctordetails";
import { GetPasswordAndUpdate } from "./components/sign up page/GetPasswordAndUpdate";
import { GoogleAuthendication } from "./Utilis/GoogleAuthendication";
function Allroutes() {
  return (
    <Authentication>
      <GoogleAuthendication>
        <Cart>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route
              path="/accessories"
              element={
                <RequiredAuth>
                  <Accessories />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup></Signup>} />
          <Route path = '/signup/getPassword' element = {<GetPasswordAndUpdate/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
  
            <Route path="/products" element={<Product />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/doctor/:id" element={<Doctordetails />} />
          </Routes>
        </Cart>
      </GoogleAuthendication>
    </Authentication>
  );
}
export default Allroutes;
