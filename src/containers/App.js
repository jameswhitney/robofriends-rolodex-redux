import React from "react";
import { connect } from "react-redux";
import CardList from "../components/cardlist.component";
import SearchBox from "../components/searchbox.component";
import Scroll from "../components/scroll.component";
import Spinner from "../components/spinner.component";
import ErrorBoundary from "../components/errorboundary.component";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((robots) => {
        return this.setState({ robots: robots });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return !robots.length ? (
      <Spinner />
    ) : (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
