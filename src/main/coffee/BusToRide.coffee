do (global = window, $ = jQuery) ->
  global.app = global.app || {}

  class BusToRide extends Backbone.Model
    @NO_LOCATION = -1

    defaults:
      location: @NO_LOCATION
      hour: -1
      minute: -1

  global.app.BusToRide = BusToRide;

  return
