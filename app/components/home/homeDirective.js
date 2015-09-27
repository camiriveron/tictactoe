(function () {
    'use strict';

    angular.module('tictactoe').directive("homeDirective", [function () {
        return {
            restrict: 'EAC',
            controller: "HomeController",
            link: function ($scope, element, attrs) {
                $scope.element = element;
                angular.element($scope.window).bind("scroll", function () {
                    if (this.pageYOffset >= 50) {
                        $scope.navBarShrink = true;
                    } else {
                        $scope.navBarShrink = false;
                    }
                    $scope.$apply();
                });
            }
        };
    }]);
}());