import React from 'react';
import './App.css';
import Allroutes from './Allroutes';
import { Authentication } from './Utilis/Authentication';
function App() {
  return (
    <div>
      <Authentication>
        <Allroutes/>
      </Authentication>
    </div>
  );
}

export default App;
