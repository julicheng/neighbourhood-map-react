import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

// Alert user if google maps fails to load
window.gm_authFailure = () => {
  alert("Google Maps has failed to load! Please check your Google API key!");
};

class App extends Component {
  state = {
    sidebar: false,
    locations: [
      {
        name: "Avenue of Stars",
        coords: { lat: 22.293725220320564, lng: 114.17291481589724 },
        address: "",
        category: "Outdoor"
      },
      {
        name: "Kowloon Park",
        coords: { lat: 22.30000017537535, lng: 114.17049388700053 },
        address: "",
        category: "Outdoor"
      },
      {
        name: "Hong Kong Science Museum",
        coords: { lat: 22.301244972038052, lng: 114.17725996425949 },
        address: "",
        category: "Museums"
      },
      {
        name: "Hong Kong Space Museum",
        coords: { lat: 22.29419639215586, lng: 114.17179245975316 },
        address: "",
        category: "Museums"
      },
      {
        name: "Hong Kong Museum of Art",
        coords: { lat: 22.29332616758428, lng: 114.17207723445968 },
        address: "",
        category: "Museums"
      },
      {
        name: "Star Ferry Pier",
        coords: { lat: 22.294159014296316, lng: 114.16857586436123 },
        address: "",
        category: "Outdoor"
      },
      {
        name: "The Langham Hong Kong Hotel",
        coords: { lat: 22.29643627275219, lng: 114.17015466238834 },
        address: "",
        category: "Hotels"
      },
      {
        name: "The Peninsula Hong Kong Hotel",
        coords: { lat: 22.2951024, lng: 114.1718537 },
        address: "",
        category: "Hotels"
      }
    ],
    filteredLocations: [],
    filter: "none"
  };

  componentDidMount() {
    this.getAddressInfo(this.state.locations);
    this.setFilterState("none");
  }

  // Fetch address data from foursquare api
  getAddressInfo = locations => {
    let clientId = "<your CLIENT ID>";
    let clientSecret = "<your CLIENT SECRET>";

    if (clientId !== "" && clientSecret !== "") {
      // Look through the locations array to fetch data from api for each location
      locations.forEach((location, index) => {
        let url = `https://api.foursquare.com/v2/venues/search?ll=${
          location.coords.lat
        },${
          location.coords.lng
        }&client_id=${clientId}&client_secret=${clientSecret}&v=20180806&limit=1`;

        fetch(url).then(response => {
          let addressData;
          if (response.status !== 200) {
            addressData = "Sorry data cannot be fetched.";
            this.setContent(index, addressData);
            return;
          }
          response.json().then(data => {
            // Get data of the address for the location and send to setContent to set the state of updated locations array
            addressData = data.response.venues[0].location.formattedAddress[0];
            this.setContent(index, addressData);
          });
        });
      });
    }
  };

  // Set the state for the locations array with updated address
  setContent = (index, addressData) => {
    const locationsObj = this.state.locations;
    locationsObj[index].address = addressData;
    this.setState({
      locations: locationsObj
    });
  };

  // Set state for the filter when the filter is changed and call filterLocations to select correct locations
  setFilterState = filter => {
    this.setState({ filter }, () => this.filterLocations());
  };

  // Filter locations with the correct category
  filterLocations = () => {
    if (this.state.filter === "none") {
      this.setState({ filteredLocations: this.state.locations });
    } else {
      let filteredLocationsObject = this.state.locations.filter(location => {
        return location.category === this.state.filter;
      });
      this.setState({ filteredLocations: filteredLocationsObject });
    }
  };

  // Check which list item is clicked and open the corresponding marker
  markerClick = locationName => {
    if (document.querySelector("div[title='" + locationName + "']")) {
      document.querySelector("div[title='" + locationName + "']").click();
    }
  };

  // Reverse the current state of the sidebar when the hamburger is clicked
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
          filteredLocations={this.state.filteredLocations}
          setFilterState={this.setFilterState}
          markerClick={this.markerClick}
        />
        <Map
          setMapState={this.setMapState}
          setLocationState={this.setLocationState}
          setMarkersState={this.setMarkersState}
          filteredLocations={this.state.filteredLocations}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
