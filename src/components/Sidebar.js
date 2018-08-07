import React, { Component } from "react";
import Filter from "./Filter";

class Sidebar extends Component {
  render() {
    return (
      <nav className={this.props.sidebar ? "" : "hideSidebar"}>
        <Filter />
        <ul>
          <li>testing</li>
          <li>testing</li>
          <li>testing</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
