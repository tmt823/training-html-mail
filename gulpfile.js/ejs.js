// EJS のコンパイル

exports.ejs = function ejs(cb) {
  const { src, dest } = require('gulp');
  const ejs = require('gulp-ejs');
  const htmlhint = require('gulp-htmlhint');
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  const rename = require('gulp-rename');
  const replace = require('gulp-replace');
  const minimist = require('minimist');
  const gulpIf = require('gulp-if');
  const config = require('./config');
  const htmlbeautify = require('gulp-html-beautify')

  const options = minimist(process.argv.slice(2), {
    string: 'env',
    default: { env: 'development' }
  });

  src(config.src.ejs)
    .pipe(
      plumber(
        notify.onError(
          '⚠️ EJS のビルドエラーが出ています ⚠️ <%= error.message %>'
        )
      )
    )
    .pipe(
      // 引数詳細は https://github.com/rogeriopvl/gulp-ejs
      ejs()
    )
    .pipe(rename({ extname: '.html' }))
    // コンパイルが完了してからHTMLHintにかけ、引っかかった場合はエラーを表示
    .pipe(htmlhint())
    .pipe(htmlhint.failAfterError())

    .pipe(htmlbeautify({
      'indent_size': 4,
      'indent_char': ' ',
      'max_preserve_newlines': 0,
      'preserve_newlines': false,
      'extra_liners': [],
    }))
    // リリース用にパスを置換
    .pipe(
      gulpIf (options.env !== 'development', replace(config.replace.devImagePath, config.replace.stgImagePath))
    )
    // リリースファイルに不要な<!DOCTYPE html>を削除
    .pipe(
      gulpIf (options.env !== 'development', replace('<!DOCTYPE html>', ''))
    )
    // 開発用に書き出し
    .pipe(
      gulpIf (options.env !== 'release', dest(config.dest.root))
    );

  src(config.releaseSrc.files)
    // 配信用に書き出し
    .pipe(
      gulpIf (options.env === 'release', dest(config.release.root))
    );

  // タスク完了
  cb();
};
