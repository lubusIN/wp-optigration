/**
 * External dependencies.
 */
import React,{ useContext }  from "react";

/***
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";

/**
 * Render Settings Component.
 */
const Settings = () => {
	const context = useContext( OptigrationContext );
	return(
		<div>
			Settings Panel
			<h2>{ context.settings.options.footer }</h2>
		</div>
	);
};

export default Settings;
