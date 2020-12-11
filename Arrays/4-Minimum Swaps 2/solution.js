/*
    You are given an unordered array consisting of consecutive integers

    [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

    For example, given the array

    we perform the following steps:

    i   arr                         swap (indices)
    0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
    1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
    2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
    3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
    4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
    5   [1, 2, 3, 4, 5, 6, 7]

    It took

    swaps to sort the array.

    Function Description

    Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

    minimumSwaps has the following parameter(s):

        arr: an unordered array of integers

    Input Format

    The first line contains an integer,
    , the size of .
    The second line contains space-separated integers

    .

    Constraints

    Output Format

    Return the minimum number of swaps to sort the given array.

    Sample Input 0

    4
    4 3 1 2

    Sample Output 0

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

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swap=0;
        for(let i=0;i<arr.length;i++){
            if(i+1!=arr[i]){
                let t=i;
                while(arr[t]!=i+1){
                    t++;  
                }
                let temp=arr[t]; 
                arr[t]=arr[i];
                arr[i]=temp;
                swap++;
            }
        }
    return swap;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
