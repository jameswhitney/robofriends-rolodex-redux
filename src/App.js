import React from "react";
import CardList from "./components/cardlist.component";

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

  render() {
    const { robots } = this.state;
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
