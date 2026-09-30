# inimu workshop

## 会員登録データの学校提出用フロー

会員登録 → localStorage → `/admin/members/` 管理画面 → UTF-8 BOM付きCSV出力 → LibreOffice Calcで確認・分析

学校提出用デモのため、実在する個人情報は入力しないこと。

## Googleスプレッドシート連携デモ

新規会員登録フォームはGoogle Apps Script Web Appを経由してGoogleスプレッドシートへ保存できます。設定手順とApps Scriptコードは `google-apps-script/` を参照してください。

学校提出用デモのため、実在する個人情報は使用しないこと。

本番運用では、認証、アクセス制御、個人情報保護、入力値検証、サーバー側バリデーション、スプレッドシートの公開範囲管理が必要です。

浅草で行うフレグランス体験のWebサイト案です。  
「香水をつくる」ことだけでなく、「土地・素材・記憶」を感じながら体験を楽しめるという価値を伝えることを目的にしています。

## 目標
- 体験の価値が伝わるTOPページを制作する
- モバイルを優先にした読みやすいレイアウトを実装する
- 予約導線を自然に導く構成にする

## 構成
- index.html
- css/style.css
- js/main.js
- images/

## 確認方法
ブラウザで index.html を開くか、ローカルサーバーを起動して確認します。

例:

```bash
cd /project/inimu-workshop
python -m http.server 8000
```

その後、ブラウザで http://localhost:8000/ を開いて表示を確認してください。

## 補足
- モバイルファーストで設計
- 余白と素材感を重視したデザイン
- ハンバーガーメニューを最小限のJavaScriptで実装
