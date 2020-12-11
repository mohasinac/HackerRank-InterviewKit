/*
    Given a 2D Array,

    :

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0

    An hourglass in
    is a subset of values with indices falling in this pattern in

    's graphical representation:

    a b c
    d
    e f g

    There are
    hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be

    .

    Example

    -9 -9 -9  1 1 1 
    0 -9  0  4 3 2
    -9 -9 -9  1 2 3
    0  0  8  6 6 0
    0  0  0 -2 0 0
    0  0  1  2 4 0

    The

    hourglass sums are:

    -63, -34, -9, 12, 
    -10,   0, 28, 23, 
    -27, -11, -2, 10, 
    9,  17, 25, 18

    The highest hourglass sum is
    from the hourglass beginning at row , column

    :

    0 4 3
    1
    8 6 6


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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let hgSum = Number.NEGATIVE_INFINITY;
    let maxX = 3
    let maxY = 3
    for(let i=0;i<=maxY;i++){
        for(let j=0;j<=maxX;j++){
            let sum = arr[i][j]+arr[i][j+1]+arr[i][j+2];
            sum = sum + arr[i+1][j+1];
            sum = sum + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(hgSum < sum){
                hgSum = sum;
            }
        }
    }
    return hgSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
