/**
 * External dependencies.
 */
import { isEmpty } from "lodash";

/**
 * WordPress dependencies.
 */
import { Fragment, useContext } from "@wordpress/element";

/***
 * Internal dependencies.
 */
import Empty from "./empty";
import ScriptList from "./script-list";
import { OptigrationContext } from "../data/context";

/**
 * Render Settings Component.
 */
const Settings = () => {
	const context= useContext( OptigrationContext );

	return(
		<Fragment>
			<div className="flex justify-center">
				{
					isEmpty( context.settings.scripts ) ?  <Empty  /> : <ScriptList/> }
			</div>
		</Fragment>
	);
};

export default Settings;
