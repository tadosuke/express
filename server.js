const express = require('express');
const path = require('path');

const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// 静的ファイルを提供（フロントエンドを /public に配置）
app.use(express.static(path.join(__dirname, 'public')));

// ルーティング
app.use('/api', apiRoutes);

// サーバー起動
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
