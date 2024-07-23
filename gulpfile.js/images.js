// 画像ファイルを圧縮してコピー

exports.images = function images(cb) {
  const { src, dest } = require('gulp');
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  const imagemin = require('gulp-imagemin');
  const pngquant = require('imagemin-pngquant');
  const minimist = require('minimist');
  const gulpIf = require('gulp-if');
  const config = require('./config');

  const options = minimist(process.argv.slice(2), {
    string: 'env',
    default: { env: 'development' }
  });

  src(config.src.images)
    .pipe(
      plumber(
        notify.onError(
          '⚠️ images のビルドエラーが出ています ⚠️ <%= error.message %>'
        )
      )
    )
    /**
     * 圧縮の詳細設定を行う場合は引数を渡す
     * see: https://github.com/sindresorhus/gulp-imagemin
     * 渡せる値はそれぞれ下記を参照 (フォーマットが異なるので注意)
     * gif: https://github.com/imagemin/imagemin-gifsicle
     * jpg: https://github.com/imagemin/imagemin-mozjpeg
     * png: https://github.com/imagemin/imagemin-pngquant
     * svg: https://github.com/imagemin/imagemin-svgo
     */
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75 }),
        pngquant({ quality: [1, 1] }),
        imagemin.svgo(),
      ])
    )
    .pipe(dest(config.dest.images))
    .pipe(
      gulpIf (options.env === 'release', dest(config.release.images))
    );

  // タスク完了
  cb();
};
