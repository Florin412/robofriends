import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ robots: res });
      })
      .catch((err) => {
        console.log(
          "There are some errors when you fetch the robots from the server: ",
          err
        );
      });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    if (robots.length === 0) {
      return <h1>Loading Page</h1>;
    }

    const sortedRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="container text-center my-5">
        <h1 className="fancy-font">ROBOFRIENDS</h1>
        <SearchBar searchChange={onSearchChange}></SearchBar>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={sortedRobots}></CardList>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
