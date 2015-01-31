@.App = {}

serviceCollection = new App.ServiceCollection()
serviceCollection.fetch().then((c, d) ->
  console.log(c, d)
, (e, f) ->
  console.log(e, f)
)
