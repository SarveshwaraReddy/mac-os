import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    this.setState({ hasError: true, error, info });
    // eslint-disable-next-line no-console
    console.error("Uncaught error in a child component:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.info?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
