module.exports = {
    // 继承ESlint特性
    extends:["eslint:recommended"],
    env:{
        node:true, // 启用node全局变量
        browser:true // 启用浏览器环境变量
    },
    parserOptions:{
        ecmaVersion:6,
        sourceType:'module'
    },
    rules:{
        'no-var':2
    }

}