import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import ProductsContainer from "./ProductsContainer";
export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <div /> : <ProductsContainer />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Landing);
