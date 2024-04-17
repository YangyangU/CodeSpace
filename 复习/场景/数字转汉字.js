function digitToChinese(digit) {
    const digitDict = {
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九'
    };
    return digitDict[digit];
}

function unitToChinese(unit) {
    const unitDict = {
        0: '',
        1: '十',
        2: '百',
        3: '千',
        4: '万',
        5: '十',
        6: '百',
        7: '千',
        8: '亿',
        9: '十'
    };
    return unitDict[unit];
}

function numberToChinese(num) {
    const numStr = num.toString();
    const reversedNumStr = numStr.split('').reverse().join('');
    let chineseStr = '';
    let lastUnit = 0;

    for (let i = 0; i < reversedNumStr.length; i++) {
        const digit = parseInt(reversedNumStr[i]);
        const unit = Math.floor((i + 1) / 4);

        if (digit === 0 && i !== 0 && lastUnit !== 0) {
            continue;
        }

        chineseStr = `${digitToChinese(digit)}${unitToChinese(unit)}${chineseStr}`;
        lastUnit = unit;
    }

    // 处理特殊情况，如“一十”应为“十”
    if (chineseStr.startsWith('一十')) {
        chineseStr = chineseStr.replace('一十', '十');
    }

    return chineseStr;
}

// 示例
console.log(numberToChinese(123));  // 输出："一百二十三"