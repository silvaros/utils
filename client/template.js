define(function(){
    return { 
        load: function(resourceName, parentRequire, callback, config){ 
            parentRequire([ ("text!" + resourceName) ], function( templateContent ){
                // Create the templates node.
                var importedTemplate = $( templateContent );

                $('body').append(importedTemplate);

                // Create a jQuery DOM element out of the template markup and pass it back to the loader.
                callback( $( importedTemplate.html() ) );
            });
        }
    }; 
});