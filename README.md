jquery.reverse-geocode.js
=========================

Populate common location based form fields: country, state, postcode, suburb etc


usage
-----

###Markup

    Add data attributes to form field

    <input id="suburb" type="text" name="suburb" data-component="locality" data-format="long_name" />

###Apply to form

    $('form').reverseGeocode();

bower
-----

The provided example uses requirejs.
Best to manage dependencies via Bower.

    npm install -g bower

    bower install


testing locally
---------------

Chrome/Opera wont allow geolocation from file://, so need to serve it from a HTTP server

  npm install -g simple-http-server

  nserver

license
-------
Copyright (c) 2013 Ben Cooling (http://bcooling.com.au)
Licensed under the MIT License