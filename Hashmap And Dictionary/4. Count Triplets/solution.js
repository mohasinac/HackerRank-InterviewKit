/*
You are given an array and you need to find number of tripets of indices such that the elements at those indices are in geometric progression for a given common ratio and

.

For example,
. If , we have and at indices and

.

Function Description

Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given

as an integer.

countTriplets has the following parameter(s):

    arr: an array of integers
    r: an integer, the common ratio

Input Format

The first line contains two space-separated integers
and , the size of and the common ratio.
The next line contains space-seperated integers

.

Constraints

Output Format

Return the count of triplets that form a geometric progression.

Sample Input 0

4 2
1 2 2 4

Sample Output 0

2

Explanation 0

There are
triplets in satisfying our criteria, whose indices are and

Sample Input 1

6 3
1 3 9 9 27 81

Sample Output 1

6

Explanation 1

The triplets satisfying are index
, , , , and

.

Sample Input 2

5 5
1 5 5 25 125

Sample Output 2

4

Explanation 2

The triplets satisfying are index
, , , .

*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let count = 0
    let dict = {}
    let dictPairs = {}

    for(let i = arr.length - 1;i>=0;i--){
        if(dictPairs[arr[i]*r]){
            count = count + dictPairs[arr[i] * r]
        }
        if(dict[arr[i]*r]){
            dictPairs[arr[i]]  = ((dictPairs[arr[i]])? dictPairs[arr[i]] : 0 ) + dict[arr[i]*r]
        }
        dict[arr[i]] = (dict[arr[i]])?dict[arr[i]] + 1: 1;
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
