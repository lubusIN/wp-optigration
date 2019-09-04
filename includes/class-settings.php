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
 * @package   Munim
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
        // Setup
        add_action( 'admin_enqueue_scripts', [ __CLASS__, 'register_assets' ] );
        add_action( 'admin_menu', [ __CLASS__, 'add_menu'] );
        add_action( 'admin_init', [ __CLASS__, 'register_settings'] );
    }

    /**
	 * Register Scripts.
     *
     * @return void
	 */
	public static function register_assets() {
		// Scripts
		wp_register_script(
			'optigration',
			OPTIGRATION_PLUGIN_URL . 'assets/app.js',
			[],
			filemtime( OPTIGRATION_PLUGIN_DIR . 'assets/app.js' ),
			true
		);
		wp_enqueue_script( 'optigration' );

        // Styles.
		wp_register_style(
			'optigration-style',
			OPTIGRATION_PLUGIN_URL . 'assets/style.css',
			[],
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
            __( 'Optigration' , 'optigration' ),
            __( 'Optigration' , 'optigration' ),
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

    /**
     * Register settings
     *
     * @return void
     */
    public static function register_settings() {
        // Register setting.
        register_setting( 'optigration', 'optigration' );

        // Register section.
        add_settings_section(
            'optigration_section',
            null,
            [ __CLASS__, 'render_section' ],
            'optigration'
        );

        // Register fields.
        // Field: scripts.
        add_settings_field(
            'scripts',
            __( 'Script Integration', 'optigration' ),
            [ __CLASS__, 'render_scripts_field' ],
            'optigration',
            'optigration_section'
        );
    }

    /**
     * Render: setting section.
     *
     * @return void
     */
    public static function render_section() {
        return;
    }

    /**
     * Render: scripts field.
     */
    public static function render_scripts_field() {
        $options = get_option( 'optigration' );
        ?>
        <textarea
            class="w-full"
            name='optigration[scripts]'
            id="optigration_scripts"
            cols="40"
            rows="15"><?php echo esc_attr( $options['scripts'] ); ?></textarea>
        <?php
    }
}
