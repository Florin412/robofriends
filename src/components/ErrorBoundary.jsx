import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false
    };
  }

  componentDidCatch() {
    this.setState({ hasErrors: true });
  }

  render() {
    if (this.state.hasErrors) {
      return <h1>There are some errors, please come back later</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
