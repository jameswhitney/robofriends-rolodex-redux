import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>'Yikes. Looks like we're missing something'</h1>; // TODO: Create a Error Form
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
