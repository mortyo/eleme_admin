module.exports = {
    //打包路径
    outputDir: '../eleme_server/public',
    //代理服务器
    devServer: {
        proxy: 'http://localhost:8001'
    },
    //部署应用包时的基本 URL
    // publicPath: process.env.NODE_ENV === 'production'? '/admin/': '/'
}