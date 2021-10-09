//common js 暴露
module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    //关掉默认的语法检查
    lintOnSave: false,
    // //开启代理服务器(方式一)
    // devServer:{
    //     proxy: 'http://localhost:5001', //将请求转发给端口号5001，注意这里只能配置单个代理，不能配置多个代理
    // }
    //开启代理服务器(方式二) 多个代理
    devServer: {
        proxy: {
            //当请求的前缀是api，直接转发请求到服务器5001端口
            '/api': {
                target: 'http://localhost:5001',
                ws: true, //用于支持websocket
                changeOrigin: true, //用于控制请求头中host的值
                pathRewrite:{
                    //把请求中含有的api替换成空字符串
                    '^/api': '',
                }
            },
            '/demo': {
                target: 'http://localhost:5002',
                //不写 ws和changeOrigin默认为true
                pathRewrite: {
                    '^/demo':'',
                }
            }
        }
    }
}
