/**
 * WordPress dependencies.
 */
import { useState, useEffect, createContext } from "@wordpress/element";
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies.
 */
import './store';

/**
 * Context Component.
 */
export const OptigrationContext = createContext();

const OptigrationProvider = ({ children }) => {
	// State Hook.
	const [scripts, setScripts] = useState( [] );
	const [loading, setLoading] = useState( true );

	useEffect(() => {
		setLoading( false );
	}, [scripts]);

	// Render Provider.
	return(
			<OptigrationContext.Provider
				value={{
					loading,
					scripts,
					setScripts,
				}}
			>
				{children}
			</OptigrationContext.Provider>
	);
};

// Export withSelect for settings from API.
export default OptigrationProvider;
