define( function ( ) {
    return ['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise('/404');

        return $stateProvider
            .state('main', {
                url:         '/',
                templateUrl: 'templates/main.html',
                controller:  'MainController'
            })
            .state('catalogName', {
                url:         '/catalog/:name?brand&size&sort',
                templateUrl: 'templates/catalog.html',
                controller:  'CategoryController'
            })
			
			.state('catalogNameItem', {
                url:         '/catalog/:name/{id:[0-9]{1,5}}-:itemName',
                templateUrl: 'templates/catalog-item-list.html',
                controller:  'ItemController'
            })

            .state('catalogNameSubcategory', {
                url:         '/catalog/:name/:subcategory?page&brand&size&sort',
                templateUrl: 'templates/catalog.html',
                controller:  'CategoryController'
            })

            


    }];
});
