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
