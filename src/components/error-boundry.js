/**
 * WordPress dependencies.
 */
import { Component } from "@wordpress/element";

/**
 * Internal dependencies.
 */
import {ErrorIllustration} from '../illustrations/error';

/**
 * Component.
 */
class ErrorBoundary extends Component {
	constructor(props) {
	  super(props);
	  this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
	  // Update state so the next render will show the fallback UI.
	  return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
	  // You can also log the error to an error reporting service
	}

	render() {
	  if (this.state.hasError) {
		// You can render any custom fallback UI
		return (
			<div className="bg-white rounded-lg shadow-lg border border-gray-300 py-12 px-8 flex flex-col items-center w-1/2 mx-auto mt-16">
				<ErrorIllustration className="w-1/2" />
				<h1 className="text-red-600">Something went wrong !</h1>
			</div>

		);
	  }

	  return this.props.children;
	}
}

export default ErrorBoundary;
