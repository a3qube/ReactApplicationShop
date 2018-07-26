import React from "react";
import ReactDOM from "react-dom";
import App from "../src/MainApp/App";
import { BrowserRouter as Router } from "react-router-dom";

// (function() {
//   const url = "https://api.shop.com:8443/AffiliatePublisherNetwork/v1/products";
//   var queryParams =
//     "?" +
//     encodeURIComponent("publisherID") +
//     "=" +
//     encodeURIComponent("TEST") +
//     "&" +
//     encodeURIComponent("locale") +
//     "=" +
//     encodeURIComponent("en_US") +
//     "&" +
//     encodeURIComponent("perPage") +
//     "=" +
//     encodeURIComponent("15");
// console.log("beofre fetch", url + queryParams);
// fetch(url + queryParams, {
//   method: "GET",
//   headers: {
//     apikey: "l7xxb1c218d3bba746a5b2cc2a87ef4c6653",
//     "Content-Type": "application/json",
//     "Content-Encoding": "gzip",
//     mode: "cors"
//   }
// })
//   .then(response => console.log("inside response"))
//   .catch(error => {
//     console.error(error);
//   });
// var xhr = new XMLHttpRequest();
// var queryParams = '?' + encodeURIComponent('publisherID') + '=' + encodeURIComponent('TEST') + '&' + encodeURIComponent('locale') + '=' + encodeURIComponent('en_US') + '&' + encodeURIComponent('perPage') + '=' + encodeURIComponent('15');
//   xhr.open("GET", url + queryParams);
//   xhr.setRequestHeader("apikey", "l7xxb1c218d3bba746a5b2cc2a87ef4c6653");
//   xhr.onreadystatechange = function() {
//     console.log(this);
//     if (this.readyState === 4) {
//       console.log(
//         "Status: " +
//           this.status +
//           "\nHeaders: " +
//           JSON.stringify(this.getAllResponseHeaders()) +
//           "\nBody: " +
//           this.responseText
//       );
//     }
//   };

//   xhr.send("");
// })();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
