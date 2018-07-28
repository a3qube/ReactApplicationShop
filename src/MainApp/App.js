import React from "react";
import "./styles.css";
import ProductTile from "../ProductListTile/ProductTile";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import BusyIndicator from "../Utils/BusyIndicator/BusyIndicator"
import getProducts from "../../src/resource/ProductsData"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      value: ""
    };
  }

  componentDidMount() {
    this.getProductsDetails();
  }
  handleSearch = event => {
    const value = event.target.value;
    this.setState((prev, props) => {
      return {
        value: value,
        products: this.allData.filter(product => product.name.toUpperCase().includes(value.toUpperCase()))
      };
    });
  };

  async getProductsDetails() {
    const data = await getProducts();
    console.log(data);
    this.allData = data;
    this.setState({products: data});
  }

  render() {
    return (
      <div className="App">
        {!this.state.products ?
        <BusyIndicator isOpen />:
        (
          <div>
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

        )
        }
      </div>

    );
  }
}
// render = {() => <ProductDetails product={this.state.products[0]} />}
