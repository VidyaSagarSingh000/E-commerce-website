import React, { Component } from "react";

class Default extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title pt-5 text-uppercase">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              {" "}
              the requested url{" "}
              <span className="text-danger text-underline">
                : <u>{this.props.location.pathname}</u>
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
