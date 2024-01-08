ransomNote = "aab", magazine = "aa"

var canConstruct = function(ransomNote, magazine) {
    let r = ransomNote.split('')
    let m = magazine.split('')
    r.forEach((item)=>{
        if(m.indexOf(item)!==null){
            m.splice(m.indexOf(item), 1)
        }
    })
    if(r.length == 0 && m.length >= 0){
        return true
    }
    return false
};

console.log(canConstruct(ransomNote,magazine));


function canConstruct(ransomNote, magazine) {
    const map = new Map();
    for (const char of magazine) {
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    
    for (const char of ransomNote) {
        if (!map.has(char)) {
            return false;
        } else {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                map.delete(char);
            }
        }
    }
    
    return true;
}

// 这段代码是一个用于判断ransomNote字符串是否可以由magazine字符串构成的函数。

// 函数首先创建了一个Map对象map，用于存储magazine字符串中每个字符的出现次数。

// 然后，函数使用for循环遍历magazine字符串，对于每个字符，如果map中没有该字符的键，则在map中创建该键并初始化值为1；如果map中已有该字符的键，则将该键对应的值加1。

// 接下来，函数使用另一个for循环遍历ransomNote字符串。对于每个字符，如果map中没有该字符的键，则返回false，表示ransomNote中存在无法由magazine构成的字符；如果map中有该字符的键，则将该键对应的值减1，并且如果减1后的值等于0，则从map中删除该键。

// 最后，如果for循环正常结束，则返回true，表示ransomNote中的所有字符都可以由magazine构成。

// 这个函数的时间复杂度为O(n+m)，其中n为ransomNote的长度，m为magazine的长度。