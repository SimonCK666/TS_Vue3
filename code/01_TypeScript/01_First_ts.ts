(()=>{
    // str 参数是 string 类型
    function sayHi(str:string)
    {
        return'hi!' + str
    }

    let text = 'Little Lee'
    console.log(sayHi(text))
})()

// 使用 tsc 编译 ts 文件， 自动生成 js 文件

// ts 文件中如果直接书写 js 代码，那么在 html 文件中直接引入 ts 文件，在 chome 中是可以直接使用的

// 如果 ts 文件中有了 ts 的语法代码， 那么就需要把这个 ts 文件编译成 js 文件， 在 html 文件中引入 js 的文件来使用

// ts 文件中的函数中的形参，如果使用了某个类型进行修饰，那么最终在编译的 js 文件中是没有这个类型的

// ts 文件中的变量使用的是 let 进行修饰， 编译的 js 文件中的修饰如就变成了 var
