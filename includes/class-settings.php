<?php
/**
 * Settings
 *
 * @author  Ajit Bohra <ajit@lubus.in>
 * @license MIT
 *
 * @see   https://www.lubus.in
 *
 * @copyright 2019 LUBUS
 * @package   Optigration
 */

namespace LubusIN\Optigration;

/**
 * Munim Settings
 */
class Settings {
	/**
	 * Init  plugin settings.
	 *
	 * @return void
	 */
	public static function init() {
		// Setup.
		add_action( 'admin_enqueue_scripts', [ __CLASS__, 'register_assets' ] );
		add_action( 'admin_menu', [ __CLASS__, 'add_menu' ] );
	}

	/**
	 * Register Scripts.
	 *
	 * @return void
	 */
	public static function register_assets() {
		// Bailout if not on plugin page(s).
		$screen       = get_current_screen();
		$plugin_pages = [ 'settings_page_optigration' ];

		if ( ! in_array( $screen->id, $plugin_pages, true ) ) {
			return;
		}

		// Scripts.
		wp_register_script(
			'optigration-manifest',
			OPTIGRATION_PLUGIN_URL . 'assets/manifest.js',
			[],
			filemtime( OPTIGRATION_PLUGIN_DIR . 'assets/manifest.js' ),
			true
		);
		wp_enqueue_script( 'optigration-manifest' );

		wp_register_script(
			'optigration-vendor',
			OPTIGRATION_PLUGIN_URL . 'assets/vendor.js',
			[ 'optigration-manifest' ],
			filemtime( OPTIGRATION_PLUGIN_DIR . 'assets/vendor.js' ),
			true
		);
		wp_enqueue_script( 'optigration-vendor' );

		wp_register_script(
			'optigration',
			OPTIGRATION_PLUGIN_URL . 'assets/plugin.js',
			[
				'optigration-vendor',
				'wp-element',
				'wp-i18n',
				'wp-compose',
				'wp-components',
				'wp-data',
				'wp-api-fetch',
			],
			filemtime( OPTIGRATION_PLUGIN_DIR . 'assets/plugin.js' ),
			true
		);
		wp_enqueue_script( 'optigration' );

		// Styles.
		wp_register_style(
			'optigration-style',
			OPTIGRATION_PLUGIN_URL . 'assets/style.css',
			[ 'wp-components' ],
			filemtime( OPTIGRATION_PLUGIN_DIR . 'assets/style.css' )
		);
		wp_enqueue_style( 'optigration-style' );
	}

	/**
	 * Add settings menu to WP settings.
	 *
	 * @return void
	 */
	public static function add_menu() {
		add_submenu_page(
			'options-general.php',
			__( 'Optigration', 'optigration' ),
			__( 'Optigration', 'optigration' ),
			'manage_options',
			'optigration',
			[ __CLASS__, 'render_page' ]
		);
	}

	/**
	 * Render settings page
	 *
	 * @return void
	 */
	public static function render_page() {
		require_once 'views/settings.php';
	}
}
