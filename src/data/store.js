/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { registerStore } from "@wordpress/data";

/**
 * Optigration store.
 */
const DEFAULT_STATE = {
    settings: {
		scripts: [],
		footer: 'false'
	},
};

const actions = {
    setSettings( settings ) {
        return {
            type: 'SET_SETTINGS',
            settings
        };
	},

	getSettings( path ) {
		return {
			type: 'GET_SETTINGS',
			path,
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
    reducer( state = DEFAULT_STATE, action ) {
        switch ( action.type ) {
            case 'SET_SETTINGS':
                return {
                    ...state,
                    settings: action.settings,
				};
			case 'GET_SETTINGS':
				return action.settings;
		}

        return state;
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
