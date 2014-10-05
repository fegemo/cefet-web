// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
    fancy = require('bespoke-theme-fancy'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    state = require('bespoke-state'),
    markdown = require('bespoke-markdown'),
    tutorial = require('./tutorial');

// Bespoke.js
bespoke.from('article', [
  markdown(),
  fancy(),
  keys(),
  touch(),
  bullets('li, .bullet, dt:not(.bullet-old), dd:not(.bullet-old)'),
  //scale(),
  hash(),
  progress(),
  state(),
  tutorial(document.getElementsByClassName('tutorial')[0])
]);
