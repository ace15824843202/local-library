1. step1:建立一个新目录、执行 `express --view=pug` **本项目选用 Pug 视图模板引擎（Jade 是它不久前的曾用名），它是最流行的 Express / JavaScript 模板语言之一，**
2. step2：安装依赖 进入目录运行 `npm install`
3. step3: 启动运用 `SET DEBUG=express-locallibrary:* & npm start` **指定 DEBUG 变量可启用控制台日志记录/调试。例如，当你访问上面的页面时，你会看到调试输出：**
4. step4：配置自动化更新服务（不需要每次更改代码都重启服务） 1.全局安装自动化工具 `nodemon npm install -g nodemon`；2.在项目中安装本依赖 `npm install --save-dev nodemon`
5. step5：在 package.json 中配置运行命令`"devstart": "nodemon ./bin/www"`
6. strp6: 运行` SET DEBUG=express-locallibrary:* & npm run devstart` 或者 `npm run devstart`
7. 文件目录结束

```
cookie-parser：用于解析 cookie 头来填充 req.cookies（提供了访问 cookie 信息的便捷方法）。
debug：一个小型 node 调试程序，仿照 node 核心的调试技术建立。
http-errors：处理错误中间件。
morgan：node 专用 HTTP 请求记录器中间件。

```
