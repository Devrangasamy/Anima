import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Doctor.css';
import { Doctorbody } from '../../components/Doctor/Doctorbody';
import { Searchbar } from '../../components/Doctor/Searchbar';
import { FaSearch} from "react-icons/fa";
const Doctor = () => {
    const [location,setlocation]=useState([]);
    const [specilization,setspecilization]=useState([]);
    const [experience,setexperience]=useState(0);
    const search =()=>{

    }
    return (
        <div>
            <Navbar></Navbar>
            <Doctorbody></Doctorbody>
            <Searchbar></Searchbar>
        </div>
    );
}

export default Doctor;
