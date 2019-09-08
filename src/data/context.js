/**
 * WordPress dependencies.
 */
import { useState, useEffect, createContext } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

/**
 * Internal dependencies.
 */
import './store';

/**
 * Context Component.
 */
export const OptigrationContext = createContext();

const OptigrationProvider = ({ children, pluginSettings }) => {
	// State Hook.
	const [settings, setSettings] = useState( pluginSettings );

	useEffect(() => {
		setSettings( pluginSettings );
	}, []);

	// Render Provider.
	return(
			<OptigrationContext.Provider
				value={{
					settings,
					update: setSettings,
				}}
			>
				{children}
			</OptigrationContext.Provider>
	);
};

// Export withSelect for settings from API.
export default withSelect( ( select ) => {
	return {
		pluginSettings: select('optigration').getSettings(),
	};
} )( OptigrationProvider );
