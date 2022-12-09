var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
/* 
它使用 require() 导入了一些实用 node 库，
其中包括之前用 NPM 下载的 express、http-errors、morgan 和 cookie-parser，
还有一个 path 库，它是用于解析文件和目录的核心 node 库。

以下设置有顺序要求

*/

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
/*  视图引擎设定 
设置引擎分两步：首先设置 'views' 以指定模板的存储文件夹（此处设为子文件夹 /views）。
然后设置 'view engine' 以指定模板库（本例中设为“pug” ）。 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* ---------下一组 app.use() 调用将中间件库添加进请求处理链 ------*/
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//使用 express.static 中间件将项目 /public 目录下所有静态文件托管至根目录。
app.use(express.static(path.join(__dirname, "public")));

/* ----所有中间件都已设置完毕，现在把（之前导入的）路由处理器添加到请求处理链中。从而为网站的不同部分定义具体的路由---- */
app.use("/", indexRouter);
app.use("/users", usersRouter);

/* -----------最后一个中间件为错误和 HTTP 404 响应添加处理方法。---------- */

// catch 404 and forward to error handler 捕获 404 并抛给错误处理器
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler 错误处理器
app.use(function (err, req, res, next) {
  // set locals, only providing error in development 设置 locals，只在开发环境提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page 渲染出错页面
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
