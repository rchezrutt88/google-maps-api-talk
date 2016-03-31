# Getting Started with the Google Maps API

## First Things First

Before we can start playing around with the Google Maps API, we must complete two important steps: Register with the Google API manager and install the google-maps npm module.

Registering with the Google API manager is [easy](https://developers.google.com/maps/documentation/javascript/) and you will need to do it to obtain an API key that permits the use all of Google Maps' most interesting features. Go ahead and create a new project and then generate a new browser key in your Google APIs console.

Now let's install the [google-maps npm module](https://www.npmjs.com/package/google-maps) into our new project by running ```npm install google-maps --save-dev``` inside our project directory. This is not strictly necessary, but it will make our lives easier by creating a nice, friendly wrapper around the Google Maps API to handle asyncronous calls, and it jibes well with the patterns we've been using in WDI.

## Initialize a Map

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
...declare a variable to store your impending map object:
```
let myMap;
```
...and finally create a div to hold your map and give it a reasonable size:
```
//index.html
<div id="map"></div>

//index.scss
#map {
  height: 400px;
  width: 600px;
}
```
Now you're ready to tell your loader you're prepared for it to initialize a map. Do it like this:

```
GoogleMapsLoader.load(function(google) {
    myMap = new google.maps.Map($("#map")[0], {
      center: {
        lat: 42.349239,
        lng: -71.050045
      },
      zoom: 15,
    });
  });
```

(This pattern should look vaguely familiar--yes, that's a callback! It's essentially making an asyncronous request to Google for the latest, most up-to-date version of their map class.)

Now open your page...

Your first embedded map!

## Okay, now what?

You've got your map. Now let's do something with it.

One of the most common actions you'll likely perform with an embedded map objects is displaying and retreiving locations. If you're developing a website for a restaurant chain, you may wish to have your map display all the locations, or say you're developing an app where users can mark their favorite restaurants.


## Hard Setting Markers

Let's start with the first example and configure our map to display a marker on the Atlantic Wharf Boloco when it loads.

```
//create a new latlng literal. See google latlng object docs:
let bolocoLatLng = {lat: 42.353439, lng: -71.052872};
//create a new marker object
let myFavoriteLunchSpot = new google.maps.Marker({
    position: bolocoLatLng,
    map: myMap, //add it to your myMap
    title: 'My Favorite Lunch Spot!'
  });
  myMap.setCenter(bolocoLatLng); //center map on boloco!
```

Now when we load our map it's centered on Boloco and there's a default marker.

What if you don't want a default marker? What if you want, say, a cute burrito icon instead? Well, [that's easy to do, too](https://developers.google.com/maps/documentation/javascript/markers#icons)...but I'll leave that to you.

## Events

Now suppose my favorite restaurant weren't Boloco but Sweet Green and I wanted to mark it on the map.

To do this, we're going to need to set up a custom click listener and handler:

```
let setMyFavoriteLunchSpot = function(e) {
  myFavoriteLunchSpot = new google.maps.Marker({
    position: e.latLng,
    map: myMap,
  });
  myMap.panTo(myFavoriteLunchSpot.position)

};

myMap.addListener('click', setMyFavoriteLunchSpot);

});
```

## Geecoding

But what if the user doesn't _know_ the exact location of their favorite lunch spot? Suppose, for instance, that our app took a string containing a general address (but not coordinates) of the lunch spot and we wanted to mark it on the map?

For this operation we'd need something called geocoding. We do it every time we enter an address into Google Maps. In fact, it's now so routine that we forget what a remarkable piece of magic this is: Google Maps needs to parse our string and then compare it against a database of all the world's addresses and find the closest match.

But thankfully we don't need to worry about all that. We can simply initialize a new Geocoder object and start feeding it sloppy, aribitrarily formatted addresses and rejoice as it returns nice, clean coordinates.

Let's do it now:
```
let geocoder = new google.maps.Geocoder();

let getCoordinates = function
```


## The Geometry Library

Interesting functions for calculating distance, etc.

https://developers.google.com/maps/documentation/javascript/geometry#Distance



Grabbing the coordinates of a click is as simple as retrieving the latLng property from the event!

1. We are indeed in a "common js" environment and cannot call the loader off the window object so this step is necessary, correct?
