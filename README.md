jquery.reverse-geocode.js
=========================

Populate common location based form fields: country, state, postcode, suburb etc


usage
-----

###Apply to form

Attempt to populate all location based form fields within a form.

    $('form').reverseGeocode();

Fields must have a class of country, state, postcode, suburb...

    <select name="state" class="state">...</state>

###Apply to specific fields

  $('[name=state]').reverseGeocode('state');


configuration
-------------

###Get API

    $('selector').data('api-reverse-geocode');

###Extending reverse geocoding service

There are many reverse geocoding services available, with the default driver being Google Maps.
If you wish to use an alternative service, set the driver using a lambda function that returns
a jqxhr object. 

  $('selector').reverseGeocode.driver = function(){
    ...
  }});


###Langauge

Locality types can be edited to match those returned by the reverse geocoding service of your choice.



license
-------
Copyright (c) 2013 Ben Cooling (http://bcooling.com.au)
Licensed under the MIT License