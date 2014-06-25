var BusToRide = app.model.BusToRide;
var BusToRideView = app.view.BusToRideView;

suite('BusToRideViewTest', function () {
  var $div, busToRide, busToRideView;
  var TIMEOUT_WAIT = 100;

  setup(function() {
    $div = $('<div>');
    busToRide = new BusToRide();
    busToRideView = new BusToRideView({
      el: $div,
      model: busToRide
    });
  });

  test('rendarのテスト', function() {
    assert.equal(busToRideView.$el, $div, 'Viewの$el');
    busToRideView.render();
    assert.equal(busToRideView.$el.text(), '選択してください', '時間無指定の場合のチェック');
  });

  test('changeイベントのテスト', function(done) {
    busToRide.setBus(BusToRide.LOC_1, 1, 1);
    setTimeout(function() {
      assert.equal(busToRideView.$el.text(), '01:01', '時間無指定の場合のチェック');
      done();
    },TIMEOUT_WAIT);
  });
});
