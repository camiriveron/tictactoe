(function () {
    'use strict';

    angular.module('tictactoe')
        .controller('HomeController', ['$scope', '$window', HomeController]);

    function HomeController($scope, $window) {
        $scope.window = $window;
    }
})();