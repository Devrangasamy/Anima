import React from "react";
import { SpinnerCircular } from "spinners-react";

export const Loading = () => {
  return (
    <SpinnerCircular enabled={true} color={"blue"} thickness={100} size={150} />
  );
};
