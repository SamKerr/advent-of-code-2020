import * as fs from 'fs';

const inputArray = fs.readFileSync('input.txt').toString().split("\n").map(x=>Number(x));
const targetValue = 2020;
// Problem 1
const problem1 = (arr: number[], target: number) => {
    // Time complexity: O(n*log(n))
    // Space complexity: O(1)
    const sortedArr = arr.sort((n1,n2) => n1 - n2);
    let leftPointer = 0;
    let rightPointer = sortedArr.length-1;
    while(leftPointer<=rightPointer){
        let currentValue = sortedArr[leftPointer]+sortedArr[rightPointer];
        const leftValue = sortedArr[leftPointer];
        const rightValue = sortedArr[rightPointer];
        if(currentValue==target){
            return leftValue*rightValue;
        } 
        else if(currentValue<target){
            leftPointer++;
        }
        else if(currentValue>target) {
            rightPointer--;
        }
    }
    throw new Error('Error: Invalid Input - no feasible solution found');
}

const problem1EasyWay = (arr: number[], target: number) => {
    // Time complexity: O(n*n)
    // Space complexity: O(1)
    for(let i of arr){
        for(let j of arr){
            if(i+j==target){
                return i*j;
            }
        }
    }
}

const problem2EasyWay = (arr: number[], target: number) => {
    // Time complexity: O(n^3)
    // Space complexity: O(1)
    for(let i of arr){
        for(let j of arr){
            for(let k of arr){
                if(i+j+k==target){
                    return i*j*k;
                }
            }
        }
    }
}

const problem2Faster = (arr: number[], target: number) => {
    // Time complexity: O(n^2)
    // Space complexity: O(n)
    var set = new Set(arr);
    for(let i of arr){
        for(let j of arr){
            if(target-(i+j) in set){
                    return i*j*target-(i+j);
                }
            }
        }
    }
}

console.log(problem1(inputArray, targetValue));
console.log(problem1EasyWay(inputArray, targetValue));
console.log(problem2EasyWay(inputArray, targetValue));
console.log(problem2Faster(inputArray, targetValue));
