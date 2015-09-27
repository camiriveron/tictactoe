(function () {
    'use strict';

    angular.module('tictactoe')
        .controller('BoardController', ['$scope', 'boardService', '$location', '$anchorScroll', BoardController]);

    function BoardController($scope, boardService, $location, $anchorScroll) {

        $scope.initializeBoard = function () {
            //Start messages
            $scope.userMessage = "I start";
            $scope.computerMessage = "You start";

            //Set no winner and no current player
            $scope.winner = false;
            $scope.currentPlayer = '-';
            $scope.boardItems = [];

            //Initialize board
            for (var i = 0; i < 3; i++) {
                $scope.boardItems.push([{
                    value: '-',
                    winningItem: false
                }, {
                    value: '-',
                    winningItem: false
                }, {
                    value: '-',
                    winningItem: false
                }]);
            }

            //Counter for tie check
            $scope.freeItems = $scope.boardItems.length * $scope.boardItems[0].length;
        };

        $scope.gotoBoard = function () {
            // set the location.hash to the id of
            // the board.
            $location.hash('tictactoeBoard');
            // call $anchorScroll()
            $anchorScroll();
        };

        //User starts playing
        $scope.userStarts = function () {
            $scope.currentPlayer = 'O';
            $scope.gotoBoard();
        };

        //Computer starts playing
        $scope.computerStarts = function () {
            $scope.currentPlayer = 'X';
            $scope.gotoBoard();
            $scope.computerPlay();
        };

        //Computer plays
        $scope.computerPlay = function () {
            //Get next move and perform play
            var nextMove = boardService.getNextMove($scope.boardItems);
            $scope.checkItem(nextMove.row, nextMove.column);
        };

        $scope.checkItem = function (row, column) {
            //Check item in board
            $scope.boardItems[row][column].value = $scope.currentPlayer;
            $scope.freeItems--;
            //Check if the game is over
            $scope.winner = boardService.checkEndOfGame($scope.boardItems, $scope.freeItems);
            //Change player's turn
            $scope.currentPlayer = $scope.currentPlayer === 'X' ? 'O' : 'X';
            //Update messages according to current status of the game
            $scope.userMessage = $scope.winner == "-" ? "It's a tie" :
                $scope.winner == "O" ? "You win!" : $scope.winner == "X" ? "Maybe next time" : "Your turn";
            $scope.computerMessage = $scope.winner == "-" ? "It's a tie" :
                $scope.winner == "X" ? "I win!" : $scope.winner == "O" ? "Well done!" : "";
            //If there's no winner and the user just played, it's computer's turn
            if (!$scope.winner && $scope.currentPlayer === 'X') {
                $scope.computerPlay();
            }
        };

        $scope.startMessage = "Who starts?";
        $scope.initializeBoard();
    }
})();