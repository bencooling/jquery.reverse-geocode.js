require.config({
  paths: {
    'jquery'                 : 'vendor/jquery/dist/jquery',
    'async'                  : 'vendor/requirejs-plugins/src/async',
    'jquery.reverse-geocode' : 'jquery.reverse-geocode'
  }
});

define(['jquery', 'jquery.reverse-geocode', 'async!http://maps.google.com/maps/api/js?sensor=false'], function() {
  $('form').reverseGeocode();
});