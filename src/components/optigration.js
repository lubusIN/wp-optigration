/**
 * External dependencies.
 */
import React,{ useContext }  from "react";

/***
 * Internal dependencies.
 */
import { OptigrationContext, OptigrationProvider } from "../data/context";

/**
 * Render Optigration Component.
 */
const Optigration = () => {
	const context = useContext( OptigrationContext );
	return(
		<OptigrationProvider>
			<h1>yes</h1>
		</OptigrationProvider>
	);
};

export default Optigration;
