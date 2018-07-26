import React from "react";
import data from "../../../resource/Products.json";
import "./styles.css";
import ProductTile from "../ProductListTile/ProductTile";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      value: ""
    };
    console.log(data.products);
  }
  handleSearch = event => {
    const value = event.target.value;
    this.setState((prev, props) => {
      return {
        value: value,
        products: data.products.filter(product => product.name.includes(value))
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h3>Products ({this.state.products.length})</h3>
          <label htmlFor="searchInpt">Search: </label>
          <input
            id="searchInpt"
            type="text"
            onChange={this.handleSearch}
            value={this.state.value}
          />
          <span> </span>
          <ul>
            {this.state.products.map(pro => (
              <ProductTile key={pro.id} product={pro} />
            ))}
          </ul>
        </div>
        <div>
          <Route exact path="/productDetails/:id" component={ProductDetails} />
        </div>
      </div>
    );
  }
}
// render = {() => <ProductDetails product={this.state.products[0]} />}
