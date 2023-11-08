const express = require('express');
const dotenv = require('dotenv');

const api = require('./routes/api');


dotenv.config({path: '.env'});

const app = express();

// 启动服务器
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('server error:', err);
});

// 路由
app.use('/api', api)