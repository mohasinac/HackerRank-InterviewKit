/*

    There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first

    letters of the infinite string.

    Example

    The substring we consider is , the first characters of the infinite string. There are

    occurrences of a in the substring.

    Function Description

    Complete the repeatedString function in the editor below.

    repeatedString has the following parameter(s):

        s: a string to repeat
        n: the number of characters to consider

    Returns

        int: the frequency of a in the substring

    Input Format

    The first line contains a single string,
    .
    The second line contains an integer,

    .

    Constraints

    For of the test cases,

        .

    Sample Input

    Sample Input 0

    aba
    10

    Sample Output 0

    7

    Explanation 0
    The first
    letters of the infinite string are abaabaabaa. Because there are a's, we return

    .

    Sample Input 1

    a
    1000000000000

    Sample Output 1

    1000000000000

*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let l = s.length;
    let count =0;
    let div = Math.floor(n / l);
    let rem = n % l;

    for(let i=0;i<l;i++){
        if(s[i]==='a'){
            count++;
        }
    }
    count = div * count;

    for(let j=0;j<rem;j++){
        if(s[j]==='a'){
            count++
        }
    }

    return Math.floor(count);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
