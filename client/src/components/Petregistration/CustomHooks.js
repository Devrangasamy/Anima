import { useState } from "react";

const CustomHooks = () => {
  const [setdetails, setFromdetails] = useState();
  const update = (e) => {
    setFromdetails(e.target.value);
  };
  return [setdetails, update];
};

export default CustomHooks;
