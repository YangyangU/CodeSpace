function groupAnagrams(strs) {
    var groupsDictionary = new Map();
    for (var currentString of strs) {
        var sortedCharacters = Array.from(currentString).sort();
        var uniqueKey = sortedCharacters.join('');
        var groupOfStrings = groupsDictionary.get(uniqueKey);
        if (!groupOfStrings) {
            groupOfStrings = [];
        }
        groupOfStrings.push(currentString);
        groupsDictionary.set(uniqueKey, groupOfStrings);
    }
    return Array.from(groupsDictionary.values());
}