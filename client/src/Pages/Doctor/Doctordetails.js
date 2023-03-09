import './Doctordetails.css';
import React from 'react';
import { useParams } from 'react-router-dom';
const Doctordetails = () => {
    const {id}=useParams();
    return (
        <div>
            <h1> Welcome - {id}</h1>        
        </div>
    );
}

export default Doctordetails;
