module.exports = {
    // 基本路径
    publicPath:"./",
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: './static',
    // webpack-dev-server 相关配置
    productionSourceMap: false,
    devServer: {
        // port: 8888,
        // ...
    },
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',  // @ 在这里代表src路径
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    },

    // lintOnSave:false,
    // devServer:{
    //     host: '10.60.0.140',  // ipv4
    //     port:8081,
    //     https:false,
    //     open:false,
    //     proxy:null
    // }
}