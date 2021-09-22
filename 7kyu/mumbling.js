// This time no story, no theory. The examples below show you how to write function accum:
//Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let result = [];
    
    for (let i = 0; i < s.length; i++) {
        const firstChar = s[i].toUpperCase();
        const repeatingChar = s[i].toLowerCase().repeat(i);
        result.push(firstChar + repeatingChar);
    }
    return result.join('-')
}

//Time: 785ms