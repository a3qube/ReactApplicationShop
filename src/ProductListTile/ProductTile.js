import React from "react";
import "./productTile.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

class ProductTile extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <li key={product.id}>
        <div className="productContainer">
          <div>
            <img
              height="60"
              width="60"
              src={product.imageUrl}
              alt={product.name}
              className="imageContainer"
            />
          </div>
          <div>
            {/* <a href={product.imageUrl}>{product.name}</a>*/}
            <Link to={`/productDetails/${product.id}`}>{product.name}</Link>
            <p>Minimun Price : {product.minimumPrice}</p>
          </div>
          <div>
             <Route exact path="/productDetails/:id" render= {({match}) => {
               return match.params.id == product.id ? <ProductDetails id={product.id}/> : null;
             }} />
          </div>
        </div>
      </li>
    );
  }
}

export default ProductTile;
