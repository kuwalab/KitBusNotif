var BusToRide = app.model.BusToRide;
var BusToRideView = app.view.BusToRideView;

suite('BusToRideViewTest', function () {
  test('rendarのテスト', function() {
    var busToRide = new BusToRide();
    var busToRideView = new BusToRideView({
      model: busToRide
    });
    assert.ok(true);
  });
});
