/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { useContext } from "@wordpress/element";

/**
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";
import ScriptItem from './script-item';
import AddScript from './add-script';

/**
 * Render PageTitle Component.
 */
const ScriptList = () => {
	const { settings } = useContext( OptigrationContext );

	return(
			<div className="bg-white flex flex-col w-full border p-8">
				<h2 className="flex content-center text-lg mb-6">
					{ __( 'Scripts', 'optigration') }
				</h2>

				<div className="flex flex-wrap">
				{
					settings.scripts.map( ( script,  index ) => (
						<ScriptItem key={index} index={index} name={script.name} script={script.script} code={script.code} />
					) )
				}
				</div>

				<div className="flex justify-end">
					<AddScript/>
				</div>
			</div>
	);
};

export default ScriptList;
