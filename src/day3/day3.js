"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
;
var inputData = fs.readFileSync('input.txt').toString().split("\r\n");
var hitOrMiss = function (b) { return b ? 1 : 0; };
var grid = inputData.map(function (str) {
    var row = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var c = str_1[_i];
        row.push(hitOrMiss(c === '#'));
    }
    return row;
});
var countHitsOnSlope = function (grid, slope) {
    var currentHeight = 0;
    var currentWidth = 0;
    var counter = 0;
    while (currentHeight < grid.length) {
        counter += grid[currentHeight][currentWidth];
        currentWidth = (currentWidth + slope.right) % grid[0].length;
        currentHeight += slope.down;
    }
    return counter;
};
var problem1 = function (grid) { return countHitsOnSlope(grid, { right: 3, down: 1 }); };
var problem2 = function (grid) {
    var slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    return slopes
        .map(function (pair) { return countHitsOnSlope(grid, { right: pair[0], down: pair[1] }); })
        .reduce(function (a, b) { return a * b; });
};
console.log(problem1(grid));
console.log(problem2(grid));
