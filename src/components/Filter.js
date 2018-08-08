import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <select
        value={this.props.filter}
        onChange={event => {
          this.props.setFilterState(event.target.value);
        }}
        aria-label="category-select"
      >
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
