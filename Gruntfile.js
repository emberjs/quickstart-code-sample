module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      javascript: {
        src: [
          'js/app.js', 'js/router.js', 'js/models/store.js', 'js/models/todo.js',
          'js/controllers/todo_controller.js', 'js/controllers/todos_controller.js',
          'js/views/edit_todo_view.js' 
        ],
        dest: 'out.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('index', 'builds the index.html', function(){
    var file = grunt.file.read('index.html');
    file = file.replace('<link rel="stylesheet" href="style.css">', '<link rel="stylesheet" href="http://emberjs.com.s3.amazonaws.com/getting-started/style.css">')
    file = file.replace(/js\/libs/g, 'http://emberjs.com.s3.amazonaws.com/getting-started');
    file = file.replace(/\n\s*<script src="js\/.*"><\/script>/g, '');
    grunt.file.write('out.html', file);
    grunt.log.writeln('File "out.html" created.');
  });

  grunt.registerTask('default', ['index', 'concat']);

};