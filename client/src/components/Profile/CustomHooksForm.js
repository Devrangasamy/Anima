import { useState } from "react";

const CustomHooksForm = (init) => {
  const [name, setName] = useState(init);
  const updateName = (e) => {
    setName(e.target.value);
  };
  return [name, updateName];
};
export default CustomHooksForm;
