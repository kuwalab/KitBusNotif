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
    assert.equal(busToRideView.$el.text(), '選択してください', '時間無指定の場合のチェック');
  });
});
