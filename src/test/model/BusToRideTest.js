var BusToRide = app.model.BusToRide;

suite('BusToRideTest', function () {
  'use strict';

  setup(function () {
  });

  test('初期状態のチェック', function() {
    var busToRide = new BusToRide();
    assert.ok(busToRide.has('location'), 'locationが存在する');
    assert.ok(busToRide.has('hour'), 'hourが存在する');
    assert.ok(busToRide.has('minute'), 'minuteが存在する');

    assert.equal(busToRide.get('location'), BusToRide.NO_LOCATION, 'locationが-1');
    assert.equal(busToRide.get('hour'), BusToRide.NO_TIME, 'hourが-1');
    assert.equal(busToRide.get('minute'), BusToRide.NO_TIME, 'minuteが-1');

    assert.equal(busToRide.getDisplayTime(), '選択してください', '表示用の時刻')
  });

  test('setBus', function() {
    var busToRide = new BusToRide();
    busToRide.setBus(BusToRide.LOC_1, 12, 34);
    assert.equal(busToRide.get('location'), BusToRide.LOC_1, '場所が1号館');
    assert.equal(busToRide.get('hour'), 12, '時間が12');
    assert.equal(busToRide.get('minute'), 34, '分が34');

    assert.equal(busToRide.getDisplayTime(), '12:34', '表示用の時刻');
  });

  test('change:locationイベント', function(done) {
    var busToRide = new BusToRide();
    busToRide.on('change:location', function() {
      assert.equal(busToRide.get('location'), BusToRide.LOC_61, 'change LOC_61');
      assert.equal(busToRide.previous('location'), BusToRide.NO_LOCATION, 'change前の値 NO_LOCAtion');
      done();
    });
    busToRide.setBus(BusToRide.LOC_61, 1, 3);
  });
});
