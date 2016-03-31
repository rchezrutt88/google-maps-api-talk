# Getting Started with the Google Maps API

## First Things First

Before we can start playing around with the Google Maps API, we must complete two important steps: Register with the Google API manager and install the google-maps npm module.

Registering with the Google API manager is [easy](https://developers.google.com/maps/documentation/javascript/) and you will need to do it to obtain an API key that permits the use all of Google Maps' most interesting features. Go ahead and create a new project and then generate a new browser key in your Google APIs console.

Now let's install the [google-maps npm module](https://www.npmjs.com/package/google-maps) into our new project by running ```npm install google-maps``` inside our project directory. This is not strictly necessary, but it will make our lives easier by creating a nice, friendly wrapper around the Google Maps API to handle asyncronous calls, and it jibes well with web-pack/node pattern we've been using in WDI.
