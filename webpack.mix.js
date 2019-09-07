const mix = require('laravel-mix');
require('mix-tailwindcss');
require('laravel-mix-purgecss');

const externals = {
	'lodash': 'lodash',
	'react': 'React',
	'react-dom': 'ReactDOM',
	'@wordpress/blocks': 'wp.blocks',
	'@wordpress/components': 'wp.components',
	'@wordpress/compose': 'wp.compose',
	'@wordpress/data': 'wp.data',
	'@wordpress/date': 'wp.date',
	'@wordpress/editor': 'wp.editor',
	'@wordpress/element': 'wp.element',
	'@wordpress/hooks': 'wp.hooks',
	'@wordpress/i18n': 'wp.i18n',
	'@wordpress/plugins': 'wp.plugins',
  }

mix.postCss('src/style.css', 'assets')
   .tailwind();

mix.react('src/plugin.js', 'assets');

mix.extract();

mix.disableNotifications();

mix.webpackConfig({
	externals: externals,
})

if (mix.inProduction()) {
	mix.purgeCss({
		folders: ['includes', 'src'],
	});
}
