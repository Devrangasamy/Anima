import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from './Petcare/Home';
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