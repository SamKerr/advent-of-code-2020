"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputArray = fs.readFileSync('input.txt').toString().split("\n").map(function (x) { return Number(x); });
var targetValue = 2020;
// Problem 1
var problem1 = function (arr, target) {
    var sortedArr = arr.sort(function (n1, n2) { return n1 - n2; });
    var leftPointer = 0;
    var rightPointer = sortedArr.length - 1;
    while (leftPointer <= rightPointer) {
        var currentValue = sortedArr[leftPointer] + sortedArr[rightPointer];
        var leftValue = sortedArr[leftPointer];
        var rightValue = sortedArr[rightPointer];
        if (currentValue == target) {
            return leftValue * rightValue;
        }
        else if (currentValue < target) {
            leftPointer++;
        }
        else if (currentValue > target) {
            rightPointer--;
        }
    }
    throw new Error('Error: Invalid Input - no feasible solution found');
};
var problem1EasyWay = function (arr, target) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
            var j = arr_2[_a];
            if (i + j == target) {
                return i * j;
            }
        }
    }
};
var problem2EasyWay = function (arr, target) {
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var i = arr_3[_i];
        for (var _a = 0, arr_4 = arr; _a < arr_4.length; _a++) {
            var j = arr_4[_a];
            for (var _b = 0, arr_5 = arr; _b < arr_5.length; _b++) {
                var k = arr_5[_b];
                if (i + j + k == target) {
                    return i * j * k;
                }
            }
        }
    }
};
console.log(problem1(inputArray, targetValue));
console.log(problem1EasyWay(inputArray, targetValue));
console.log(problem2EasyWay(inputArray, targetValue));
