let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')

mix.setPublicPath('dist')
   .postCss('../../vendor/laravel/nova/resources/css/app.css', './css/app.css', [
       tailwindcss('../../vendor/laravel/nova/tailwind.js'),
       require('postcss-css-variables')()
   ])
  .babel('../../vendor/laravel/nova/public/manifest.js', './dist/js/manifest.babel.js')
  .babel('../../vendor/laravel/nova/public/vendor.js', './dist/js/vendor.babel.js')
  .babel('../../vendor/laravel/nova/public/app.js', './dist/js/nova.babel.js');
