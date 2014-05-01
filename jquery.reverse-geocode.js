/*! Copyright (c) 2014 Ben Cooling (http://bcooling.com.au)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 0.1
 *
 * Requires: jQuery
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

  $.fn.reverseGeocode = function(settings)
  {
    // plugin here


    settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
  }

  $.fn.reverseGeocode.defaults = {

  }

}));