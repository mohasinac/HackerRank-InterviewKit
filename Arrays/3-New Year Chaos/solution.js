/*
    It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue. Initial positions increment by from at the front of the line to

    at the back.

    Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if
    and bribes , the queue will look like this:

    .

    Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state. If anyone has bribed more than two people, the line is too chaotic to compute the answer.

    Function Description

    Complete the function minimumBribes in the editor below.

    minimumBribes has the following parameter(s):

        int q[n]: the positions of the people after all bribes

    Returns

        No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 

        people.

    Input Format

    The first line contains an integer

    , the number of test cases.

    Each of the next
    pairs of lines are as follows:
    - The first line contains an integer , the number of people in the queue
    - The second line has

    space-separated integers describing the final state of the queue.

    Constraints

    Subtasks

    For
    score
    For score

    Sample Input

    2
    5
    2 1 5 3 4
    5
    2 5 1 3 4

    Sample Output

    3
    Too chaotic


*/

'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let ans = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        for (let j = max(0, q[i] - 2); j < i; j++)
            if (q[j] > q[i]) ans++;
    }
    console.log(ans);
}
function max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
