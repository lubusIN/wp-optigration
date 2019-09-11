/**
 * External dependencies.
 */
import { isEmpty } from "lodash";

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
	const [loading, setLoading] = useState( true );
	const [scripts, setScripts] = useState( [] );

	// Side effect to fetch data.
	useEffect(() => {
		apiFetch( { path: '/wp/v2/settings/' } )
		.then( (settings) => {
			const optigration = JSON.parse( settings.optigration );
			setScripts( optigration.scripts );
			setLoading( false )
		});

	}, [loading]);

	// Save settings to database.
	const saveSettings = () => {
		apiFetch( {
			path: '/wp/v2/settings/',
			method: 'POST',
			data: { optigration : JSON.stringify( { scripts } )},
		} );
	};

	// Render Provider.
	return(
			<OptigrationContext.Provider
				value={{
					loading,
					scripts,
					setScripts,
					saveSettings,
				}}
			>
				{children}
			</OptigrationContext.Provider>
	);
};

// Export withSelect for settings from API.
export default OptigrationProvider;
