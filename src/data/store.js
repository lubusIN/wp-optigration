/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';

/**
 * Optigration store.
 */
const actions = {
	getSettings( ) {
		return {
			type: 'GET_SETTINGS',
		};
	},
	setSettings( settings ) {
		return {
			type: 'SET_SETTINGS',
			settings,
		};
	},
	fetchFromAPI( path ) {
		return {
			type: 'FETCH_FROM_API',
			path,
		};
	},
};

registerStore( 'optigration', {
	reducer( state = {}, action ) {
		switch ( action.type ) {
			case 'GET_SETTINGS':
				return {
					type: 'GET_SETTINGS',
				};
			case 'SET_SETTINGS':
				return {
					...state,
					settings: action.settings,
				};
		}

		return state;
	},

	initialState: {
		settings: {
			scripts: [],
			footer: 'false',
		},
	},

	actions,

	selectors: {
		getSettings( state ) {
			const { settings } = state;
			return settings;
		},
	},

	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},
	},

	resolvers: {
		* getSettings() {
			const path = '/wp/v2/settings/';
			const settings = yield actions.fetchFromAPI( path );
			return actions.setSettings( JSON.parse( settings.optigration ) );
		},
	},
} );
