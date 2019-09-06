/**
 * External dependencies.
 */
import React from "react";

/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

/***
 * Internal dependencies.
 */
import { AddIcon } from './icons';
import { EmptyIllustration } from '../illustrations/empty';

/**
 * Render Empty Component.
 */
const Empty = () => {
	return(
			<Fragment>
				<div className="bg-white border w-2/5 flex flex-col items-center p-12 shadow-lg rounded-lg text-gray-500 relative overflow-hidden"
					style={ { marginTop: '6%' } }
				>
					<h2 class="absolute inset-x-0 top-0 bg-gray-100 p-6 text-lg">
						{ __( 'Integration Scripts', 'optigration' ) }
					</h2>
					<EmptyIllustration className="fill-current w-2/5 mt-16" />
					<h3 className="my-6 text-gray-600 text-base">
						{ __( 'Add your first script for integration. ' ) }
					</h3>
					<button className="bg-blue-500 text-white font-bold rounded px-3 py-2">
						{ __( 'Add script', 'optigration' ) }
					</button>
				</div>
			</Fragment>
	);
};

export default Empty;
