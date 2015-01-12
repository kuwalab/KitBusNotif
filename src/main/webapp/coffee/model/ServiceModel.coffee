$ = require 'jquery'
_ = require 'Underscore'
Backbone = require 'Backbone'

module.exports =
  class ServiceModel extends Backbone.Model
    @DATE_NO_DATE = ''
    @TYPE_WEEKDAY = 'WEEKDAY'
    @TYPE_SATURDAY = 'SATURDAY'
    @TYPE_SUNDAY = 'SUNDAY'

    defaults:
      date: ServiceModel.DATE_NO_DATE
      type: ServiceModel.TYPE_SUNDAY
