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


license
-------
Copyright (c) 2013 Ben Cooling (http://bcooling.com.au)
Licensed under the MIT License