/**
 * External dependencies.
 */
import { filter } from 'lodash';
import classNames from "classnames";

/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { useContext, useState } from "@wordpress/element";
import { Icon, Button, TextControl, TextareaControl } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";

/**
 * Render Script Item Component.
 */
const ScriptItem = ( { className, index, name, script, code } ) => {
	const { settings, updateSettings } = useContext( OptigrationContext );
	const scripts = settings.scripts;

	// Fields state.
	const [scriptName, setName] = useState( name );
	const [scriptUrl, setScript] = useState( script );
	const [scriptCode, setCode] = useState( code );

	// Update script
	const updateScript = ( key, value ) => {
		scripts[index][key] = value;
		updateSettings( (state) => (
			{
				...state,
				scripts
			} ) );
	  };

	// Remove event.
	const removeScript = () => {
		const updatedScripts = filter(scripts, (script, i) => index !== i);
		updateSettings( (state) => (
			{
				...state,
				scripts: updatedScripts
			} ) );
	};

	return(
			<div className={classNames( className, "w-full pb-6 mb-8 border-b border-solid border-gray-300" )}>
				<div className="flex">
					<TextControl
						className="mb-6 w-1/4 mr-4"
						label="Name"
						help="integration service"
						value={ scriptName }
						onChange ={ (name) => {setName( name ); updateScript( 'name', name );} }
					/>

					<TextControl
						className="mb-6 w-3/4"
						label="Script (optional)"
						help="url to external script"
						value={ scriptUrl }
						onChange ={ (script) => {setScript( script ); updateScript( 'script', script );} }
					/>
				</div>

				<TextareaControl
					className="mb-6"
					label="Code"
					help="inline javascript for integration"
					value={ scriptCode }
					onChange ={ (code) => {setCode( code ); updateScript( 'code', code );} }
				/>
				<Button
					isLink
					isDestructive
					className="float-right"
					onClick={ () => removeScript() }>
					<Icon icon="trash"/>{ __( 'Remove script', 'optigration' )  }
				</Button>

			</div>
	);
};

export default ScriptItem;
