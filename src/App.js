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
        name: "Avenue of Stars",
        coords: { lat: 22.293, lng: 114.1739 },
        content: "Avenue of Stars",
        category: "Outdoor"
      },
      {
        name: "Mira Place",
        coords: { lat: 22.3009, lng: 114.1722 },
        content: "Mira Place",
        category: "Shopping"
      },
      {
        name: "Kowloon Park",
        coords: { lat: 22.3008, lng: 114.1701 },
        content: "Kowloon Park",
        category: "Outdoor"
      },
      {
        name: "Hong Kong Science Museum",
        coords: { lat: 22.301, lng: 114.1776 },
        content: "Hong Kong Science Museum",
        category: "Museums"
      },
      {
        name: "iSquare",
        coords: { lat: 22.2969, lng: 114.1719 },
        content: "iSquare",
        category: "Shopping"
      },
      {
        name: "Hong Kong Space Museum",
        coords: { lat: 22.2943, lng: 114.1719 },
        content: "Hong Kong Space Museum",
        category: "Museums"
      },
      {
        name: "Hong Kong Museum of Art",
        coords: { lat: 22.2935, lng: 114.1721 },
        content: "Hong Kong Museum of Art",
        category: "Museums"
      },
      {
        name: "Star Ferry Pier",
        coords: { lat: 22.2938, lng: 114.1687 },
        content: "Star Ferry Pier",
        category: "Outdoor"
      },
      {
        name: "The Langham Hong Kong Hotel",
        coords: { lat: 22.2964, lng: 114.1697 },
        content: "The Langham Hong Kong Hotel",
        category: "Hotels"
      },
      {
        name: "The Peninsula Hong Kong Hotel",
        coords: { lat: 22.2951, lng: 114.1719 },
        content: "The Peninsula Hong Kong Hotel",
        category: "Hotels"
      }
    ],
    markers: [],
    filter: "none",
    infoWindow: ""
  };

  componentDidMount() {
    this.getMarkerInfo(this.state.locations);
  }

  getMarkerInfo = locations => {
    let clientId = "T4YAFFSJXDPTBYW3PUEBM4LOAQKLFBUNHYF30P2XHLMLCIME";
    let clientSecret = "ENY5ALSQ2ONEEU3TV25UDHDWNGL1A4P1GNM340MXYI2ZRKRW";
  };

  // setMapState = map => {
  //   this.setState({ map });
  // };

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
