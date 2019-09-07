/**
 * WordPress dependencies.
 */
import { useContext } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Button, Modal, TextControl, TextareaControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";

/**
 * Render Empty Component.
 */
const AddScript = withState( {
    isOpen: false,
} )( ( { isOpen, setState } ) => {
	const context = useContext( OptigrationContext );

	return(
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
					required
					className="mb-6"
					label="Name"
					help="integration service"
				/>

				<TextControl
					required
					className="mb-6"
					label="Script (optional)"
					help="url to external script"
				/>

				<TextareaControl
					className="mb-6"
					label="Code"
					help="inline javascript for integration"
				/>

				<div className="flex justify-end bg-gray-200 py-4 px-6 -mx-4 -mb-4">
					<Button isDefault onClick={ () => setState( { isOpen: false } ) }>
					Cancel
					</Button>
					<Button className="ml-4" isPrimary onClick={ () => context.update( { } ) }>
					Add
					</Button>
				</div>

            </Modal>
        ) }
    </div>
) } );

export default AddScript;
