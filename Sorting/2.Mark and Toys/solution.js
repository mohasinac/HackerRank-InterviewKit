/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

Note Each toy can be purchased only once.

Example

The budget is units of currency. He can buy items that cost for , or for units. The maximum is

items.

Function Description

Complete the function maximumToys in the editor below.

maximumToys has the following parameter(s):

    int prices[n]: the toy prices
    int k: Mark's budget

Returns

    int: the maximum number of toys

Input Format

The first line contains two integers,
and , the number of priced toys and the amount Mark has to spend.
The next line contains space-separated integers

Constraints




A toy can't be bought multiple times.

Sample Input

7 50
1 12 5 111 200 1000 10

Sample Output

4

Explanation

He can buy only
toys at most. These toys have the following prices: .
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

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let count = 0;
    prices.sort( (a,b)=>(a-b) );
    console.log(prices);
    for(let i=0;i<prices.length;i++){
        if(k<prices[i]){
            break;
        }
        k = k - prices[i];
        count++;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
