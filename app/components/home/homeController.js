(function () {
    'use strict';

    angular.module('tictactoe')
        .controller('HomeController', ['$scope', '$window', '$document',
            HomeController
        ]);

    function HomeController($scope, $window, $document) {
        $scope.window = $window;
        $scope.document = $document;
        $scope.navBarShrink = false;
    }
})();