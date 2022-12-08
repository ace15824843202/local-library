/* 
step3:调用require函数使用express

它导入了 "express" 模块并用它创建了一个服务器（app）来监听 8000 端口，
并且在控制台打印了一条信息以提示测试服务器的正确 URL。app.get() 函数只响应对特定路径（'/'）的 HTTP GET 请求，
此处的响应就是发送 "Hello express!"。

 */
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello express");
});
app.listen(8000, () => {
  console.log("正在监听8000端口");
});
