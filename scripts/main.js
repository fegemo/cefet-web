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
    markdown = require('bespoke-meta-markdown'),
    forms = require('bespoke-forms'),
    backdrop = require('bespoke-backdrop'),
    tutorial = require('./tutorial'),
    caniuseWidget = require('./caniuse');

// Bespoke.js
bespoke.from('article', [
  markdown({
    backdrop: function(slide, value) {
      slide.setAttribute('data-bespoke-backdrop', value);
    }
  }),
  fancy(),
  keys(),
  touch(),
  bullets('li, .bullet, dt:not(.bullet-old), dd:not(.bullet-old)'),
  scale(),
  hash(),
  progress(),
  state(),
  forms(),
  backdrop(),
  tutorial(document.getElementsByClassName('tutorial')[0])
]);


// CSS Specificator Tabajara
var inputEl = document.getElementById('specTabajaraInput'),
    SpecificatorTabajara,
    outputEls,
    buttonEl;

if (inputEl) {
  SpecificatorTabajara = require('./specificity');
  outputEls = [
      document.getElementById('specTabajaraOutputA'),
      document.getElementById('specTabajaraOutputB'),
      document.getElementById('specTabajaraOutputC')
    ];
  buttonEl = document.getElementById('specTabajaraButton');
  new SpecificatorTabajara(
    inputEl,
    outputEls[0],
    outputEls[1],
    outputEls[2],
    buttonEl
  ).start();
}

// Can I Use widget
window.canIUseDataLoaded = caniuseWidget.canIUseDataLoaded;
