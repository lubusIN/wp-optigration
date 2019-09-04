/**
 * External dependencies.
 */
import React, { useState, useEffect, createContext } from "react";

/**
 * Context Component.
 */
export const OptigrationContext = createContext();

export function OptigrationProvider({ children }) {
	// Default data for content state.
	const defaultSettings = {
		scripts: [
			{
				name: "Google Anylatics",
				script: "https:/google.com/script.js",
				code: "alert('LUBUS is gone rule !');",
			},
		],
		options: {
			footer: "true",
		}
	}

	// State.
	const [settings, setSettings] = useState( defaultSettings );

	useEffect(() => {
		// Load settings from database
		const newSettings = {
			scripts: [
				{
					name: "Google Anylatics Update",
					script: "https:/google.com/script.js",
					code: "alert('LUBUS is gone rule ! Bravo');",
				},
			],
			options: {
				footer: "false",
			}
		}

		setSettings( newSettings );
	}, []);

	return <OptigrationContext.Provider
				value={{
					settings: settings,
					update: setSettings,
				}}
			>
				{children}
			</OptigrationContext.Provider>;
};
