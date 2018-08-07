import React, { Component } from "react";

const google = window.google;

class Map extends Component {
  state = {
    map: {}
  };

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    this.setMap();
    this.setMarkers(this.props.map);
  };

  setMap = () => {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 22.2988, lng: 114.1722 }
    });
    // this.setMarkers(googleMap);
    console.log(map);
    // this.props.setMapState(map);
    this.setState({ map: map });
    console.log(this.state.map);
  };

  setMarkers = () => {
    // loop through markers
    this.props.locations.map(marker => {
      this.addMarker(marker);
    });

    // function addMarker(props) {
    //   let marker = new google.maps.Marker({
    //     position: props.coords,
    //     map: googleMap
    //     //icon: props.iconImage
    //   });
    // }
  };

  // add marker function
  addMarker = props => {
    let marker = new google.maps.Marker({
      position: props.coords,
      setMap: this.props.map
      //icon: props.iconImage
    });
    this.props.setMarkersState(marker);
    // check for custom icon
    // if (props.iconImage) {
    //   marker.setIcon(props.iconImage);
    // }

    // check content
    // if (props.content) {
    //   // info window
    //   let infoWindow = new google.maps.InfoWindow({
    //     content: props.content
    //   });

    //   // add listener for info window
    //   marker.addListener("click", function() {
    //     infoWindow.open(this.props.map, marker);
    //   });
    // }
  };

  render() {
    return <div id="map" />;
  }
}

export default Map;
