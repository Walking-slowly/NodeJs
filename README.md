# <p align = "center"> NodeJs </p>

> node中实现不同的功能需要引入不同的模块，模块被分为三种：1.核心模块 2.第三方模块 3.自定义模块。一下是对模块功能的学习记录。一边学习node一边记录，后续继续补充。

#### nodejs学习记录

1. exports和module.exports

    > 初学node有些分不清exports和module.exports的区别，既然存在exports，为什么又要存在module.exports，自己也手动试过，无论用哪种方式，引入进来的都是一样的，然后找了很多文档，终于有了自己的理解

    ```js
        
         //首先列如

        var a = {b:1}
        var b = a
        console.log(a,b) //打印出来的a,b都是一样的{b:1}
          
         //如果我修改b

        b = {b: 2}
        console.log(a,b) // 都会打印出{b:2} // 因为b只是对a的引用，a和b都指向同一个地方
          
         //如果我重新赋值

        var b = {b:3}
        console.log(a,b) // a{b:2} b{b:3} //重新赋值b，指向另一个引用
        
         // module.exports 初始值为一个空对象 {}
         // exports 是指向的 module.exports 的引用
         // require() 返回的是 module.exports 而不是 exports

        exports.aaa = aaaa
        exports.bbb = function () {

        }
        
        // 结合上面的来看，每次exports的是重新指向另一个引用，但是module.exports里面没有改变

        module.exports = {
            aaa: function () {}
        }
      
    ```

#### 核心模块

1. http
    > node开启服务模块
    ```js
       const http = require('http');

       const serverHandle = function (req, res) {
            // 处理请求业务逻辑

       }

       const server = http.createServer(serverHandle) // 开启服务

        // server.listen(port,[host],[backlog],[callback])
        /*
            port:       监听的端口号，0表示为服务器随机分配一个端口号。
            host:       监听的地址，默认为本机（localhost）
            backlog：   指定位于[等待队列中]的客户端连接的[最大数量]。超过此数量，则服务器拒绝新的客户端请求。
            callback：  开启监听后触发的回调函数。当服务器开启监听后会触发listening事件，可以通过监听listening事件来代替callback回调函数。
        */

        server.listen(3000, 127.0.0.1)
    ```

#### 第三方模块

1. body-parser

    > 前端发送GET和POST（至于其他请求，不了解），如果是GET请求，在node中拿到数据是需要到**requset.query**下获取，如果是POST请求则需要到**requset.body**，但是如果在express框架中默认是不处理body中的信息，所以需要引入**body-parser**模块，如果是用的http模块，则需要自己手动收集数据

    ```js
        const http = require('http');
        
        http.createServer(function(req, res){
             // 定义了一个post变量，用于暂存请求体的信息

            var post = '';     
        
             // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中

            req.on('data', function(chunk){    
                post += chunk;
            });

            
        }).listen(3000, "127.0.0.1");
    ```

