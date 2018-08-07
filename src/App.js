import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    sidebar: false,
    locations: [
      {
        coords: { lat: 22.293, lng: 114.1739 },
        iconImage:
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: "Avenue of Stars",
        category: "Outdoor"
      },
      {
        coords: { lat: 22.3009, lng: 114.1722 },
        content: "Mira Place",
        category: "Shopping"
      },
      {
        coords: { lat: 22.3008, lng: 114.1701 },
        content: "Kowloon Park",
        category: "Outdoor"
      },
      {
        coords: { lat: 22.301, lng: 114.1776 },
        content: "Hong Kong Science Museum",
        category: "Museums"
      },
      {
        coords: { lat: 22.2969, lng: 114.1719 },
        content: "iSquare",
        category: "Shopping"
      },
      {
        coords: { lat: 22.2943, lng: 114.1719 },
        content: "Hong Kong Space Museum",
        category: "Museums"
      },
      {
        coords: { lat: 22.2935, lng: 114.1721 },
        content: "Hong Kong Museum of Art",
        category: "Museums"
      },
      {
        coords: { lat: 22.2938, lng: 114.1687 },
        content: "Star Ferry Pier",
        category: "Outdoor"
      },
      {
        coords: { lat: 22.2964, lng: 114.1697 },
        content: "The Langham Hong Kong Hotel",
        category: "Hotels"
      },
      {
        coords: { lat: 22.2951, lng: 114.1719 },
        content: "The Peninsula Hong Kong Hotel",
        category: "Hotels"
      }
    ],
    markers: [],
    filterMarkers: [],
    map: [],
    filter: "none"
  };

  setMapState = map => {
    this.setState({ map });
  };

  setFilterState = filter => {
    this.setState({ filter });
  };

  setLocationState = location => {
    this.setState();
  };

  setMarkersState = marker => {
    this.setState(prevState => {
      prevState.markers.push(marker);
    });
  };

  handleButtonClick = () => {
    this.setState(prevState => {
      return { sidebar: !prevState.sidebar };
    });
  };

  render() {
    return (
      <div className="App">
        <Header handleButtonClick={this.handleButtonClick} />
        <Sidebar
          sidebar={this.state.sidebar}
          filter={this.state.filter}
          locations={this.state.locations}
          setFilterState={this.setFilterState}
        />
        <Map
          locations={this.state.locations}
          markers={this.state.markers}
          map={this.state.map}
          setMapState={this.setMapState}
          setLocationState={this.setLocationState}
          setMarkersState={this.setMarkersState}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
