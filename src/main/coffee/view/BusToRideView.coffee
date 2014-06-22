do (global = this, $ = jQuery) ->
  global.app = global.app || {}
  global.app.view = global.app.view || {}

  global.JST = global.JST || {}
  global.JST['app.tmpl.BusToRide'] = _.template(
    """
    <span><%- dispHour >:<%- dispMinute ></span>
    """
  )

  class BusToRideView extends Backbone.View
    render: ->
      @$el.html(global.JST['app.tmpl.BusToRide'](@model))
      return @

  global.app.view.BusToRideView = BusToRideView

  return
