function get(object, path) {
    let pathArr = path.split('.')
    let result = object;
    for (let i = 0; i < pathArr.length; i++) {
        result = result == null ? undefined : result[pathArr[i]];
        if (result === undefined) {
            return undefined;
        }
    }
    return result;
}