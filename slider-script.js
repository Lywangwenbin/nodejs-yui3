#!/usr/bin/env node
var sys = require('sys');

var YUI = require("./lib/node-yui3").YUI;

// TODO: This should pass, but currently doesn't.
// This will work for YUI core, but any submodules are in different files
// This will work better once the 3.1.0 version of YUI is available
// And you can combo handle all the submodules into one request.


//require("assert").equal( global.YUI, undefined, "global yui created");


//Now use non-DOM related YUI utilities
YUI({
    //Only set these if you want to load locally
    loaderPath: 'loader/loader-debug.js',
    base: './yui3/build/',
    filter: 'debug',
    logExclude: {
        'attribute': true,
        'base': true,
        'get': true,
        'loader': true,
        'yui': true,
        'widget': true,
        'event': true
    },
    debug: true
}).use('event', 'node-base', 'slider', function(Y) {

    Y.log('JSDom testing..');
    //sys.puts('Inside1: ' + sys.inspect(process.memoryUsage()));

    var div = document.createElement('div');
    div.id = 'demo';
    document.body.appendChild(div);
    
    Y.log('Creating the Slider from script..');
    // Default everything
    var slider = new Y.Slider();
    Y.log('Rendering..');
    slider.render("#demo");

    Y.log('Done..');
    Y.log(div.outerHTML, 'HTML');

});
