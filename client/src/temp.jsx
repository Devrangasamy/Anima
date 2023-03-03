import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Home} from './Pages/Home/Home'
function Allroutes(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
}
export default Allroutes;