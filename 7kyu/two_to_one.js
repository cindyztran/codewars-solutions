// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//Examples 
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let s3 = [];
    for (let i = 0; i < s1. length; i++) {
        if (s3.indexOf(s1[i]) === -1) {
            s3.push(s1[i]);
        }
    }
    for (let j = 0; j < s2.length; j++) {
        if (s3.indexOf(s2[i]) === -1) {
            s3.push(s2[j]);
        }
    }
    return s3.sort().join('');
}

//Time: 726ms