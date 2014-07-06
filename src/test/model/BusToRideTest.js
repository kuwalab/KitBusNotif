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
      assert.equal(busToRide.get('location'), BusToRide.LOC_61, 'change');
      assert.equal(busToRide.previous('location'), BusToRide.NO_LOCATION, 'change前の値 NO_LOCATION');
      done();
    });
    busToRide.setBus(BusToRide.LOC_61, 1, 3);
  });

  test('change:minuteイベント', function(done) {
    var busToRide = new BusToRide();
    busToRide.on('change:minute', function() {
      assert.equal(busToRide.get('minute'), 11, 'change minute');
      assert.equal(busToRide.previous('minute'), BusToRide.NO_TIME, 'change前の値 NO_TIME');
      done();
    });
    busToRide.setBus(BusToRide.LOC_61, 1, 11);
  });

  test('change:minuteイベントが発火されないテスト', function() {
    var busToRide = new BusToRide();
    busToRide.on('change:minute', function() {
      assert.fail();
    });
    busToRide.setBus(BusToRide.LOC_61, 1, BusToRide.NO_TIME);
  });

  test('updateUntilMinuteのテスト 1時間未満', function(done) {
    var busToRide = new BusToRide();
    busToRide.on('change:untilMinute', function() {
      assert.equal(busToRide.get('untilMinute'), 58, '現在 1:11 バス時刻 2:9 58分');
      done();
    });
    assert.equal(busToRide.get('untilMinute'), BusToRide.NO_TIME, '初期値');
    busToRide.setBus(BusToRide.LOC_61, 2, 9);
    assert.equal(busToRide.get('untilMinute'), BusToRide.NO_TIME, '初期値');
    var now = new Date();
    now.setHours(1);
    now.setMinutes(11);
    busToRide.updateUntilMinute(now);
  });

  test('updateUntilMinuteのテスト 1時間以上', function(done) {
    var busToRide = new BusToRide();
    busToRide.on('change:untilMinute', function() {
      assert.equal(busToRide.get('untilMinute'), 88, '現在 1:11 バス時刻 2:39 88分');
      done();
    });
    assert.equal(busToRide.get('untilMinute'), BusToRide.NO_TIME, '初期値');
    busToRide.setBus(BusToRide.LOC_61, 2, 39);
    assert.equal(busToRide.get('untilMinute'), BusToRide.NO_TIME, '初期値');
    var now = new Date();
    now.setHours(1);
    now.setMinutes(11);
    busToRide.updateUntilMinute(now);
  });
});
