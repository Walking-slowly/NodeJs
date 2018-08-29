// 利用http内置模块开启服务


const http = require('http')

http.createServer(function(req, res){
    // req接受请求数据 ， res响应请求数据

    // 处理业务逻辑
}).listen(8080) // 监听8080端口

console.log('服务器运行在http://127.0.0.1:8080')