/**
 * External dependencies.
 */
import React from "react";

/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";

/***
 * Internal dependencies.
 */
import { PluginIcon } from './icons';

/**
 * Render PageTitle Component.
 */
const PageTitle = () => {
	return(
			<h1 className="flex content-center">
				<PluginIcon className="w-8 fill-current mr-2"/>
				{ __( 'Optigration', 'optigration') }
			</h1>
	);
};

export default PageTitle;
