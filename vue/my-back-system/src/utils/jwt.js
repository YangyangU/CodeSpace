export function sign(payload, secret='666') {
    // 将 payload 转换为 JSON 字符串
    const base64Payload = btoa(JSON.stringify(payload));

    // 创建一个简单的签名，这里简单地将 payload 和 secret 连接起来
    const signature = btoa(`${base64Payload}.${secret}`);

    // 返回编码后的 JWT
    return `${base64Payload}.${signature}`;
}

export function verify(token, secret='666') {
    // 将 token 拆分成 payload 和 signature 部分
    const [base64Payload, base64Signature] = token.split('.');

    // 解码 payload
    // const decodedPayload = JSON.parse(atob(base64Payload));

    // 解码 signature
    const decodedSignature = atob(base64Signature);

    // 重新计算签名
    const expectedSignature = btoa(`${base64Payload}.${secret}`);

    // 检查签名是否匹配
    if (decodedSignature === expectedSignature) {
        // 签名验证通过，返回 payload
        return true
    } else {
        // 签名验证失败，返回 null
        return false
    }
}
