import React from "react";
import {getProductDetails} from '../resource/ProductsData'
export default function ProductDetails(props) {
  return (
      <div>
        <p>{getProductDetails(props.id).description}</p>
      </div>
  );
}
