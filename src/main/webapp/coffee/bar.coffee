foo = require './foo.coffee'

module.exports =
  add: (x, y) -> foo.add x, y
