module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'euroAllTimeTableGenerator.js',
                options: {
                    specs: 'jasmine/jasmineSpec.js'
                }
            }
        },
        watch: {
            files: ['euroAllTimeTableGenerator.js', 'jasmine/jasmineSpec.js'],
            tasks: ['jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jasmine']);
}