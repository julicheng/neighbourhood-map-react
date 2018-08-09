import React, { Component } from "react";

const google = window.google;

class Map extends Component {
  componentDidUpdate() {
    this.initMap();
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 22.2988, lng: 114.1722 }
    });
    // Create markers and infoWindows
    this.setMarkers(map);
  };

  setMarkers = map => {
    // Loop through filteredLocations to create markers and infoWindows
    this.props.filteredLocations.map(marker => {
      return this.addMarker(marker, map);
    });
  };

  addMarker = (props, map) => {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      title: props.name,
      icon: "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png"
    });

    // Info window
    let infoWindow = new google.maps.InfoWindow({
      content: `<h3>${props.name}</h3><p>${props.address}</p>`
    });

    // Add listener for info window
    marker.addListener("click", function() {
      marker.setIcon(
        "https://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png"
      );
      infoWindow.open(map, marker);
    });

    google.maps.event.addListener(infoWindow, "closeclick", function() {
      marker.setIcon(
        "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png"
      );
    });
  };

  render() {
    return <div id="map" role="application" aria-label="map" />;
  }
}

export default Map;
