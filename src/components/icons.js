/**
 * WordPress dependencies.
 */
import { G, Path, SVG } from '@wordpress/components';

/**
 * Icons.
 */

// Plugin Page Icon.
export const PluginIcon = ( { className } ) => {
	return (
		<SVG className={ className } viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<G id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
				<G id="icon-shape">
					<Path d="M10,1 L20,7 L10,13 L0,7 L10,1 Z M16.6666667,11 L20,13 L10,19 L0,13 L3.33333333,11 L10,15 L16.6666667,11 Z" id="Combined-Shape"></Path>
				</G>
			</G>
		</SVG>
	);
};

// Add Icon.
export const AddIcon = ( { className } ) => {
	return (
		<SVG className={ className } viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<G id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
				<G id="icon-shape">
					<Path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="Shape"></Path>
				</G>
			</G>
		</SVG>
	);
};
