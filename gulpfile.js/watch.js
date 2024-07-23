// 対象ファイルの変更監視

exports.watch = function watch(cb) {
  const { series } = require('gulp');
  const { watch } = require('gulp');
  const { ejs } = require('./ejs');
  const { images } = require('./images');
  const { reload } = require('./server');
  const config = require('./config');

  // watch task 実行
  // series で コンパイル -> ホットリロードを実行
  watch(config.watch.ejs, series(ejs, reload));
  watch(config.watch.images, series(images, reload));

  // タスク完了
  cb();
};
