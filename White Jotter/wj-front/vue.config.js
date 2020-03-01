module.exports = {

    // publicPath: '/dist/',  //打包运行环境的根路径为/dist

    devServer: {  // 开发调试服务器配置项
        open: false,  // npm run serve后自动打开页面
        host: 'localhost',  // 匹配本机IP地址
        port: 8080,  // 开发服务器运行端口号
        compress: true,  // 启用静态资源压缩算法
        disableHostCheck: true
        // proxy:{
        //     "/api": {
        //         target: 'http://localhost:8443',//要访问的接口域名
        //         changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，
        //                             //然后发送数据请求的数据，并同时接受请求的数据
        //                             //这样服务端和服务端进行数据的交互就不会有跨域的问题
        //     }
        // }
    }

}