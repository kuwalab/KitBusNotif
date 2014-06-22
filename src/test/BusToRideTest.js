var chai = require('chai');
var assert = chai.assert;

global.jQuery = require('jquery');
global._ = require('underscore');
global.Backbone = require('backbone');
var app = require("../main/webapp/js/KitBusNotif.min.js").app;
var BusToRide = app.BusToRide;

suite('BusToRideTest', function () {
  'use strict';

  setup(function () {
  });

  test('初期状態のチェック', function() {
    var busToRide = new BusToRide();
    assert.ok(busToRide.has('location'), 'locationが存在する');
    assert.ok(busToRide.has('hour'), 'hourが存在する');
    assert.ok(busToRide.has('minute'), 'minuteが存在する');

    assert.equal(busToRide.get('location'), BusToRide.NO_LOCATION, 'locationが-1');
    assert.equal(busToRide.get('hour'), BusToRide.NO_TIME, 'hourが-1');
    assert.equal(busToRide.get('minute'), BusToRide.NO_TIME, 'minuteが-1');
  });
});
