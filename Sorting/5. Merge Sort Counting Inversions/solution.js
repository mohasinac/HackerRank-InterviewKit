/*
In an array, , the elements at indices and (where ) form an inversion if . In other words, inverted elements and

are considered to be "out of order". To correct an inversion, we can swap adjacent elements.

Example

To sort the array, we must perform the following two swaps to correct the inversions:
The sort has two inversions: and .

Given an array

, return the number of inversions to sort the array.

Function Description

Complete the function countInversions in the editor below.

countInversions has the following parameter(s):

    int arr[n]: an array of integers to sort

Returns

    int: the number of inversions

Input Format

The first line contains an integer,

, the number of datasets.

Each of the next

pairs of lines is as follows:

    The first line contains an integer, 

, the number of elements in
.
The second line contains
space-separated integers,

    .

Constraints

Sample Input

STDIN       Function
-----       --------
2           d = 2
5           arr[] size n = 5 for the first dataset
1 1 1 2 2   arr = [1, 1, 1, 2, 2]
5           arr[] size n = 5 for the second dataset     
2 1 3 1 2   arr = [2, 1, 3, 1, 2]

Sample Output

0  
4   

Explanation

We sort the following

datasets:

is already sorted, so there are no inversions for us to correct.
We performed a total of swaps to correct inversions.

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

// Complete the countInversions function below.
function countInversions(arr) {
    const arrayCount = mergeSort(arr, 0, arr.length - 1);
    console.log(arrayCount.array);
    return arrayCount.count;
}

function mergeSort(array, start, end) {
    if (start === end) {
        const returnVal =  {
            array: [array[start]],
            count: 0
        }
        return returnVal;
    } else if (end - start === 1) {
        if (array[start] > array[end]) {
            const returnVal =  {
                array: [array[end], array[start]],
                count: 1
            }
            return returnVal;
        }
        const returnVal = {
            array: [array[start], array[end]],
            count: 0
        }
        return returnVal;
    }
    const mid = parseInt((start + end) / 2);
    const array1Count = mergeSort(array, start, mid);
    const array2Count = mergeSort(array, mid+1, end);
    
    let count = array1Count.count + array2Count.count;
    
    const array1 = array1Count.array;
    const array2 = array2Count.array;
    let i = 0;
    let j = 0;
    const mergedArray = [];
    while (true) {
        if (i < array1.length && array1[i] <= array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else if (j < array2.length && array1[i] > array2[j]) {
            mergedArray.push(array2[j]);
            j++;
            count+=array1.length-i;
        }
        
        if (i === array1.length) {
            for (let k = j; k < array2.length; k++) {
                mergedArray.push(array2[k]);
            }
            break;
        }
        if (j === array2.length ) {
            for (let k = i; k < array1.length; k++) {
                mergedArray.push(array1[k]);
            }
            break;
        } 
    }
    const finalReturn = {
        array: mergedArray,
        count
    };
    return finalReturn;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = countInversions(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
