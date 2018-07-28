import React from "react";
import ReactDOM from "react-dom";
import App from "../src/MainApp/App";
import { BrowserRouter as Router } from "react-router-dom";
// import {getBrands} from "../src/resource/ProductsData"

// (function() {
//   getBrands().then(data => {
//     console.log('data',data);
//   });
// })();


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
