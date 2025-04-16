// index.js
const express = require('express');
const app = express();

// 设置一个简单的 GET 路由
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 导出 app 实例
module.exports = app;

// 如果你想启动服务器，可以添加下面的代码
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
