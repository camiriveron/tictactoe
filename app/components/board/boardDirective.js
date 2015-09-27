(function () {
    'use strict';

    angular.module('tictactoe').directive("boardDirective", [function () {
        return {
            restrict: 'EAC',
            controller: "BoardController",
            link: function ($scope, element, attrs) {
                $scope.element = element;
            }
        };
    }]);
}());