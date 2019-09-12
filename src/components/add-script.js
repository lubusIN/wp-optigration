/**
 * WordPress dependencies.
 */
import { useContext, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Modal, TextControl, TextareaControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import { OptigrationContext } from '../data/context';

/**
 * Render Empty Component.
 */
const AddScript = ( { isOpen, setState } ) => {
	// Destructure object.
	const { scripts, setScripts } = useContext( OptigrationContext );

	// Field state.
	const [ name, setName ] = useState();
	const [ script, setScript ] = useState();
	const [ code, setCode ] = useState();

	// Add event.
	const addScript = () => {
		const scriptItem = {
			name,
			script,
			code,
		};

		setScripts(
			[
				...scripts,
				scriptItem,
			]
		);
		setState( { isOpen: false } );
	};

	// Render form.
	return (
		<div>
			<Button
				isPrimary
				isLarge
				onClick={ () => setState( { isOpen: true } ) }>
				{ __( 'Add script', 'optigration' ) }
			</Button>
			{ isOpen && (
				<Modal
					title="Add script"
					className="rounded-lg shadow-2xl"
					onRequestClose={ () => setState( { isOpen: false } ) }>

					<TextControl
						className="mb-6"
						label="Name"
						help="integration service"
						onChange={ ( value ) => setName( value ) }
					/>

					<TextControl
						className="mb-6"
						label="Script (optional)"
						help="url to external script"
						onChange={ ( value ) => setScript( value ) }
					/>

					<TextareaControl
						className="mb-6"
						label="Code"
						help="inline javascript for integration"
						onChange={ ( value ) => setCode( value ) }
					/>

					<div className="flex justify-end bg-gray-200 py-4 px-6 -mx-4 -mb-4">
						<Button isDefault onClick={ () => setState( { isOpen: false } ) }>
					Cancel
						</Button>
						<Button className="ml-4" isPrimary onClick={ () => addScript() }>
					Add
						</Button>
					</div>

				</Modal>
			) }
		</div>
	);
};

export default withState( {
	isOpen: false,
} )( AddScript );
