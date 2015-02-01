(function() {
  this.App = {};

}).call(this);

(function() {
  var ServiceCollection,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ServiceCollection = (function(_super) {
    __extends(ServiceCollection, _super);

    function ServiceCollection() {
      return ServiceCollection.__super__.constructor.apply(this, arguments);
    }

    ServiceCollection.prototype.model = App.ServiceModel;

    return ServiceCollection;

  })(Backbone.Collection);

  App.ServiceCollection = ServiceCollection;

}).call(this);

(function() {
  var ServiceModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ServiceModel = (function(_super) {
    __extends(ServiceModel, _super);

    function ServiceModel() {
      return ServiceModel.__super__.constructor.apply(this, arguments);
    }

    ServiceModel.YOUBI_TYPE_WEEKDAY = 0;

    ServiceModel.YOUBI_TYPE_SUNDAY = 1;

    ServiceModel.YOUBI_TYPE_SATURDAY = 7;

    ServiceModel.prototype["default"] = {
      date: '',
      youbiType: ServiceModel.YOUBI_TYPE_WEEKDAY
    };

    return ServiceModel;

  })(Backbone.Model);

  App.ServiceModel = ServiceModel;

}).call(this);

(function() {
  var beforeSend, initData, serviceCollection;

  initData = {};

  $.ajax({
    url: 'data/servicetable.csv',
    cache: false
  }, beforeSend = function(xhr) {
    xhr.overrideMimeType('text/plain; charset=Shift_JIS');
  }, {
    dataType: 'text'
  }).done(function(data) {
    var index, serviceArray, value, _i, _len, _results;
    serviceArray = data.split(/\r\n|\r|\n/);
    _results = [];
    for (index = _i = 0, _len = serviceArray.length; _i < _len; index = ++_i) {
      value = serviceArray[index];
      if (index < 2) {
        continue;
      }
      if (value === '') {
        break;
      }
      _results.push(console.log(index, value));
    }
    return _results;
  });

  serviceCollection = new App.ServiceCollection(initData);

}).call(this);
