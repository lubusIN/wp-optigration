/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Animate, ExternalLink } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { ErrorIllustration } from '../illustrations/error';

/**
 * Render Empty Component.
 */
const Error = () => {
	return (
		<Animate type="slide-in">
			{
				( { className } ) => (
					<div
						className={ classNames( className, 'bg-white w-full md:w-3/5 xl:w-2/5 rounded-lg shadow-lg border border-gray-300 py-12 px-8 flex flex-col items-center mx-auto mt-16' ) }>
						<ErrorIllustration className="w-1/2 mb-4" />
						<h1 className="text-red-600">
							{ __( 'Something went wrong !', 'optigration' ) }
						</h1>
						<span className="text-gray-500">
							{ __( 'Check browser console for details', 'optigration' ) }
						</span>
						<ExternalLink className="flex mt-8" href="https://github.com/lubusIN/wp-optigration/issues">
							{ __( 'Report issue', 'optigration' ) }
						</ExternalLink>
					</div>
				)
			}
		</Animate>
	);
};

export default Error;
