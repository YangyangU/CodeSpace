function parseURL(url) {
    const parts = url.split('?');
    const path = parts[0];
    const protocol = parts[0].split(':')[0]
    const port = parts[0].replace(/[^\d]/g,'');
    const query = parts[1] ? parts[1].split('&') : [];

    const result = {
        path: path,
        protocol: protocol,
        port: port,
        query: {}
    };

    query.forEach(item => {
        const [key, value] = item.split('=');
        result.query[key] = value;
    });

    return result;
}

// 示例用法
const url = 'https://www.example.com:3000/search?q=javascript&sort=relevant';
console.log(parseURL(url));