import React, { Component } from "react";
import Filter from "./Filter";

class Sidebar extends Component {
  // Check if the enter key is pressed and then call the markerClick method to open infowindow
  checkIfEnter = (event, location) => {
    if ((event.key = "Enter" || event.which === 13)) {
      this.props.markerClick(location);
    }
  };
  render() {
    return (
      <nav className={this.props.sidebar ? "" : "hideSidebar"}>
        <Filter
          filter={this.props.filter}
          setFilterState={this.props.setFilterState}
          aria-label="category-select"
          tabindex="0"
        />
        <ul>
          {this.props.filteredLocations.map(location => {
            return (
              <li
                tabIndex="0"
                onClick={event => {
                  this.props.markerClick(location.name);
                }}
                key={location.name}
                onKeyPress={event => {
                  this.checkIfEnter(event, location.name);
                }}
              >
                {location.name}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
