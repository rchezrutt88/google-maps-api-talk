# Getting Started with the Google Maps API

## First Things First

Before we can start playing around with the Google Maps API, we must complete two important steps: Register with the Google API manager and install the google-maps npm module.

Registering with the Google API manager is [easy](https://developers.google.com/maps/documentation/javascript/) and you will need to do it to obtain an API key that permits the use all of Google Maps' most interesting features. Go ahead and create a new project and then generate a new browser key in your Google APIs console.

Now let's install the [google-maps npm module](https://www.npmjs.com/package/google-maps) into our new project by running ```npm install google-maps --save-dev``` inside our project directory. This is not strictly necessary, but it will make our lives easier by creating a nice, friendly wrapper around the Google Maps API to handle asyncronous calls, and it jibes well with the patterns we've been using in WDI.

## Initialize A Map

Time to create our first map...but first just a tiny bit more setting up.

Go ahead and require the google-maps module and save it to a variable<sup>1</sup>:
```
'use strict';

let GoogleMapsLoader = require('google-maps');
```

...load your API key into your loader:
```
GoogleMapsLoader.KEY = <your-key>;
```
...then finally declare a variable to store your impending map object:
```
let myMap;
```
Now you're ready to tell your loader you're reader for it to initialize a map. Do it like this:

```
GoogleMapsLoader.load(function(google) {
    map = new google.maps.Map($("#map")[0], {
      center: {
        lat: 42.349239,
        lng: -71.050045
      },
      zoom: 15,
    });
    geocoder = new google.maps.Geocoder();
  });
```
1. We are indeed in a "common js" environment and cannot call the loader off the window object so this step is necessary, correct?
