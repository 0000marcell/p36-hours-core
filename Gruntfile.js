"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          './dist/chronometer.js': ['./src/chronometer.js'],
          './dist/format-time.js': ['./src/format-time.js']
        },
        options: {
          watch: true,
          keepAlive: true,
          browserifyOptions: { debug: true },
          transform: [['babelify', { presets: ["@babel/preset-env"] }]]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask("default", ["browserify"]);
};
