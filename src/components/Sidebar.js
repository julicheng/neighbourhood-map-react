import React, { Component } from "react";
import Filter from "./Filter";

class Sidebar extends Component {
  render() {
    return (
      <nav className={this.props.sidebar ? "" : "hideSidebar"}>
        <Filter
          filter={this.props.filter}
          setFilterState={this.props.setFilterState}
        />
        <ul>
          {this.props.locations.map(location => {
            return <li>{location.content}</li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
