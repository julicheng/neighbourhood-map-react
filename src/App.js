import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

// const google = window.google;

class App extends Component {
  state = {
    sidebar: false,
    locations: [
      {
        coords: { lat: 22.293, lng: 114.1739 },
        iconImage:
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: "<p>Avenue of Stars</p>",
        category: "Outdoor"
      },
      {
        coords: { lat: 22.3009, lng: 114.1722 },
        content: "<p>Mira Place</p>",
        category: "Shopping"
      },
      {
        coords: { lat: 22.3008, lng: 114.1701 },
        content: "<p>Kowloon Park</p>",
        category: "Outdoor"
      },
      {
        coords: { lat: 22.301, lng: 114.1776 },
        content: "<p>Hong Kong Science Museum</p>",
        category: "Museums"
      },
      {
        coords: { lat: 22.2969, lng: 114.1719 },
        content: "<p>iSquare</p>",
        category: "Shopping"
      },
      {
        coords: { lat: 22.2943, lng: 114.1719 },
        content: "<p>Hong Kong Space Museum</p>",
        category: "Museums"
      },
      {
        coords: { lat: 22.2935, lng: 114.1721 },
        content: "<p>Hong Kong Museum of Art</p>",
        category: "Museums"
      },
      {
        coords: { lat: 22.2938, lng: 114.1687 },
        content: "<p>Star Ferry Pier</p>",
        category: "Outdoor"
      },
      {
        coords: { lat: 22.2964, lng: 114.1697 },
        content: "<p>The Langham Hong Kong Hotel</p>",
        category: "Hotels"
      },
      {
        coords: { lat: 22.2951, lng: 114.1719 },
        content: "<p>The Peninsula Hong Kong Hotel</p>",
        category: "Hotels"
      }
    ],
    allMarkers: [],
    filterMarkers: [],
    map: "",
    filter: ""
  };

  // componentDidMount() {
  //   this.initMap();
  // }

  setMapState = map => {
    this.setState({ map });
  };

  // initMap = () => {
  //   let map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 15,
  //     center: { lat: 22.2988, lng: 114.1722 }
  //   });

  //   // this.setState({
  //   //   map: map
  //   // });

  //   // loop through markers
  //   this.state.locations.map(marker => {
  //     addMarker(marker);
  //   });

  //   // add marker function
  //   function addMarker(props) {
  //     let marker = new google.maps.Marker({
  //       position: props.coords,
  //       map: map
  //       //icon: props.iconImage
  //     });
  //     // check for custom icon
  //     if (props.iconImage) {
  //       marker.setIcon(props.iconImage);
  //     }

  //     // check content
  //     if (props.content) {
  //       // info window
  //       let infoWindow = new google.maps.InfoWindow({
  //         content: props.content
  //       });

  //       // add listener for info window
  //       marker.addListener("click", function() {
  //         infoWindow.open(map, marker);
  //       });
  //     }
  //   }
  // };

  handleButtonClick = () => {
    this.setState(prevState => {
      return { sidebar: !prevState.sidebar };
    });
  };

  render() {
    return (
      <div className="App">
        <Header handleButtonClick={this.handleButtonClick} />
        <Sidebar sidebar={this.state.sidebar} />
        <Map
          locations={this.state.locations}
          markers={this.state.markers}
          map={this.state.map}
          setMapState={this.setMapState}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
