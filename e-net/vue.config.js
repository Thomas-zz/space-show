module.exports = {
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