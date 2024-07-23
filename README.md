# HTMLメール案件用テンプレートリポジトリ

## 案件概要

基本的な使い方は[Backlog](https://nijibox.backlog.jp/wiki/FRONTEND_GROUP/%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%2F%E7%A4%BE%E5%86%85%E5%A0%B1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC)を参照ください。

## 開発する

初回起動前にはパッケージのインストールが必要です。下記のコマンドを実行して、モジュールをインストールしてください。

```
npm i
```

### ローカルの開発環境を起動する

```
npm run dev
```

上記のコマンドで gulp のプレビューサーバーと watch タスクが起動します。\_dev 配下を編集して、ページを作成しましょう。

### 新規HTMLメール追加方法
- _dev/ejs 配下に任意の名前のフォルダを用意し、その中に _dev/ejs/template の中のファイルをコピーしてメール作成してください。
- _dev/ejs/index.ejs の newMailList に `{"data" : "フォルダ名"}` を新しく追加してください。

※ _dev/ejs/modules 配下のファイルはサマリ画面を構成しているファイルなので、特に編集不要です。

### images
#### 画像パスについて
- 開発中はローカル表示確認のために画像をローカルパス(/assets/images/)で指定します。
- プレビュー環境デプロイ時・納品時には画像を先方のサーバーに配置するため、最終的に画像パスを配置先URLにする必要があります。配置先URLはDirさんに確認してもらってください。
- 画像パス置換は build または release コマンドを叩くことで自動的に行われます。
配置先URLを確認したら、 `gulpfile.js/config.js` > `replace` > `stgImagePath` を配置先URLに変更してください。

#### 画像の圧縮について
- 画像ファイルは、gulp のタスクにより圧縮とコピーができます。
- 画像圧縮が必要な場合は、 gulpfile.js/images.js から設定を変更してください。

### コミット時の注意点

コミット前に必ず build を叩き、最新の状態の dist を生成してください。

```
npm run build
```

### 納品用の html ファイルを生成

```
npm run release
```

上記のコマンドで `dist` ディレクトリ配下の納品用ファイルが `release` ディレクトリ内にコピーされます。このとき、画像とサマリ画面用の index.html は納品対象外となるため `release` ディレクトリには含まれません。<br>

もし、画像ファイルも納品に含めたい場合は、 `gulpfile.js/config.js` > `releaseSrc` > `files` の設定を変更してください。

納品時は github actions で[納品ZIPを自動生成](https://sites.google.com/nijibox.co.jp/nbx-fe-portal/%E6%A1%88%E4%BB%B6%E8%A3%9C%E8%B6%B3#h.mfz1t2ok8ih)してください。

### 注意点

たまに watch タスクの調子が悪いときがあります。watch が走っていない場合は、gulp を再実行してください。

### PSP環境設定
[こちらのページ](https://sites.nijibox.net/websites/@new)で設定を行ってください。
設定方法の詳細は [NBX FE PORTAL](https://cs-feg-portal.sites.nijibox.net/blog/cs/work-flow/#:~:text=%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84-,PSP%20%E7%92%B0%E5%A2%83%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B,-https%3A//sites.nijibox) でご確認ください。
