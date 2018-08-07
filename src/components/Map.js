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

    this.props.setMapState(map);

    // loop through markers
    this.props.locations.map(marker => {
      addMarker(marker);
    });

    // add marker function
    function addMarker(props) {
      let marker = new google.maps.Marker({
        position: props.coords,
        map: map
        //icon: props.iconImage
      });
      // check for custom icon
      if (props.iconImage) {
        marker.setIcon(props.iconImage);
      }

      // check content
      if (props.content) {
        // info window
        let infoWindow = new google.maps.InfoWindow({
          content: props.content
        });

        // add listener for info window
        marker.addListener("click", function() {
          infoWindow.open(map, marker);
        });
      }
    }
  };

  render() {
    return <div id="map" />;
  }
}

export default Map;
