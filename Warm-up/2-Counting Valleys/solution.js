/*
    An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, , or a downhill, step. Hikes always start and end at sea level, and each step up or down represents a

    unit change in altitude. We define the following terms:

        A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
        A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

    Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

    Example

    The hiker first enters a valley units deep. Then they climb out and up onto a mountain

    units high. Finally, the hiker returns to sea level and ends the hike.

    Function Description

    Complete the countingValleys function in the editor below.

    countingValleys has the following parameter(s):

        int steps: the number of steps on the hike
        string path: a string describing the path

    Returns

        int: the number of valleys traversed

    Input Format

    The first line contains an integer
    , the number of steps in the hike.
    The second line contains a single string , of

    characters that describe the path.

    Constraints

    Sample Input

    8
    UDDDUDUU

    Sample Output

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

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let count=0;
    let i=0;
    let altitude = 0;
    while(i<steps){
        if(path[i]==='D'){
            altitude--;
        }
        else{
            altitude++;
        }
        if(altitude==0 && path[i]=='U'){
            count++;
        }
        i++;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
