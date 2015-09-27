(function () {
    'use strict';

    angular.module('tictactoe').directive("homeDirective", [function () {
        return {
            restrict: 'EAC',
            controller: "HomeController",
            link: function ($scope, element, attrs) {
                $scope.element = element;
                var handler = function () {
                    if ($scope.window.scrollY > 50) {
                        angular.element($('nav')).addClass('navbar-shrink');
                    } else {
                        angular.element($('nav')).removeClass('navbar-shrink');
                    }
                };
                angular.element($($scope.window)).on('scroll', $scope.$apply.bind($scope, handler));
                handler();

            }
        };
    }]);
}());