<?php
/**
 * Uninstall Optigration
 *
 * @author  Ajit Bohra <ajit@lubus.in>
 * @license MIT
 *
 * @see   https://www.lubus.in/
 *
 * @copyright 2019 LUBUS
 * @package   Optigration
 */

// Exit if accessed directly.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

/**
 * Delete options
 */
delete_option( 'optigration' );
