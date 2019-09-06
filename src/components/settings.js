/**
 * External dependencies.
 */
import React,{ useContext }  from "react";

/**
 * WordPress dependencies.
 */
import { Fragment } from "@wordpress/element";

/***
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";
import Empty from "./empty";

/**
 * Render Settings Component.
 */
const Settings = () => {
	const context = useContext( OptigrationContext );
	return(
		<Fragment>
			<div className="flex justify-center">
				<Empty  />
			</div>
		</Fragment>
	);
};

export default Settings;
