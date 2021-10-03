"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputData = fs.readFileSync('input.txt').toString();
var inputArray = inputData.split("\r\n").map(function (x) {
    var spacedSplit = x.split(' ');
    var lowerBound = Number(spacedSplit[0].split('-')[0]);
    var upperBound = Number(spacedSplit[0].split('-')[1]);
    var ruleSubject = spacedSplit[1][0];
    var password = spacedSplit[2];
    return {
        ruleSubject: ruleSubject,
        lowerBound: lowerBound,
        upperBound: upperBound,
        password: password,
    };
});
var betweenInclusive = function (x, lower, upper) { return lower <= x && x <= upper; };
var problem1Policy = function (policy) {
    var counter = 0;
    for (var _i = 0, _a = policy.password; _i < _a.length; _i++) {
        var c = _a[_i];
        if (c === policy.ruleSubject) {
            counter++;
        }
    }
    return betweenInclusive(counter, policy.lowerBound, policy.upperBound);
};
var problem1 = function (arr) { return arr.filter(function (policy) { return problem1Policy(policy); }).length; };
var XOR = function (a, b) { return a ? !b : b; };
var problem2Policy = function (policy) {
    return XOR(policy.password[policy.lowerBound - 1] === policy.ruleSubject, policy.password[policy.upperBound - 1] === policy.ruleSubject);
};
var problem2 = function (arr) { return arr.filter(function (policy) { return problem2Policy(policy); }).length; };
console.log(problem1(inputArray));
console.log(problem2(inputArray));
