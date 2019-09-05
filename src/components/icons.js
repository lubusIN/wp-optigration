/**
 * External dependencies.
 */
import React from "react";

/**
 * WordPress dependencies.
 */
 import { G, Path, SVG } from '@wordpress/components';

/**
 * Icons.
 */

export const PluginIcon = ( { className } ) => {
	return(
		<SVG className={ className } viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<G id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
				<G id="icon-shape">
					<Path d="M10,1 L20,7 L10,13 L0,7 L10,1 Z M16.6666667,11 L20,13 L10,19 L0,13 L3.33333333,11 L10,15 L16.6666667,11 Z" id="Combined-Shape"></Path>
				</G>
			</G>
		</SVG>
	);
};
