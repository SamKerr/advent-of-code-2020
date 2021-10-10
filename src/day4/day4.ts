import * as fs from 'fs';

const inputData = fs.readFileSync('input.txt').toString().split("\r\n\r\n");
const day4Question1: any = inputData.map(text => text.split('\r\n').flatMap(row => row.split(' ').map(segment => segment.split(':')))).map(passport => passport.map(pair=> pair[0]==="cid" ? 0 : 1).reduce((a, b) => a + b, 0)==7?1:0).reduce((a,b) => a+b,0); 
console.log(day4Question1);

const day4Question2 = inputData.map(text => text.split('\r\n').flatMap(row => row.split(' ').map(segment => segment.split(':')))).map(passport => passport.map(pair=> pair[0]=="byr" ? Number(pair[1])>=1920 && Number(pair[1]) <= 2002 ? 1 : 0 : pair[0]=="iyr" ? Number(pair[1])>=2010 && Number(pair[1]) <= 2020 ? 1 : 0 : pair[0]=="eyr" ? Number(pair[1])>=2020 && Number(pair[1]) <= 2030 ? 1 : 0 : pair[0]=="hgt" ? pair[1].endsWith('cm') ? Number(pair[1].split('cm')[0]) > 150 && Number(pair[1].split('cm')[0]) < 193 ? 1 : 0 : pair[1].endsWith('in') ? Number(pair[1].split('in')[0]) > 59 && Number(pair[1].split('in')[0]) < 76 ? 1 : 0 : 0 : pair[0]=="hcl" ? /^#[a-f0-9]{6,}$/.test(pair[1])  ? 1 : 0 : pair[0]=="ecl" ? ["amb", "blu", "brn", "gry", "grn", "hzl" ,"oth"].includes(pair[1]) ? 1 : 0 : pair[0]=="pid" ? /^[0-9]{9,}$/.test(pair[1]) ? 1:0 : 0).reduce((a, b) => a + b, 0)==7 ? 1 : 0).reduce((a,b) => a+b, 0);
console.log(day4Question2);
