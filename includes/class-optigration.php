<?php
/**
 * Optigration
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
 * Bootstrap plugin
 */
final class Optigration {

	/**
	 * Instance.
	 *
	 * @since
	 *
	 * @var Optigration
	 */
	private static $instance;

	/**
	 * Singleton pattern.
	 *
	 * @since
	 */
	private function __construct() {
		$this->init_hooks();
	}

	/**
	 * Get instance.
	 *
	 * @since
	 *
	 * @return Optigration
	 */
	public static function get_instance() {
		if ( null === static::$instance ) {
			self::$instance = new static();
		}

		return self::$instance;
	}

	/**
	 * Hook into actions and filters.
	 *
	 * @since  1.0.0
	 */
	private function init_hooks() {
		// Set up init Hook.
		add_action( 'rest_api_init', [ __CLASS__, 'register_settings'] );

        // Modules.
        if( is_admin() ) {
            Settings::init();
        }
	}

	/**
	 * Throw error on object clone.
	 *
	 * The whole idea of the singleton design pattern is that there is a single
	 * object, therefore we don't want the object to be cloned.
	 *
	 * @since  1.0
	 */
	public function __clone() {
		// Cloning instances of the class is forbidden.
		optigration_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'optigration' ), '1.0' );
	}

	/**
	 * Disable unserializing of the class.
	 *
	 * @since  1.0
	 */
	public function __wakeup() {
		// Unserializing instances of the class is forbidden.
		optigration_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'optigration' ), '1.0' );
	}

	/**
     * Register settings
     *
     * @return void
     */
    public static function register_settings() {
        // Register setting.
        register_setting(
			'optigration',
			'optigration',
			[
				'type'              => 'string',
				'show_in_rest'      => true,
				'sanitize_callback' => 'sanitize_text_field',
			]
		);
    }
}
