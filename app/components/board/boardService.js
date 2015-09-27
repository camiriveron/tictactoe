(function () {
    'use strict';

    angular.module('tictactoe')
        .factory('boardService', function () {
            return {
                checkEndOfGame: function (board, freeItems) {
                    //Check first diagonal
                    if (board[0][0].value != "-" && board[0][0].value == board[1][1].value && board[1][1].value == board[2][2].value) {
                        board[0][0].winningItem = true;
                        board[1][1].winningItem = true;
                        board[2][2].winningItem = true;

                        return board[0][0].value;
                    }
                    //Check second diagonal
                    else if (board[2][0].value != "-" && board[2][0].value == board[1][1].value && board[1][1].value == board[0][2].value) {

                        board[2][0].winningItem = true;
                        board[1][1].winningItem = true;
                        board[0][2].winningItem = true;

                        return board[2][0].value;
                    } else { //check rows and columns
                        for (var i = 0; i < board.length; i++) {
                            if (board[i][0].value != "-" && board[i][0].value == board[i][1].value && board[i][1].value == board[i][2].value) {
                                board[i][0].winningItem = true;
                                board[i][1].winningItem = true;
                                board[i][2].winningItem = true;

                                return board[i][0].value;
                            } else if (board[0][i].value != "-" && board[0][i].value == board[1][i].value && board[1][i].value == board[2][i].value) {
                                board[0][i].winningItem = true;
                                board[1][i].winningItem = true;
                                board[2][i].winningItem = true;

                                return board[0][i].value;
                            }
                        }
                    }
                    //If there're not free items it's a tie
                    if (freeItems === 0) {
                        return "-";
                    }
                    //If there's no row, column, diagonal matches and there's
                    //at least one empty item then the game is not finished
                    return false;
                },
                getNextMove: function (board) {
                    //Dumb algorithm
                    //Find the next available item in the board
                    var foundNext = false;
                    var wantedColumn = 0;
                    for (var i = 0; i < board.length; i++) {
                        for (var j = 0; j < board[i].length; j++) {
                            if (board[i][j].value == "-") {
                                return {
                                    row: i,
                                    column: j
                                };
                            }
                        }
                    }

                }
            };
        });
}());