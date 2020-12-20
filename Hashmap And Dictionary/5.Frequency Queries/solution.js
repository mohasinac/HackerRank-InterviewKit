/*
You are given queries. Each query is of the form two integers described below:
- : Insert x in your data structure.
- : Delete one occurence of y from your data structure, if present.
- : Check if any integer is present whose frequency is exactly

. If yes, print 1 else 0.

The queries are given in the form of a 2-D array
of size where contains the operation, and contains the data element. For example, you are given array

. The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1

Return an array with the output:

.

Function Description

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a

if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):

    queries: a 2-d array of integers

Input Format

The first line contains of an integer
, the number of queries.
Each of the next lines contains two integers denoting the 2-d array

.

Constraints

All

Output Format

Return an integer array consisting of all the outputs of queries of type

.

Sample Input 0

8
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2

Sample Output 0

0
1

Explanation 0

For the first query of type
, there is no integer whose frequency is (). So answer is .
For the second query of type , there are two integers in whose frequency is (integers = and ). So, the answer is

.

Sample Input 1

4
3 4
2 1003
1 16
3 1

Sample Output 1

0
1


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

// Complete the freqQuery function below.
function freqQuery(queries) {
    const result = [];
    const hash = {};
    const freq = [];

    for (let i = 0; i < queries.length; i += 1) {
        const [action, value] = queries[i];
        const initValue = hash[value] || 0;

        if (action === 1) {
            hash[value] = initValue + 1;

            freq[initValue] = (freq[initValue] || 0) - 1;
            freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
        }

        if (action === 2 && initValue > 0) {
        hash[value] = initValue - 1;

        freq[initValue - 1] += 1;
        freq[initValue] -= 1;
        }

        if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
    }

  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
