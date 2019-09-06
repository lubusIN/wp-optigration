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
import { EmptyIllustration } from '../illustrations/empty';
import AddScript from './add-script';

/**
 * Render Empty Component.
 */
const Empty = () => {
	return(
			<Fragment>
				<div className="bg-white border w-2/5 flex flex-col items-center p-12 shadow-lg rounded-lg text-gray-500 relative overflow-hidden"
					style={ { marginTop: '6%' } }
				>
					<h2 className="absolute inset-x-0 top-0 bg-gray-100 p-6 text-lg">
						{ __( 'Integration Scripts', 'optigration' ) }
					</h2>
					<EmptyIllustration className="fill-current w-2/5 mt-16" />
					<h3 className="my-6 text-gray-600 text-base">
						{ __( 'Add your first script for integration. ' ) }
					</h3>
					<AddScript/>
				</div>
			</Fragment>
	);
};

export default Empty;
