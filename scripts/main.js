requirejs.config({
    paths: {
    	'jquery': 'jquery',
    	'underscore': 'underscore',
    	'backbone': 'backbone',
        'datatables': 'jquery.dataTables.min'
    }
});

require(["jquery"], function($) {
    require(["bootstrap.min"], function(bootstrap) {
        require(["datatables"], function(dataTables) {
        	require(["underscore"], function(_) {
        		require(["backbone"], function(Backbone) {
        			require(["index"], function(index) {});
        		});
        	});
        });
    });
});