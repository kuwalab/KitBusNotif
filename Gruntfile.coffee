module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    connect:
      server:
        options:
          port: 8000
          hostname: '*'
    coffee:
      dev:
        options:
          bare: true
          sourceMap: true
        files:
          'src/main/webapp/js/KitBusNotif.js': 'src/main/coffee/**/*.coffee'
    uglify:
      dev:
        files: 
          'src/main/webapp/js/KitBusNotif.min.js': 'src/main/webapp/js/KitBusNotif.js'
        options:
          sourceMap: true
          sourceMapName: 'src/main/webapp/js/KitBusNotif.min.js.map'
          sourceMapIncludeSources: true
          sourceMapIn: 'src/main/webapp/js/KitBusNotif.js.map'
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
    compass:
      dev:
        options:
          sassDir: 'src/main/scss'
          cssDir: 'src/main/webapp/css'
          environment: 'development'
    watch:
      scripts:
        files: ['**/*.coffee', '**/*.scss']
        tasks: ['coffee', 'uglify', 'compass']
        options:
          interrupt: true

  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['coffee', 'uglify', 'compass'])
