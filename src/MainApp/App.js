import React from "react";
import data from "../../../resource/Products.json";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>Products</h3>
      <span>Count</span>
      <span> {data.products.length}</span>
      <ul>
        {data.products.map(pro => (
          <li key={pro.id}>
            <div>
              <a href={pro.imageUrl}>{pro.name}</a>
              <img src={pro.imageUrl} alt={pro.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
