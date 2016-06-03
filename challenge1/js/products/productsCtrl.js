angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, $state, productService){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData;
    } else {
        $scope.productData = productService.sockData;
    }
});
