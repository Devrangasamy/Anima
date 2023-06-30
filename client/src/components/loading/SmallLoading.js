import React from "react";
import { SpinnerCircular } from "spinners-react";

export const SmallLoading = () => {
  return (
    <SpinnerCircular enabled={true} color={"blue"} thickness={50} size={50} />
  );
};
