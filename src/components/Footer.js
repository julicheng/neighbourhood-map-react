import React, { Component } from "react";

const Footer = () => {
  return (
    <footer className="App-footer">
      <h1 className="App-footer-title">
        Built with the{" "}
        <a
          href="https://developers.google.com/maps/documentation/"
          target="_blank"
        >
          Google Maps API
        </a>{" "}
        and{" "}
        <a href="https://developer.foursquare.com/places-api" target="_blank">
          Foursqaure Places API
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
