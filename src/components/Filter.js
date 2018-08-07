import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <select value="none">
        <option value="none">No Category</option>
        <option value="Shopping">Shopping</option>
        <option value="Hotels">Dining</option>
        <option value="Museums">Museums</option>
        <option value="Outdoor">Outdoor</option>
      </select>
    );
  }
}

export default Filter;
