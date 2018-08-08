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
        coords: { lat: 22.293725220320564, lng: 114.17291481589724 },
        content: "Avenue of Stars",
        category: "Outdoor"
      },
      {
        name: "Kowloon Park",
        coords: { lat: 22.30000017537535, lng: 114.17049388700053 },
        content: "Kowloon Park",
        category: "Outdoor"
      },
      {
        name: "Hong Kong Science Museum",
        coords: { lat: 22.301244972038052, lng: 114.17725996425949 },
        content: "Hong Kong Science Museum",
        category: "Museums"
      },
      {
        name: "Hong Kong Space Museum",
        coords: { lat: 22.29419639215586, lng: 114.17179245975316 },
        content: "Hong Kong Space Museum",
        category: "Museums"
      },
      {
        name: "Hong Kong Museum of Art",
        coords: { lat: 22.29332616758428, lng: 114.17207723445968 },
        content: "Hong Kong Museum of Art",
        category: "Museums"
      },
      {
        name: "Star Ferry Pier",
        coords: { lat: 22.294159014296316, lng: 114.16857586436123 },
        content: "Star Ferry Pier",
        category: "Outdoor"
      },
      {
        name: "The Langham Hong Kong Hotel",
        coords: { lat: 22.29643627275219, lng: 114.17015466238834 },
        content: "The Langham Hong Kong Hotel",
        category: "Hotels"
      },
      {
        name: "The Peninsula Hong Kong Hotel",
        coords: { lat: 22.2951024, lng: 114.1718537 },
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

    locations.forEach((location, index) => {
      let url = `https://api.foursquare.com/v2/venues/search?ll=${
        location.coords.lat
      },${
        location.coords.lng
      }&client_id=${clientId}&client_secret=${clientSecret}&v=20180806&limit=1`;

      fetch(url).then(response => {
        if (response.status !== 200) {
          location.content = "Sorry data cannot be fetched.";
          return;
        }
        response.json().then(data => {
          let addressData =
            data.response.venues[0].location.formattedAddress[0];
          this.setContent(index, addressData);
        });
      });
    });
  };

  setContent = (index, addressData) => {
    this.setState(prevState => {
      prevState.locations[index].content = addressData;
    });
  };

  setFilterState = filter => {
    this.setState({ filter });
  };

  // setLocationState = location => {
  //   this.setState();
  // };

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
