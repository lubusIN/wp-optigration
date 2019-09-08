/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";


/**
 * Render PageTitle Component.
 */
const ScriptList = () => {
	return(
			<h1 className="flex content-center">
				{ __( 'Scripts list', 'optigration') }
			</h1>
	);
};

export default ScriptList;
