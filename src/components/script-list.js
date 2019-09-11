/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { useContext } from "@wordpress/element";
import { Animate, Button } from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { OptigrationContext } from "../data/context";
import ScriptItem from './script-item';
import AddScript from './add-script';
import SaveSettings from './save-settings';

/**
 * Render PageTitle Component.
 */
const ScriptList = () => {
	const { scripts } = useContext( OptigrationContext );

	return(
			<div className="rounded bg-white flex flex-col w-full border py-8">
				<h2 className="flex content-center text-lg mb-6 px-8">
					{ __( 'Scripts', 'optigration') }
				</h2>

				<div className="flex flex-wrap">
				{
					scripts.map( ( script,  index ) => (
						<Animate key={index} type="slide-in">
							{
								({className}) => (
									<ScriptItem
										className={ className }
										key={index}
										index={index}
										name={script.name}
										script={script.script}
										code={script.code} />
								)
							}
						</Animate>
					) )
				}
				</div>

				<div className="flex justify-end px-8 pt-8 border-t border-solid border-gray-300">
					<SaveSettings/>
					<AddScript/>
				</div>
			</div>
	);
};

export default ScriptList;
