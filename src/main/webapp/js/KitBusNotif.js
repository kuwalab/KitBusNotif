var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(global, $) {
  'use strict';
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
      minute: BusToRide.NO_TIME,
      untilMinute: BusToRide.NO_TIME
    };

    BusToRide.prototype.setBus = function(loc, hour, minute) {
      this.set('location', loc);
      this.set('hour', hour);
      this.set('minute', minute);
    };

    BusToRide.prototype.updateUntilMinute = function(now) {
      var hour, minute, nowHour, nowMinute, untilMinute;
      nowHour = now.getHours();
      nowMinute = now.getMinutes();
      hour = this.get('hour');
      minute = this.get('minute');
      if (nowHour > hour || (nowHour === hour && nowMinute > minute)) {
        this.set('untilMinute', BusToRide.NO_TIME);
        return;
      }
      untilMinute = (hour - nowHour) * 60 + minute - nowMinute;
      this.set('untilMinute', untilMinute);
    };

    BusToRide.prototype.getDisplayTime = function() {
      var hour, minute;
      hour = this.get('hour');
      minute = this.get('minute');
      if (hour === BusToRide.NO_TIME || minute === BusToRide.NO_TIME) {
        return '選択してください';
      }
      if (hour < 10) {
        hour = '0' + hour;
      }
      if (minute < 10) {
        minute = '0' + minute;
      }
      return hour + ':' + minute;
    };

    return BusToRide;

  })(Backbone.Model);
  global.app.model.BusToRide = BusToRide;
  global.app.model.busToRide = new BusToRide();
})(this, jQuery);

(function(global, $) {
  'use strict';
  var BusToRideView;
  global.app = global.app || {};
  global.app.view = global.app.view || {};
  global.JST = global.JST || {};
  global.JST['app.tmpl.BusToRide'] = _.template("<span><%- getDisplayTime() %></span>");
  BusToRideView = (function(_super) {
    __extends(BusToRideView, _super);

    function BusToRideView() {
      return BusToRideView.__super__.constructor.apply(this, arguments);
    }

    BusToRideView.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.render);
    };

    BusToRideView.prototype.render = function() {
      this.$el.html(global.JST['app.tmpl.BusToRide'](this.model));
      return this;
    };

    return BusToRideView;

  })(Backbone.View);
  global.app.view.BusToRideView = BusToRideView;
})(this, jQuery);

//# sourceMappingURL=KitBusNotif.js.map
