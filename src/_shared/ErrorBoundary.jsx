import React from "react";
import PropTypes from "prop-types";

export class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    React.logErrorToMyService(error, errorInfo);
    // this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Error: </p>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
