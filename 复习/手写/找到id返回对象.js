function findById(object, id) {
    if (object.id === id) {
        return object;
    }

    if (object.children) {
        for (const child of object.children) {
            const found = findById(child, id);
            if (found) {
                return found;
            }
        }
    }

    return undefined;
}