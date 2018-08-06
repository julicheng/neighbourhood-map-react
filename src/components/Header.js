import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="App-header">
        <div
          class="sidebar-toggle-button"
          onClick={this.props.handleButtonClick}
        >
          <div class="hamburger" />
          <div class="hamburger" />
          <div class="hamburger" />
        </div>
        <h3 className="App-header-title">HK Neighbourhood Map</h3>
      </header>
    );
  }
}

export default Header;
