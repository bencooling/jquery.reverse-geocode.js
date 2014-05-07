/*! Copyright (c) 2014 Ben Cooling (http://bcooling.com.au)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 0.1
 *
 * Requires:
 * jQuery
 * google-maps-v3 (https://maps.googleapis.com/maps/api/js?sensor=true)
 * 
 * Usage:
 * // Set options to override default options
 * $('form').reverseGeocode();
 * 
 * 
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

  $.fn.reverseGeocode = function(options)
  {

    var $form    = $(this),
        defaults = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
        settings;

    settings = $.extend(defaults, options);

     // requires navigator enabled browsers
    if(!navigator.geolocation) 
      return;

    navigator.geolocation.getCurrentPosition(success, error, options);

    function success(pos) {
      
      var geocoder = new google.maps.Geocoder(),
          latlng   = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

      geocoder.geocode({'latLng': latlng}, function(results, status) {
        
        var result     = results[0]
            components = result.address_components;

        if (status !== google.maps.GeocoderStatus.OK)
          return; // TODO: Report error
        
        $('[data-component]', $form).each(function(){
          var $field = $(this),
              type   = $field.data('component'),
              format = ($field.data('format')) ? $field.data('format') : 'long_name' ,
              component;

          for(var i=0, l=components.length; i<l; i++) {
            component = components[i];
            if(component.types.indexOf(type) >= 0)
              $field.val(component[format]);
          }

        });

      });

    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

  }

}));