requirejs.config({
    paths: {
        'datatables': 'jquery.dataTables.min'
    }
});

require(["jquery"], function($) {
    require(["bootstrap.min"], function(bootstrap) {
        require(["datatables"], function(dataTables) {
            require(["index"], function(index) {});
        });
    });
});