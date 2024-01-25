function dayOfYear(dateString) {
    // 将字符串转换为Date对象
    var date = new Date(dateString);
    
    // 获取当年的第一天（1月1日）
    var startDate = new Date(date.getFullYear(), 0, 1);

    // 计算两个日期之间的差值（以毫秒为单位），然后除以一天的毫秒数得到天数差
    var diff = (date - startDate) + ((startDate.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 24 * 60 * 60 * 1000; 

    return Math.floor(diff / oneDay) + 1;
}

var dayOfYear = function(date) {
    const d = new Date(date);
    return (d - new Date(d.getFullYear(), 0, 0)) / 86400000;
};
