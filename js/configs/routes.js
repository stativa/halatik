define( function ( ) {
    return ['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise('/404');

        return $stateProvider
            .state('main', {
                url:         '/',
                templateUrl: 'templates/catalog.html',
                controller:  'MainController'
            })
            .state('catalogName', {
                url:         '/catalog/:name',
                templateUrl: 'templates/catalog.html',
                controller:  'CategoryController'
            })
           .state('catalogName.Page', {
                url:         '/page{page:[0-9]{1,2}}',
                templateUrl: 'templates/catalog.html',
                controller:  'CategoryController'
            })
            .state('catalogName.Item', {
                url:         '/{id:[0-9]{1,5}}-:itemName',
                templateUrl: 'templates/catalog-item-list.html',
                controller:  'ItemController'
            })


    }];
});
