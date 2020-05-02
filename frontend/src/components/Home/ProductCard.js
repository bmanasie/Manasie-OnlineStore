import React, { Component } from "react";

export class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={product.image}
            alt="Card image cap"
          />
          <h5 className="text-light card-title">{product.name}</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Catalog number - {product.catalogNumber}
            </li>
            <li className="list-group-item">Price - {product.price}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ProductCard;
