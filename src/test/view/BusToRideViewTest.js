var BusToRide = app.model.BusToRide;
var BusToRideView = app.view.BusToRideView;

suite('BusToRideViewTest', function () {
  test('rendarのテスト', function() {
    var $div = $('<div>');
    var busToRide = new BusToRide();
    var busToRideView = new BusToRideView({
      el: $div,
      model: busToRide
    });
    assert.equal(busToRideView.$el, $div, 'Viewの$el');
    busToRideView.render();
    console.log($div.html());
  });
});
