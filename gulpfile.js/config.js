// コンフィグ

module.exports = {
  // ビルド対象ファイルのパス
  src: {
    root: './_dev',
    ejs: ['./_dev/ejs/**/*.ejs', '!./_dev/ejs/**/_*.ejs'],
    images: './_dev/images/**/*',
    destHtml: './dist/**/*.html',
  },
  // リリース対象ファイルのパス
  releaseSrc: {
    files: ['./dist/**/*.html', '!./dist/index.html'],
  },
  // ビルドファイルの出力先パス
  dest: {
    root: './dist/',
    images: './dist/assets/images/',
  },
  // release時の出力先パス
  release: {
    root: './release/',
    images: './images/',
  },
  // release時に置換する
  replace: {
    devImagePath: '/assets/images',
    stgImagePath: 'https://mailmag.nijibox.jp',
  },
  // フォーマットファイルの出力先パス
  format: {
    ejs: './_dev/ejs/',
  },
  // ウォッチ設定
  watch: {
    ejs: './_dev/ejs/**/*.ejs',
    images: './_dev/images/**/*.{jpg,png}',
  },
  // ローカルサーバー
  server: {
    port: 3000,
    // 起動時に表示するパスを変えたい場合はここを変更しましょう
    startPath: './',
  },
  // webpack とか ejs 使うか設定
  useWebpack: false,
  useEjs: true,
};
