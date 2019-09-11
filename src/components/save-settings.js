/**
 * WordPress dependencies.
 */
import { useContext, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Button } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";

/**
 * Render Empty Component.
 */
const SaveSettings = () => {
	// Destructure object.
	const { saveSettings } = useContext( OptigrationContext );

	// State.
	const [ saving, setSaving ] = useState( false );

	// Save event.
	const update = async () => {
		setSaving( true );
		saveSettings();
		setSaving( false );
	};

	// Render form.
	return(
		<Button
			isDefault
			isLarge
			isBusy={ saving }
			aria-disabled={ saving }
			className="mr-4"
			onClick={ saving ? undefined : update }>
			{ __( 'Update', 'optigration' ) }
		</Button>
	) };

export default SaveSettings;
