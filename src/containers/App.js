import React from "react";
import { connect } from "react-redux";
import CardList from "../components/cardlist.component";
import SearchBox from "../components/searchbox.component";
import Scroll from "../components/scroll.component";
import Spinner from "../components/spinner.component";
import ErrorBoundary from "../components/errorboundary.component";

import { requestRobots, setSearchField } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return isPending ? (
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

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
