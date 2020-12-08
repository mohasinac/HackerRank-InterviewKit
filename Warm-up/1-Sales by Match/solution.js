/*

    Sales by Match

        Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

    For example, there are
    socks with colors . There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is

    .

    Function Description

    Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

    sockMerchant has the following parameter(s):

    n: the number of socks in the pile
    ar: the colors of each sock

    Input Format

    The first line contains an integer
    , the number of socks represented in .
    The second line contains space-separated integers describing the colors

    of the socks in the pile.

    Constraints

    where

    Output Format

    Return the total number of matching pairs of socks that Alex can sell.

    Sample Input

    9
    10 20 20 10 10 30 50 10 20

    Sample Output

    3


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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    let dict = {};
    for(let i=0;i<n; i++){
        if(dict[ar[i]]){
            dict[ar[i]] =0;
            pairs++;
        }
        else{
            dict[ar[i]] = 1;
        }
    }
    return pairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
