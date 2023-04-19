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

import { Petregisteration } from "./components/Petregistration/petregisteration";
import { GetPasswordAndUpdate } from "./components/sign up page/GetPasswordAndUpdate";
import { Signup } from "./components/sign up page/signup";

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
            <Route
              path="/profile"
              element={
                <RequiredAuth>
                  <Profile />
                </RequiredAuth>
              }
            />
            <Route path="/petregisteration" element={<Petregisteration />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route
              path="signup/getPassword"
              element={<GetPasswordAndUpdate />}
            />
            <Route path="/sample" element={<Sample />} />
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
