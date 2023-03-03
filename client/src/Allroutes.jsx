import { Route, Routes} from 'react-router-dom';
import {Home} from './Pages/Home/Home'
import Login from "./components/Login/Login"
import Signup from './components/sign up page/signup';
import Profile from './components/Profile/profile';

function Allroutes(){
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/signup" element={<Signup></Signup>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    );
}
export default Allroutes;