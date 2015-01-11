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

    @ALARM_OFF = 0
    @ALARM_ON = 1
    @ALARM_TIME = 2

    defaults:
      location: @NO_LOCATION
      hour: @NO_TIME
      minute: @NO_TIME
      untilMinute: @NO_TIME
      beforeMinute: @NO_TIME
      alarm: off

    setBus: (loc, hour, minute) ->
      @set 'location', loc
      @set 'hour', hour
      @set 'minute', minute
      return

    setAlerm: (beforeMinute) ->
      @set 'alarm', BusToRide.ALARM_ON
      @set 'beforeMinute', beforeMinute
      return

    updateUntilMinute: (now) ->
      nowHour = now.getHours()
      nowMinute = now.getMinutes()

      hour = @get 'hour'
      minute = @get 'minute'

      if nowHour > hour or (nowHour is hour and nowMinute > minute)
        @set('untilMinute', BusToRide.NO_TIME)
        return

      untilMinute = (hour - nowHour) * 60 + minute - nowMinute
      @set 'untilMinute', untilMinute
      beforeMinute = @get 'beforeMinute'

      alarm = @get 'alarm'
      if alarm is BusToRide.ALARM_ON and beforeMinute is untilMinute
        @set 'alarm', BusToRide.ALARM_TIME

      return

  global.app.model.BusToRide = BusToRide
  global.app.model.busToRide = new BusToRide()

  return