export const getCookie = (key: string): string => {
    const obj: { [key: string]: string } = document.cookie
        .split(';')
        .reduce((prev, curr) => {
            const [key, ...vals] = curr.split('=');
            return { ...prev, [key.trim()]: vals.join('=') };
        }, {});
    return obj[key];
};
