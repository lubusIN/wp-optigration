/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import Error from './error';

/**
 * Component.
 */
class ErrorBoundary extends Component {
	constructor( props ) {
	  super( props );
	  this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch() {
		// You can also log the error to an error reporting service
	}

	render() {
		if ( this.state.hasError ) {
			// You can render any custom fallback UI
			return (
				<Error />
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
