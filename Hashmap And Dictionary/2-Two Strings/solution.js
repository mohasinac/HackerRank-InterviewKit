/*
    Given two strings, determine if they share a common substring. A substring may be as small as one character.

    Example

    These share the common substring

    .


    These do not share a substring.

    Function Description

    Complete the function twoStrings in the editor below.

    twoStrings has the following parameter(s):

        string s1: a string
        string s2: another string

    Returns

        string: either YES or NO

    Input Format

    The first line contains a single integer

    , the number of test cases.

    The following

    pairs of lines are as follows:

        The first line contains string 

    .
    The second line contains string

        .

    Constraints

    and
    consist of characters in the range ascii[a-z].

    Output Format

    For each pair of strings, return YES or NO.

    Sample Input

    2
    hello
    world
    hi
    world

    Sample Output

    YES
    NO

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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let dict = {};
    for(let i=0;i<s1.length;i++){
        if(dict[s1[i]]){
            dict[s1[i]] = dict[s1[i]] + 1;
        }
        else{
            dict[s1[i]] = 1;
        }
    }
    for(let i=0;i<s2.length;i++){
        if(dict[s2[i]]){
            return "YES";
        }
    }
    return "NO";
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
