/*
    A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if left rotations are performed on array , then the array would become

    . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

    Given an array
    of integers and a number, , perform

    left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

    Function Description

    Complete the function rotLeft in the editor below.

    rotLeft has the following parameter(s):

        int a[n]: the array to rotate
        int d: the number of rotations

    Returns

        int a'[n]: the rotated array

    Input Format

    The first line contains two space-separated integers
    and , the size of and the number of left rotations.
    The second line contains space-separated integers, each an

    .

    Constraints

    Sample Input

    5 4
    1 2 3 4 5

    Sample Output

    5 1 2 3 4


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

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let result = [];
    for(let i=d;i<a.length;i++){
        result.push(a[i]);
    }
    for(let i=0;i<d;i++){
        result.push(a[i])
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
