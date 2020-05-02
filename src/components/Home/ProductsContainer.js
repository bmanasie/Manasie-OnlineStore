import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
export class MoviesContainer extends Component {
  render() {
    const { products } = this.props;
    let content = "";
    content = products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(MoviesContainer);
