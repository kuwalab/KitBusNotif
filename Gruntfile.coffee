module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    dirs:
      root: 'src/main/webapp'
      coffee: '<%= dirs.root %>/coffee'
      dev: '<%= dirs.root %>/jssrc'
      dest: '<%= dirs.root %>/js'

    coffee:
      app:
        files:
          '<%= dirs.dev %>/app.js': [
            '<%= dirs.coffee %>/App.coffee'
            '<%= dirs.coffee %>/model/*.coffee'
            '<%= dirs.coffee %>/Init.coffee'
          ]

    uglify:
      app:
        options:
          preserveComments: 'some' # /*!で始まるコメントを消さない
          sourceMap: true
          sourceMapName: '<%= dirs.dev %>/KitBusNotif.map'
        files:
          '<%= dirs.dest %>/KitBusNotif.min.js': ['<%= dirs.dev %>/KitBusNotif.js']

    watch:
      scripts:
        files: ['**/*.coffee']
        tasks: ['default']
        options:
          interrupt: true

    clean:
      all: [
        '<%= dirs.dest %>'
        '<%= dirs.dev %>'
        'bower_components'
        'node_modules'
      ]
      dev: [
        '<%= dirs.dest %>'
        '<%= dirs.dev %>'
      ]

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['coffee', 'uglify'])
