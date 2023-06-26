import React from "react";
import { Spinner } from "react-bootstrap";
import { Loading } from "../../components/loading/Loading";
import { UploadProductData } from "../product page/uploadProductData";

export const Sample = () => {
  return (
    <div>
      {/* <UploadProductData/> */}
      <Loading />
    </div>
  );
};
