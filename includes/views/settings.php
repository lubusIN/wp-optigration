<?php
/**
 * Settings View.
 *
 * @author  Ajit Bohra <ajit@lubus.in>
 * @license MIT
 *
 * @see   https://www.lubus.in
 *
 * @copyright 2019 LUBUS
 * @package   optigration
 */

?>
<div class="wrap">
    <?php if ( get_admin_page_title() ) : ?>
		<h2 class="flex items-center" style="margin-bottom: 0">
			<svg class="fill-current w-6 h-6 mr-2" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
					<g id="icon-shape">
						<path d="M10,1 L20,7 L10,13 L0,7 L10,1 Z M16.6666667,11 L20,13 L10,19 L0,13 L3.33333333,11 L10,15 L16.6666667,11 Z" id="Combined-Shape"></path>
					</g>
				</g>
			</svg>
			<?php echo wp_kses_post( get_admin_page_title() ); ?>
		</h2>
	<?php endif; ?>

	<form action='options.php' method='post'>
		<?php
			settings_fields( 'optigration' );
			do_settings_sections( 'optigration' );
			submit_button();
		?>
	</form>
</div>