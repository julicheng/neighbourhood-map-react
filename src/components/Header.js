import React, { Component } from "react";

class Header extends Component {
  checkIfEnter = event => {
    if ((event.key = "Enter" || event.which === 13)) {
      this.props.handleButtonClick();
    }
  };
  render() {
    return (
      <header className="App-header">
        <div
          className="sidebar-toggle-button"
          onClick={this.props.handleButtonClick}
          aria-label="hamburger"
          tabIndex="0"
          onKeyPress={event => {
            this.checkIfEnter(event);
          }}
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
