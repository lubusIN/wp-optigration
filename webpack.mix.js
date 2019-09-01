const mix = require('laravel-mix');
require('mix-tailwindcss');
require('laravel-mix-purgecss');

mix.postCss('src/style.css', 'assets')
   .tailwind();

if (mix.inProduction()) {
	mix.purgeCss({
		folders: ['includes'],
	});
}
