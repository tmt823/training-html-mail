# HTMLメール案件研修

## 環境構築

### コーディング環境

1. クローンする
2. `npm ci` して必要なパッケージをインストールする
3. `npm run dev`
4. `http://localhost:3000/` が起動すれば OK

### minio

画像をメール配信する際に使用します

1. `cd docker` で docker ディレクトリへ移動する
2. `docker compose up -d` を実行する
3. `http://localhost:9090/` を起動すると、minio のログイン画面は表示される
4. 以下の ID, password を記入しログインできれば OK
   - ID: `minio_root`
   - password: `minio_password`

