/*
    There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus or

    . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

    For each game, you will get an array of clouds numbered
    if they are safe or

    if they must be avoided.

    Example
    Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices and . They could follow these two paths: or . The first path takes jumps while the second takes . Return

    .

    Function Description

    Complete the jumpingOnClouds function in the editor below.

    jumpingOnClouds has the following parameter(s):

        int c[n]: an array of binary integers

    Returns

        int: the minimum number of jumps required

    Input Format

    The first line contains an integer
    , the total number of clouds. The second line contains space-separated binary integers describing clouds where

    .

    Constraints

    Output Format

    Print the minimum number of jumps needed to win the game.

    Sample Input 0

    7
    0 0 1 0 0 1 0

    Sample Output 0

    4


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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let n = c.length;
    let count=0;
    let i=0;
    for(i=0;i<n -1 ;i++){
        //if we did  jump once and we get a 0 then we can jump twice to see if we can as well
        if(c[i]==0){
            i++;
        }
        count++;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
