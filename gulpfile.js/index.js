const { series, parallel } = require('gulp');
// 各種ビルドタスク
const { ejs } = require('./ejs');
const { images } = require('./images');
// 変更監視とプレビューの起動
const { watch } = require('./watch');
const { server } = require('./server');
// コンフィグ
const config = require('./config');
const templateEngine = config.useEjs ? ejs : pug;

// 並行で各種buildタスクを実行し、完了後にローカルサーバーを起動
exports.default = series(
  parallel(templateEngine, images, watch),
  server
);

// build コマンドでは、サーバーを立てずにビルドとHTMLのフォーマットのみを実行
exports.build = series(
  parallel(templateEngine, images)
);
