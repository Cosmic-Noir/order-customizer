import React, { Component } from "react";
import Features from "../Features/Features";

class Form extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          features={this.props.features}
          selected={this.props.selected}
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

export default Form;
