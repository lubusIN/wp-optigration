/**
 * External dependencies.
 */
import { filter } from 'lodash';
import classNames from 'classnames';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useContext, useState } from '@wordpress/element';
import { Icon, Button, TextControl, TextareaControl } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { OptigrationContext } from '../data/context';

/**
 * Render Script Item Component.
 */
const ScriptItem = ( { className, index, name, script, code } ) => {
	const { scripts, setScripts } = useContext( OptigrationContext );

	// Fields state.
	const [ scriptName, setName ] = useState( name );
	const [ scriptUrl, setScript ] = useState( script );
	const [ scriptCode, setCode ] = useState( code );

	// Update script
	const updateScript = ( key, value ) => {
		const updatedScripts = scripts;
		updatedScripts[ index ][ key ] = value;
		setScripts( updatedScripts );
	};

	// Remove event.
	const removeScript = () => {
		const updatedScripts = filter( scripts, ( scriptItem, i ) => index !== i );
		setScripts( updatedScripts );
	};

	return (
		<div className={ classNames( className, 'w-full pb-6 mb-8 px-8 pt-8 odd:bg-gray-100' ) }>
			<div className="flex">
				<TextControl
					className="mb-6 w-1/4 mr-4"
					label="Name"
					help="integration service"
					value={ scriptName }
					onChange={ ( value ) => {
						setName( value ); updateScript( 'name', value );
					} }
				/>

				<TextControl
					className="mb-6 w-3/4"
					label="Script (optional)"
					help="url to external script"
					value={ scriptUrl }
					onChange={ ( value ) => {
						setScript( value ); updateScript( 'script', value );
					} }
				/>
			</div>

			<TextareaControl
				className="mb-6"
				label="Code"
				help="inline javascript for integration"
				value={ scriptCode }
				onChange={ ( value ) => {
					setCode( value ); updateScript( 'code', value );
				} }
			/>
			<Button
				isLink
				isDestructive
				className="float-right"
				onClick={ () => removeScript() }>
				<Icon icon="trash" />{ __( 'Remove script', 'optigration' ) }
			</Button>

		</div>
	);
};

export default ScriptItem;
