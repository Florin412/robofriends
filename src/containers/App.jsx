import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container text-center my-5">
        <h1 className="fancy-font">ROBOFRIENDS</h1>
        <SearchBar></SearchBar>
        <CardList></CardList>
      </div>
    );
  }
}

export default App;
