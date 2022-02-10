import React from "react";
import CardList from "./components/cardlist.component";
import SearchBox from "./components/searchbox.component";
import Scroll from "./components/scroll.component";
import Spinner from "./components/spinner.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
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

  onSearchChange = (event) => {
    return this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return !robots.length ? (
      <Spinner />
    ) : (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
