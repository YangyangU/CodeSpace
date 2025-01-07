function jsonStringify(value, replacer = null, space = null) {
    // 缓存避免循环引用
    const seen = new WeakSet();
  
    function stringify(value) {
      // 处理基础类型
      if (value === null) return "null";
      if (value === undefined) return "undefined";
      if (typeof value === "boolean") return String(value);
      if (typeof value === "number") return isFinite(value) ? String(value) : "null";
      if (typeof value === "string") return `"${value.replace(/"/g, '\\"')}"`;
  
      // 处理对象和数组
      if (typeof value === "object") {
        // 检测循环引用
        if (seen.has(value)) throw new Error('cycle');
        seen.add(value);
  
        if (Array.isArray(value)) {
          const items = value.map((item) => stringify(item) || "null");
          return `[${items.join(",")}]`;
        }
  
        const keys = Object.keys(value);
        const items = keys.map((key) => {
          const val = stringify(value[key]);
          return val !== undefined ? `"${key}":${val}` : undefined;
        }).filter(Boolean);
        return `{${items.join(",")}}`;
      }
  
      // 函数、undefined、Symbol 会被忽略
      return undefined;
    }
  
    // 调用 stringify，格式化输出
    const result = stringify(value);
    if (space && typeof space === "number") {
      return JSON.stringify(JSON.parse(result), replacer, space); // 重新格式化
    }
    return result;
  }
  
  // 测试
  const obj = {
    a: "hello",
    b: 42,
    c: null,
    d: [1, "world", true],
    e: { nested: "object" },
    f: undefined,
    g: () => "function",
    h: Symbol("sym"),
  };
  obj.circular = obj; // 循环引用
  
  try {
    console.log(jsonStringify(obj)); // 将抛出循环引用错误
  } catch (e) {
    console.error(e.message);
  }
  
  console.log(jsonStringify({
    a: "hello",
    b: 42,
    c: null,
    d: [1, "world", true],
    e: { nested: "object" },
    f: undefined,
    g: () => "function",
    h: Symbol("sym"),
  })); // {"x":10,"y":[20,null,"test"]}
  console.log(jsonStringify(null)); // "null"
  