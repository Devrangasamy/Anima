import { useState } from "react";

export const PasswordToggleVisibility = () => {
  const [visibility, setVisibility] = useState(false);
  return [visibility, setVisibility];
};
