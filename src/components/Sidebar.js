import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <nav className={this.props.sidebar ? "" : "hideSidebar"}>
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
