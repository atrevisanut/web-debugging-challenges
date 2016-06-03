angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
            url: '/homepage',
            templateUrl: 'js/home/homeTemplate.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTemplate.html',
            controller: 'settingsCtrl'
        })
         .state('products', {
            url: '/products/:productid',
            templateUrl: 'js/products/productTemplate.html',
            controller: 'productsCtrl'
        });


})
