do (global = this, $ = jQuery) ->
  global.app = global.app || {}

  class BusToRide extends Backbone.Model
    @NO_LOCATION = -1
    @NO_TIME = -1

    defaults:
      location: @NO_LOCATION
      hour: @NO_TIME
      minute: @NO_TIME

  global.app.BusToRide = BusToRide;

  return
