import React from "react";
import {getProductDetails} from '../resource/ProductsData'
export default function ProductDetails(props) {
  return (
      <div>
        <h1>you have selected {getProductDetails(props.id).name}</h1>
      </div>
  );
}
