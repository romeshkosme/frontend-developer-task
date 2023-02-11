import React from "react";
import ErrorImg from "../assets/error.png";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="h-[100vh] flex justify-center items-center flex-col">
            <img src={ErrorImg} />
            <h2 className="text-gray-900 text-xl mt-5">Something went wrong.</h2>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
