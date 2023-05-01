import { Route, Routes } from "react-router-dom";
import Doctor from "./Pages/Doctor/Doctor";
import Doctordetails from "./Pages/Doctor/Doctordetails";
import { Home } from "./Pages/Home/Home";
import { Cart } from "./Pages/Product/Cart";
import { Product } from "./Pages/Product/Product";
import { Profile } from "./Pages/Profile/Profile";
import { Sample } from "./Pages/sample/sample";
import { Authentication } from "./Utilis/Authentication";
import { GoogleAuthendication } from "./Utilis/GoogleAuthendication";
import RequiredAuth from "./Utilis/RequiredAuth";
import Accessories from "./components/Accessories/Accessories";
import Contactus from "./components/Contactus/Conactus";
import { Forgetpassword } from "./components/ForgetPassword/Forgetpassword";
import { Login } from "./components/Login/Login";
import { Petregisteration } from "./components/Petregistration/petregisteration";
import Petdetails from "./Pages/Petdetails/Petdetails";
import { GetPasswordAndUpdate } from "./components/sign up page/GetPasswordAndUpdate";
import { Signup } from "./components/sign up page/signup";
import { ProductPage } from "./Pages/product page/productpage";
import Medicare from "./components/Medicare/Medicare";

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
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/petregister" element={<Petregisteration />} />
            <Route path="/petdetail" element={<Petdetails />} />
            <Route path="/medicare" element={<Medicare />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route
              path="signup/getPassword"
              element={<GetPasswordAndUpdate />}
            />
            <Route path="/sample" element={<Sample />} />

            {/* Routes for the products page */}
            <Route path="/products" element={<Product />} />
            <Route path = "/products/:id" element = {<ProductPage/>} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/doctor/:id" element={<Doctordetails />} />
          </Routes>
        </Cart>
      </GoogleAuthendication>
    </Authentication>
  );
}
export default Allroutes;
