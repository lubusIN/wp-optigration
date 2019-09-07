/**
 * WordPress dependencies.
 */
import { Component } from "@wordpress/element";
import { ExternalLink } from "@wordpress/components";

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
			<div className="bg-white w-full md:w-3/5 xl:w-2/5 rounded-lg shadow-lg border border-gray-300 py-12 px-8 flex flex-col items-center mx-auto mt-16">
				<ErrorIllustration className="w-1/2 mb-4" />
				<h1 className="text-red-600">Something went wrong !</h1>
				<span className="text-gray-500">Check browser console for details</span>
				<ExternalLink className="flex mt-8" href="https://github.com/lubusIN/wp-optigration/issues">Report issue</ExternalLink>
			</div>

		);
	  }

	  return this.props.children;
	}
}

export default ErrorBoundary;
