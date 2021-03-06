define([
	'glob', 'underscore'
],
function(glob, _ ){
	function globFiles(globPatterns, async) {
		// For context switching
		var _this = this;
		// URL paths regex
		var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');
		// The output array
		var output = [];

		// If glob pattern is array so we use each pattern in a recursive way, otherwise we use glob 
		if (_.isArray(globPatterns)) {
			globPatterns.forEach(function(globPattern) {
				output = _.union(output, globFiles(globPattern));
			});
		} 
		else if (_.isString(globPatterns)) {
			if (urlRegex.test(globPatterns))
				output.push(globPatterns);
			else
				output = _.union(output, glob( globPatterns, { sync: async !== true }));
		}

		return output;
	}

	return {
		get: globFiles
	}
});