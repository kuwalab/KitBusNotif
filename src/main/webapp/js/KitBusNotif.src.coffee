do (global = this, $ = jQuery) ->
  global.app = global.app || {}
  global.app.model = global.app.model || {}

  class BusToRide extends Backbone.Model
    @NO_LOCATION = -1
    @NO_TIME = -1

    @LOC_1 = 0
    @LOC_74 = 1
    @LOC_61 = 2
    @LOC_65 = 3

    defaults:
      location: @NO_LOCATION
      hour: @NO_TIME
      minute: @NO_TIME

    setBus: (loc, hour, minute) ->
      @set('location', loc)
      @set('hour', hour)
      @set('minute', minute)
      return

    getViewTime: ->
      hour = @get 'hour'
      minute = @get 'minute'
      if hour is BusToRide.NO_TIME or minute is BusToRide.NO_TIME
        return '選択してください'
      hour + ':' + minute

  global.app.model.BusToRide = BusToRide
  global.app.model.busToRide = new BusToRide()

  return

do (global = this, $ = jQuery) ->
  global.app = global.app || {}
  global.app.view = global.app.view || {}

  global.JST = global.JST || {}
  global.JST['app.tmpl.BusToRide'] = _.template(
    """
    <span><%- getViewTime() %>:</span>
    """
  )

  class BusToRideView extends Backbone.View
    render: ->
      @$el.html(global.JST['app.tmpl.BusToRide'](@model))
      return @

  global.app.view.BusToRideView = BusToRideView

  return
