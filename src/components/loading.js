/**
 * External dependencies.
 */
import classNames from "classnames";

/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { Animate } from "@wordpress/components";

/**
 * Internal dependencies.
 */
import LoadingIllustration from '../illustrations/loading';

/**
 * Render Empty Component.
 */
const Loading = () => {
	return(
		<Animate type="slide-in">
			{
				( {className} ) => (
					<div
						className={ classNames( className, "bg-white w-full md:w-3/5 xl:w-2/5 rounded-lg shadow-lg border border-gray-300 py-12 px-8 flex flex-col items-center mx-auto mt-16" ) }>
						<LoadingIllustration className="w-1/2 mb-4" />
						<h1 className="text-blue-600">
							Loading ...
						</h1>
						<span className="text-gray-500">
							{ __( 'Sit tight while we load your scripts' ) }
						</span>
					</div>
				)
			}
		</Animate>
	);
};

export default Loading;
