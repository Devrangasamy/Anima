import React,{useState} from 'react'
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
export const Searchbar = () => {
    const [location, setlocation] = useState([]);
    const [name, setname] = useState([]);
    const [experience, setexperience] = useState(0);
    const search = () => {};
  return (
    <div className="doctor-header">
      <div className="search">
      <input
          type="text"
          placeholder="name"
          onChange={(e) => setname(e.target.value)}
        ></input>
      </div>
      <div className="search">
      <input
          type="text"
          placeholder="location"
          onChange={(e) => setlocation(e.target.value)}
        ></input>
      </div>
      <div className="search">
        <input
          type="number"
          placeholder="Years Of Experience"
          onChange={(e) => setexperience(e.target.value)}
        ></input>
      </div>
      <div className="search">
        <button onClick={search}>
          Search
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
