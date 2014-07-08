do (global = this, $ = jQuery) ->
  'use strict'

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
      untilMinute: @NO_TIME

    setBus: (loc, hour, minute) ->
      @set('location', loc)
      @set('hour', hour)
      @set('minute', minute)
      return

    updateUntilMinute: (now) ->
      nowHour = now.getHours()
      nowMinute = now.getMinutes()

      hour = @get('hour')
      minute = @get('minute')

      if nowHour > hour or (nowHour is hour and nowMinute > minute)
        @set('untilMinute', BusToRide.NO_TIME)
        return

      untilMinute = (hour - nowHour) * 60 + minute - nowMinute
      @set('untilMinute', untilMinute)

      return

  global.app.model.BusToRide = BusToRide
  global.app.model.busToRide = new BusToRide()

  return

do (global = this, $ = jQuery) ->
  'use strict'

  global.app = global.app || {}
  global.app.view = global.app.view || {}

  global.JST = global.JST || {}
  global.JST['app.tmpl.BusToRide'] = _.template(
    """
    <span><%
    if (hour === BusToRide.NO_TIME || minute === BusToRide.NO_TIME) {
      %>選択してください<%
    } else {
      %><% if (hour < 10) { %>0<%} %><%- hour %>:<% if (minute < 10) { %>0<%} %><%- minute %><%
    }
    %></span>
    """
  )

  class BusToRideView extends Backbone.View
    initialize: ->
      @listenTo(@model, 'change', @render);
      return

    render: ->
      @$el.html(global.JST['app.tmpl.BusToRide'](@model.toJSON()))
      return @

  global.app.view.BusToRideView = BusToRideView

  return
