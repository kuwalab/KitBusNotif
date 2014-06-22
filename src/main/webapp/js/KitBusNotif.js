var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(global, $) {
  var BusToRide;
  global.app = global.app || {};
  global.app.model = global.app.model || {};
  BusToRide = (function(_super) {
    __extends(BusToRide, _super);

    function BusToRide() {
      return BusToRide.__super__.constructor.apply(this, arguments);
    }

    BusToRide.NO_LOCATION = -1;

    BusToRide.NO_TIME = -1;

    BusToRide.LOC_1 = 0;

    BusToRide.LOC_74 = 1;

    BusToRide.LOC_61 = 2;

    BusToRide.LOC_65 = 3;

    BusToRide.prototype.defaults = {
      location: BusToRide.NO_LOCATION,
      hour: BusToRide.NO_TIME,
      minute: BusToRide.NO_TIME
    };

    BusToRide.prototype.setBus = function(loc, hour, minute) {
      this.set('location', loc);
      this.set('hour', hour);
      this.set('minute', minute);
    };

    return BusToRide;

  })(Backbone.Model);
  global.app.model.BusToRide = BusToRide;
  global.app.model.busToRide = new BusToRide();
})(this, jQuery);

(function(global, $) {
  var BusToRideView;
  global.app = global.app || {};
  global.app.view = global.app.view || {};
  global.JST = global.JST || {};
  global.JST['app.tmpl.BusToRide'] = _.template("<span><%- dispHour >:<%- dispMinute ></span>");
  BusToRideView = (function(_super) {
    __extends(BusToRideView, _super);

    function BusToRideView() {
      return BusToRideView.__super__.constructor.apply(this, arguments);
    }

    BusToRideView.prototype.render = function() {
      this.$el.html(global.JST['app.tmpl.BusToRide'](this.model));
      return this;
    };

    return BusToRideView;

  })(Backbone.View);
  global.app.view.BusToRideView = BusToRideView;
})(this, jQuery);

//# sourceMappingURL=KitBusNotif.js.map
