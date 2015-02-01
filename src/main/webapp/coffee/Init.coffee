initData = {}

$.ajax(
  url: 'data/servicetable.csv'
  cache: false
  beforeSend = (xhr) ->
    xhr.overrideMimeType 'text/plain; charset=Shift_JIS'
    return
  dataType: 'text'
).done((data) ->
  serviceArray = data.split(/\r\n|\r|\n/)

  for value, index in serviceArray
    continue if index < 2
    break if value is ''
    console.log index, value
)

serviceCollection = new App.ServiceCollection(initData)
