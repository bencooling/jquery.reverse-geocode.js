/*! Copyright (c) 2014 Ben Cooling (http://bcooling.com.au)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 0.1
 *
 * Requires:
 * jQuery
 * google-maps-v3 (https://maps.googleapis.com/maps/api/js?sensor=true)
 * 
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'google-maps-v3'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

  $.fn.reverseGeocode = function(type)
  {

    var geocoder = new google.maps.Geocoder();

     // requires navigator enabled browsers
    if(!navigator.geolocation) 
      return;

    navigator.geolocation.getCurrentPosition(function(pos) {
      
      var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
      
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        
        var result = results[0]
            ,city
            ,state
            ,component
            ;

        if (status == google.maps.GeocoderStatus.OK) {
          
          for(var i=0, len=result.address_components.length; i<len; i++) {
            var component = result.address_components[i];
            if(component.types.indexOf("locality") >= 0) 
              city = component.long_name;
            if(component.types.indexOf("administrative_area_level_1") >= 0) 
              state = component.long_name;
          }

        }

      });
        
    }

}));

https://maps.googleapis.com/maps/api/js?sensor=true

