'use strict';

let GoogleMapsLoader = require('google-maps');
let myMap;
let geocoder;

GoogleMapsLoader.KEY = "AIzaSyDMMiHmMwFo1EMCre5VLXU-YhgnFdlkJEI";

$(function() {

  GoogleMapsLoader.load(function(google) {
    myMap = new google.maps.Map($("#map")[0], {
      center: {
        lat: 42.349239,
        lng: -71.050045
      },
      zoom: 16,
    });

    let boloco = {
      lat: 42.353439,
      lng: -71.052872
    };

    let myFavoriteLunchSpot = new google.maps.Marker({
      position: boloco,
      map: myMap,
      title: 'My Favorite Lunch Spot'
    });

    myMap.setCenter(myFavoriteLunchSpot.position);

    let setMyFavoriteLunchSpot = function(e) {
      myFavoriteLunchSpot = new google.maps.Marker({
        position: e.latLng,
        map: myMap,
      });
      myMap.panTo(myFavoriteLunchSpot.position)

      console.log(myFavoriteLunchSpot);
    };

    myMap.addListener('click', setMyFavoriteLunchSpot);


  });


});
