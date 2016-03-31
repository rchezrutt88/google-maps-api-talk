'use strict';

let GoogleMapsLoader = require('google-maps');
let map;
let geocoder;

GoogleMapsLoader.KEY = "AIzaSyDMMiHmMwFo1EMCre5VLXU-YhgnFdlkJEI";

GoogleMapsLoader.load(function(google) {
  map = new google.maps.Map($("#map")[0], {
    center: {
      lat: 42.349239,
      lng: -71.050045
    },
    zoom: 16,
  });
  geocoder = new google.maps.Geocoder();
});

$(function() {



});
