/*
    Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

    Example

    Queries are interpreted as follows:

        a b k
        1 5 3
        4 8 7
        6 9 1

    Add the values of
    between the indices and

    inclusive:

    index->	 1 2 3  4  5 6 7 8 9 10
        [0,0,0, 0, 0,0,0,0,0, 0]
        [3,3,3, 3, 3,0,0,0,0, 0]
        [3,3,3,10,10,7,7,7,0, 0]
        [3,3,3,10,10,8,8,8,1, 0]

    The largest value is

    after all operations are performed.

    Function Description

    Complete the function arrayManipulation in the editor below.

    arrayManipulation has the following parameters:

        int n - the number of elements in the array
        int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

    Returns

        int - the maximum value in the resultant array

    Input Format

    The first line contains two space-separated integers
    and , the size of the array and the number of operations.
    Each of the next lines contains three space-separated integers , and

    , the left index, right index and summand.

    Constraints

    Sample Input

    5 3
    1 2 100
    2 5 100
    3 4 100

    Sample Output

    200
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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let arr = new Array(n+1).fill(0);
    
    for(let i=0;i< queries.length ;i++){
        let a = queries[i][0] - 1
        let b = queries[i][1]
        let k = queries[i][2]
        arr[a] += k
        arr[b] -= k
    }

    let max_value = 0
    let running_count = 0
    for(let i=0;i<n;i++){
        running_count += arr[i]
        if (running_count > max_value){
            max_value = running_count
        }
    }
    return max_value;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
