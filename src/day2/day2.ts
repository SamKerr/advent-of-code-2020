import * as fs from 'fs';

interface PasswordPolicy {
    ruleSubject: string;
    lowerBound: number;
    upperBound: number;
    password: string;
}
const inputData = fs.readFileSync('input.txt').toString();
const inputArray: PasswordPolicy[] = inputData.split("\r\n").map(x => {
    const spacedSplit = x.split(' ');
    const lowerBound = Number(spacedSplit[0].split('-')[0]);
    const upperBound = Number(spacedSplit[0].split('-')[1]);
    const ruleSubject = spacedSplit[1][0];
    const password = spacedSplit[2];
    return {
        ruleSubject,
        lowerBound,
        upperBound,
        password,
    }
});

const betweenInclusive = (x: number, lower: number, upper: number) => lower <= x && x <= upper;
const problem1Policy = (policy: PasswordPolicy): boolean => {
    let counter = 0;
    for (let c of policy.password) {
        if (c === policy.ruleSubject) {
            counter++;
        }
    }
    return betweenInclusive(counter, policy.lowerBound, policy.upperBound)
}

// Time: O(n), Space: (1)
const problem1 = (arr: PasswordPolicy[]) => arr.filter(policy => problem1Policy(policy)).length;

const XOR = (a: boolean, b: boolean) => a ? !b : b
const problem2Policy = (policy: PasswordPolicy): boolean =>
    XOR(policy.password[policy.lowerBound - 1] === policy.ruleSubject, policy.password[policy.upperBound - 1] === policy.ruleSubject)

// Time: O(n), Space: (1)
const problem2 = (arr: PasswordPolicy[]) => arr.filter(policy => problem2Policy(policy)).length;

console.log(problem1(inputArray));
console.log(problem2(inputArray));
