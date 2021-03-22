// 类型注解：一种轻量级的为函数或者变量添加的约束
(function () {
    // str 是 string 类型
    function showMsg(str) {
        return '床前明月光' + str;
    }
    var msg = '疑是地上霜';
    // msg 是一个数组
    // let msg = [10, 20, 30]
    // 如果是数组的类型，就会出错
    console.log(showMsg(msg));
})();
