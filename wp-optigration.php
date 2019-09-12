<?php
/**
 * Plugin Name: Optigration - Optimized Integration
 * Plugin URI: https://www.lubus.in
 * Description: 3rd party script integration.
 * Author: lubus
 * Author URI: https://www.lubus.in
 * Version: 0.1.0
 * Text Domain: optigration
 * Domain Path: /languages
 * Tags: invoice, invoicing,
 * Requires at least: 3.0.1
 * Tested up to:  5.0.3
 * Stable tag: 0.1.0
 * License: GPL2
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package optigration
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Setup Constants
 */
// Plugin version.
if ( ! defined( 'OPTIGRATION_VERSION' ) ) {
	define( 'OPTIGRATION_VERSION', '0.1.0' );
}
// Plugin Root File.
if ( ! defined( 'OPTIGRATION_PLUGIN_FILE' ) ) {
	define( 'OPTIGRATION_PLUGIN_FILE', __FILE__ );
}
// Plugin Folder Path.
if ( ! defined( 'OPTIGRATION_PLUGIN_DIR' ) ) {
	define( 'OPTIGRATION_PLUGIN_DIR', plugin_dir_path( OPTIGRATION_PLUGIN_FILE ) );
}
// Plugin Folder URL.
if ( ! defined( 'OPTIGRATION_PLUGIN_URL' ) ) {
	define( 'OPTIGRATION_PLUGIN_URL', plugin_dir_url( OPTIGRATION_PLUGIN_FILE ) );
}
// Plugin Basename aka: "optigration/optigration.php".
if ( ! defined( 'OPTIGRATION_PLUGIN_BASENAME' ) ) {
	define( 'OPTIGRATION_PLUGIN_BASENAME', plugin_basename( OPTIGRATION_PLUGIN_FILE ) );
}

// Autoloader.
require_once 'vendor/autoload.php';

// Bootstrap Optigration.
use LubusIN\Optigration\Optigration;

/**
 * Main instance of Optigration.
 *
 * Returns the main instance of Optigration to prevent the need to use globals.
 *
 * @since  0.1.0
 * @return Optigration
 */
function optigration() {
	return Optigration::get_instance();
}

optigration();
