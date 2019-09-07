/**
 * WordPress dependencies.
 */
import { Fragment } from "@wordpress/element";

/***
 * Internal dependencies.
 */
import Empty from "./empty";

/**
 * Render Settings Component.
 */
const Settings = () => {
	return(
		<Fragment>
			<div className="flex justify-center">
				<Empty  />
			</div>
		</Fragment>
	);
};

export default Settings;
