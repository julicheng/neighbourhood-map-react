import React from "react";

const Header = props => {
  function checkIfEnter(event) {
    if ((event.key = "Enter" || event.which === 13)) {
      props.handleButtonClick();
    }
  }
  return (
    <header className="App-header">
      <div
        className="sidebar-toggle-button"
        onClick={props.handleButtonClick}
        aria-label="hamburger"
        tabIndex="0"
        onKeyPress={event => {
          checkIfEnter(event);
        }}
      >
        <div className="hamburger" />
        <div className="hamburger" />
        <div className="hamburger" />
      </div>
      <h3 className="App-header-title">TST Neighbourhood Map</h3>
    </header>
  );
};

export default Header;
