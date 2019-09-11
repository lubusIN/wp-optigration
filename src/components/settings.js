/**
 * External dependencies.
 */
import { isEmpty } from "lodash";

/**
 * WordPress dependencies.
 */
import { Fragment, useContext } from "@wordpress/element";
import { Animate } from "@wordpress/components";

/***
 * Internal dependencies.
 */
import Loading from "./loading";
import Empty from "./empty";
import ScriptList from "./script-list";
import { OptigrationContext } from "../data/context";

/**
 * Render Settings Component.
 */
const Settings = () => {
	const {loading, scripts}= useContext( OptigrationContext );

	return(
		<Fragment>
			<div className="flex justify-center">
				<Animate type="slide-in">
					{
						( {className} ) => (
							loading ?
							<Loading />:
							isEmpty( scripts ) ?
								<Empty className={ className } /> :
								<ScriptList />
						)
					}
				</Animate>
			</div>
		</Fragment>
	);
};

export default Settings;
