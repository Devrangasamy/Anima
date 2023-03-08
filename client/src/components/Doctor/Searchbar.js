import React,{useState} from 'react'
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
export const Searchbar = () => {
    const [location, setlocation] = useState([]);
    const [specilization, setspecilization] = useState([]);
    const [experience, setexperience] = useState(0);
    const search = () => {};
  return (
    <div className="doctor-header">
      <div className="search">
        <select onChange={(e) => setlocation(e.target.value)}>
          <option value="">Location</option>
          <option value="salem">SALEM</option>
          <option value="erode">ERODE</option>
          <option value="coimbatore">COIMBATORE</option>
        </select>
      </div>
      <div
        className="search"
        onChange={(e) => setspecilization(e.target.value)}
      >
        <select>
          <option value="">Specilization</option>
          <option value="dog">DOG</option>
          <option value="cat">CAT</option>
          <option value="fish">FISH</option>
        </select>
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
