import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

const google = window.google;

class App extends Component {
  state = {
    sidebar: false
  };

  componentDidMount() {
    let options = {
      zoom: 15,
      center: { lat: 22.2988, lng: 114.1722 }
    };

    let map = new google.maps.Map(document.getElementById("map"), options);
  }

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
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
