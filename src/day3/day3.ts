import * as fs from 'fs';

type HitOrMiss = 1 | 0;
type Grid = HitOrMiss[][];
interface Slope {
    right: number;
    down: number;
};

const inputData = fs.readFileSync('input.txt').toString().split("\r\n");
const hitOrMiss = (b: boolean): HitOrMiss => b ? 1 : 0;
const grid: Grid = inputData.map(str =>  str.split("").forEach(c => hitOrMiss(c === '#')));

const countHitsOnSlope = (grid: Grid, slope: Slope) => {
    let currentHeight = 0;
    let currentWidth = 0;
    let counter = 0;
    while (currentHeight < grid.length) {
        counter += grid[currentHeight][currentWidth];
        currentWidth = (currentWidth + slope.right) % grid[0].length;
        currentHeight += slope.down;
    }
    return counter;
}

// Time: O(height/down), Space: O(grid-size)
const problem1 = (grid: Grid) => countHitsOnSlope(grid, { right: 3, down: 1 })

// Time: O(sum of height/down), Space: O(grid-size)
const problem2 = (grid: Grid) => {
    const slopes: [number, number][] = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    return slopes
        .map(pair => countHitsOnSlope(grid, { right: pair[0], down: pair[1] }))
        .reduce((a, b) => a * b);
}

console.log(problem1(grid));
console.log(problem2(grid));