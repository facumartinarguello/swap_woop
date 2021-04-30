let mix = require('laravel-mix');

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});

//Frontend
mix
    .sass('resources/scss/style.scss', '../public/static/css/appv4.css')
    //.styles(['resources/vendor/jquery-ui/jquery-ui.min.css', 'resources/vendor/jquery-ui/jquery-ui.theme.min.css'], 'assets/css/vendor.css')
    .scripts([
        'node_modules/jquery/dist/jquery.js',
    ], '../public/static/js/vendors.js')
    .babel([
        'resources/js/navigation.js', 'resources/js/index.js'], '../public/static/js/app.js')
    .options({
        processCssUrls: false
    });
