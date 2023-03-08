import axios from "axios";
import React, { useEffect, useState } from "react";

export const Doctorbody = () => {
    const [datalist,setDatalist]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/doctor/")
        .then((response)=>{
            setDatalist([response.data])
            console.log([response.data]);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return <div></div>;
};
