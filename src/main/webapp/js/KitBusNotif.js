var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(global, $) {
  var BusToRide;
  global.app = global.app || {};
  BusToRide = (function(_super) {
    __extends(BusToRide, _super);

    function BusToRide() {
      return BusToRide.__super__.constructor.apply(this, arguments);
    }

    BusToRide.NO_LOCATION = -1;

    BusToRide.prototype.defaults = {
      location: BusToRide.NO_LOCATION,
      hour: -1,
      minute: -1
    };

    return BusToRide;

  })(Backbone.Model);
  global.app.BusToRide = BusToRide;
})(window, jQuery);

//# sourceMappingURL=KitBusNotif.js.map
