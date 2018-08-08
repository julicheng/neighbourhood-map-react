import React, { Component } from "react";

const google = window.google;

class Map extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 22.2988, lng: 114.1722 }
    });
    this.setMarkers(map);
  };

  setMarkers = map => {
    // loop through markers
    this.props.locations.map(marker => {
      return this.addMarker(marker, map);
    });
  };

  // add marker function
  addMarker = (props, map) => {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png"
      //icon: props.iconImage
    });
    this.props.setMarkersState(marker);

    // check content
    if (props.content) {
      // info window
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      // add listener for info window
      marker.addListener("click", function() {
        marker.setIcon(
          "https://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png"
        );
        infoWindow.open(map, marker);
      });

      google.maps.event.addListener(infoWindow, "closeclick", function() {
        marker.setIcon(
          "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png"
        ); //removes the marker
      });
    }
  };

  render() {
    return <div id="map" role="application" aria-label="map" />;
  }
}

export default Map;
