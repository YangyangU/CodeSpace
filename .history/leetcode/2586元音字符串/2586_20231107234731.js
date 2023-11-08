words = ["are","amy","u"], left = 0, right = 2


function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

function vowelStrings(words, left, right) {
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (isVowel(words[i][0]) && isVowel(words[i][words[i].length - 1])) {
            count++;
        }
    }
    return count;
}

console.log(vowelStrings(words, left, right)); 


// var vowelStrings = function(words, left, right) {
//     while (left < right) {
//         if(words[left].charAt(0) = words[left].charAt(words[left].length-1)){

    
//         }
//     }
// };

