import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="App-header">
        <div
          className="sidebar-toggle-button"
          onClick={this.props.handleButtonClick}
        >
          <div className="hamburger" />
          <div className="hamburger" />
          <div className="hamburger" />
        </div>
        <h3 className="App-header-title">TST Neighbourhood Map</h3>
      </header>
    );
  }
}

export default Header;
