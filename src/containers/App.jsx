import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import "./App.css";
import { robots } from "../robots";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      robots: robots
    };
  }

  changeSearchField = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, robots } = this.state;

    const sortedRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="container text-center my-5">
        <h1 className="fancy-font">ROBOFRIENDS</h1>
        <SearchBar changeSearchField={this.changeSearchField}></SearchBar>
        <CardList robots={sortedRobots}></CardList>
      </div>
    );
  }
}

export default App;
