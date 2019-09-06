const mix = require('laravel-mix');
require('mix-tailwindcss');
require('laravel-mix-purgecss');

mix.postCss('src/style.css', 'assets')
   .tailwind();

mix.react('src/app.js', 'assets');

mix.extract();

mix.disableNotifications();

if (mix.inProduction()) {
	mix.purgeCss({
		folders: ['includes', 'src'],
	});
}
