class ServiceModel extends Backbone.Model
  @YOUBI_TYPE_WEEKDAY: 0
  @YOUBI_TYPE_SUNDAY: 1
  @YOUBI_TYPE_SATURDAY: 7
  default: {
    date: ''
    youbiType: ServiceModel.YOUBI_TYPE_WEEKDAY
  }

App.ServiceModel = ServiceModel
