import React from "react";
import toast from "react-hot-toast";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (<div>
        {toast.error("⚠️ Something went wrong. Please try again later!")} 
      </div>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
