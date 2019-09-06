/**
 * External dependencies.
 */
import React,{ useContext }  from "react";

/***
 * Internal dependencies.
 */
import { OptigrationContext, OptigrationProvider } from "../data/context";
import ErrorBoundry from './error-boundry';
import PageTitle from './page-title';
import Settings from './settings';
import "@wordpress/components/build-style/style.css";

/**
 * Render Optigration Component.
 */
const Optigration = () => {
	return(
		<ErrorBoundry>
			<OptigrationProvider>
				<PageTitle/>
				<Settings/>
			</OptigrationProvider>
		</ErrorBoundry>
	);
};

export default Optigration;
