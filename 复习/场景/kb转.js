const fn = (byte) => {
    const units = ['b', 'kb', 'mb', 'gb'];
    const sizes = [1, 1024, 1024**2, 1024**3];
    for (let i = sizes.length - 1; i >= 0; i--) {
        if (byte >= sizes[i]) {
            const value = (byte / sizes[i]).toFixed(2);
            return `${value}${units[i]}`;
        }
    }
    return `${byte}b`;
}

console.log(fn(1024));