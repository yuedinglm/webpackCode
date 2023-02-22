const path = require("path")

module.exports = {
    // 入口
    entry:"./src/main.js",
    // 输出
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js",
    },
    module:{
        // loader 的配置
        rules:[

        ],
    },
    plugins:[

    ],
    mode:'development'
}