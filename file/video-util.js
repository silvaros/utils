'use strict';
define(function(){
	return { 
		mimeTypes:{
			"swf": "application/x-shockwave-flash",
			"flv": "video/x-flv",
			"mpeg": "video/mpeg",
			"mpg": "video/mpeg",
			"mpv2": "video/mpeg",
			"mp2": "video/mpeg",
			"ogg": "video/ogg"
		},
		getExt: function(name){
			return name.split('.').pop();
		},
		getExtMime: function(ext){
			return mimeTypes[ext] || 'video/mp4';
		}
	}
});
