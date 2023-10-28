import { Component } from "react";
import { Link } from "react-router-dom";
class ErrorBoundary extends Component {
  state = { hasError: false };
  /*if error is present this function would set the new state 🌚🌚 */
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  /*life cycle mthod */
  componentDidCatch(error, info) {
    console.error("Error boundary component caught an error ", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Error found withthis listing.
          <Link to="/">Click here to go back to home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
