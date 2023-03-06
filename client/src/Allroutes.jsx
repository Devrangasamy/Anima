import { Route, Routes } from "react-router-dom";
import { Authentication } from "./Utilis/Authentication";
import { Home } from "./Pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/sign up page/signup";
import Profile from "./components/Profile/Profile";
import RequiredAuth from "./Utilis/RequiredAuth";
import  Accessories  from "./components/Accessories/Accessories";
function Allroutes() {
  return (
    <Authentication>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/accessories" element={<RequiredAuth><Accessories/></RequiredAuth>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Authentication>
  );
}
export default Allroutes;
