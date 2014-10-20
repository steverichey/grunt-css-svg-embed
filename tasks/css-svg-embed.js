module.exports = function(grunt) {
    function someFunction() {
        // nothing yet!
    }
    
    grunt.registerMultiTask('csssvgembed', "Convert SVGs linked as URLs in your CSS to strings inside your style sheet", function() {
        var async = this.async();
        
        var options = this.options({
            failOnMissingUrl: true
        });
        
        var existingFiles = this.files.filter(function(file) {
            if (!grunt.file.exists(file.src[0])) {
                return false;
            }
            
            return true;
        });
        
        var leftToProcess = existingFiles.length;
        
        existingFiles.forEach(function(file) {
            processFile(file.src[0], file.dest, options, function() {
                if (--leftToProcess === 0) {
                    async();
                }
            });
        });
    });
};
