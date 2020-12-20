/*
    Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

    Example
    The list of all anagrammatic pairs is at positions

    respectively.

    Function Description

    Complete the function sherlockAndAnagrams in the editor below.

    sherlockAndAnagrams has the following parameter(s):

        string s: a string

    Returns

        int: the number of unordered anagrammatic pairs of substrings in

    Input Format

    The first line contains an integer
    , the number of queries.
    Each of the next lines contains a string

    to analyze.

    Constraints



    contains only lowercase letters in the range ascii[a-z].

    Sample Input 0

    2
    abba
    abcd

    Sample Output 0

    4
    0


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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let anag = 0
    let map = {}
    let st = []
    for(let i=0;i<s.length;i++){
        st.push(s[i]);
    }
    for(let i=0;i<s.length;i++){
        for(let j=0;j<(s.length - i);j++){
            let s1 = (st.slice(j,j+i+1).sort()).join();
            map[s1] = (map[s1])? map[s1]+1 : 1;
        }
    }
    let keys = Object.keys(map);
    for(let key of keys){
        anag += Math.floor(((map[key] - 1) * map[key] )/2)
    }
    return anag;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}

/**
 
sample debug 

    [ 'c' ]

    c

    1

    [ 'd' ]

    d

    1

    [ 'c' ]

    c

    2

    [ 'd' ]

    d

    2

    [ 'c', 'd' ]

    c,d

    1

    [ 'd', 'c' ]

    c,d

    2

    [ 'c', 'd' ]

    c,d

    3

    [ 'c', 'd', 'c' ]

    c,c,d

    1

    [ 'd', 'c', 'd' ]

    c,d,d

    1

    [ 'c', 'd', 'c', 'd' ]

    c,c,d,d

    1
    
 */