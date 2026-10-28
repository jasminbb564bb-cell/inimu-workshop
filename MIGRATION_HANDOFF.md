# inimu workshop — Mac移行引き継ぎ書

作成日: 2026-10-28（Asia/Tokyo）  
調査対象: `C:\project\inimu-workshop`  
目的: 学校PCから自宅Macへ、現状を再現して開発を再開するための記録

## 0. 先に結論

- プロジェクトは、HTML/CSS/JavaScriptを中心とした静的Webサイトです。
- `server.py` に標準ライブラリだけのローカルAPI・静的ファイルサーバーがあります。
- `package.json`、`requirements.txt`、`Dockerfile`、`docker-compose.yml` はありません。現状はDocker不要です。
- Gitの現在ブランチは `main` で、`origin/main` と同じコミットを指しています。未プッシュコミットはありません。
- ただし、現在の作業ツリーには大量の未コミット変更があります。新規画像・動画を含むため、学校PCの終了前に必ず退避・コミットまたはバックアップしてください。
- Google Apps Scriptは雛形のみです。実運用のスプレッドシートID、WebアプリURL、Googleアカウント側の設定はコード内にありません。

## 1. フォルダ構成と主要ファイル

```text
.
├─ index.html                 # トップページ
├─ server.py                  # Python標準ライブラリのローカルサーバー/API
├─ api/products.json          # 商品データ
├─ css/                       # 共通・ショップ・展示・体験用CSS
├─ js/                        # 共通JS、ナビ、言語切替、展示用JS
├─ images/                    # 商品・ブランド・体験・ショップ等の画像
├─ experience/               # 体験ページ
├─ shop/                     # ショップ、商品、ブランド、香り、ストーリー
├─ purchase/                 # 購入デモページ
├─ blog/                     # ブログ一覧・記事
├─ login/ register/          # ログイン・会員登録デモ
├─ mypage/ admin/            # マイページ・会員管理デモ
├─ reservation-guide/        # 予約案内
├─ cancellation/ returns/ shipping/ # FAQ系ページ
├─ google-apps-script/       # GASコードと設定手順
├─ video-prototype/          # 動画・映像プロトタイプ
├─ proposal-preview/         # 提案書・ショップ画面のプレビュー
├─ docs/                     # 要件、調査、設計、サイトマップ、TODO
├─ build_proposal.py         # 提案書生成用Pythonスクリプト
├─ make_final.ps1            # 提案書関連のWindows PowerShellスクリプト
├─ *.pptx                    # 提案書の中間・最終成果物
├─ README.md / HANDOFF.md    # 既存の概要・作業メモ
└─ .gitignore                # 現在は限定的
```

主に読むファイルは、`README.md`、`HANDOFF.md`、`docs/REQUIREMENTS.md`、`docs/DESIGN.md`、`docs/TODO.md`、`index.html`、`css/style.css`、`js/main.js`、`server.py`、`api/products.json`です。

`lo-profile/` と `check/` はLibreOffice・提案書確認に伴う作業用データです。Webサイトの起動には不要ですが、提案書の再編集・再現に必要な可能性があるため、学校PCから別途バックアップしてください。

## 2. 実装済み・未実装

### 実装済み／確認できるもの

- トップ、体験、ショップ、商品詳細、ブランド、香り、ストーリー、ブログ、FAQ、ログイン、登録、マイページ、管理画面などのHTMLページ。
- レスポンシブ対応の共通CSS、モバイルナビゲーション、ハンバーガーメニュー。
- 日本語／英語の表示切替。言語設定は主に `localStorage` の `inimuLang` を利用。
- 商品APIのローカル実装: `GET /api/health`、`GET /api/products`、`GET /api/products/:key`。
- 商品詳細ページのAPI取得と、APIが使えない場合のフォールバックデータ。
- 会員登録デモ、ログイン・パスワード再設定・マイページの画面フロー。データはブラウザの `localStorage` を使うデモ構成。
- 管理画面での会員データ確認・CSV出力の想定。
- 動画プロトタイプ、商品・体験・ショップ用の多数の画像素材。
- 提案書のMarkdown、PPTX、Python生成スクリプト。

### 未実装／未確定／要確認

- 実際の会員データ保存・認証・パスワード管理・権限管理。現状は本番利用不可のデモです。
- Google Apps ScriptとGoogleスプレッドシートの本番接続。コード雛形はあるものの、設定とデプロイが未完了です。
- 決済。購入ボタンはデモで、実際の購入はできません。
- 予約。外部のじゃらんnetへのリンクであり、本サイト内の予約処理ではありません。
- スクロール表示・フェードイン等の一部演出。既存 `docs/TODO.md` で未完了項目があります。
- 画像の差し替え・最終品質確認、PC/モバイルでの最終表示確認。
- 商品情報、価格、在庫、公式情報との照合。コード内にも要照合の注記があります。
- 本番ホスティング、独自ドメイン、HTTPS、アクセス解析、メール送信などの運用設定。

## 3. Macに必要なソフトと起動方法

### 必須

- macOS
- Git（Xcode Command Line ToolsまたはHomebrewで導入）
- VS Codeなどのエディタ
- Python 3（`server.py`を使う場合）
- ChromeまたはSafari（表示確認）

### 任意

- Docker Desktop: 現在Docker設定はなく、起動に不要です。
- LibreOffice: CSV確認やPPTX/提案書の編集に必要です。
- Node.js/npm: 現在のWebサイト起動には不要ですが、今後のビルドツール導入時に使用します。

### 起動

```bash
cd ~/path/to/inimu-workshop
python3 server.py
```

ブラウザで `http://localhost:8000/` を開きます。API確認:

```bash
curl http://localhost:8000/api/health
curl http://localhost:8000/api/products
```

単純な静的確認だけなら、次でも起動できます。ただし商品APIは提供されません。

```bash
python3 -m http.server 8000
```

ポートが使用中なら、`server.py` のポート変更は既存コードに影響するため、まず使用中のプロセスを終了するか、別途ローカルコピーで確認してください。

## 4. GitHubリポジトリと同期方法

確認済みのリモート:

```text
git@github.com:jasminbb564bb-cell/inimu-workshop.git
```

Macでの初回取得:

```bash
git clone git@github.com:jasminbb564bb-cell/inimu-workshop.git
cd inimu-workshop
git status
```

SSH鍵が未設定の場合は、GitHubアカウントにMacのSSH公開鍵を登録するか、HTTPS URLでcloneしてください。認証情報はこのファイルやリポジトリに保存しないでください。

作業開始・終了時:

```bash
git pull --ff-only
git status
git add <確認済みのファイル>
git commit -m "作業内容"
git push origin main
```

現在は `main` と `origin/main` が同じコミット `a447f84`（セットページ修正）です。`origin/main..HEAD` は空で、未プッシュコミットはありません。

## 5. 外部サービス・API・GAS・スプレッドシート

### ローカルAPI

`server.py` が商品JSONを読み込み、商品詳細画面から `/api/products/:key` を参照します。外部APIではありません。

### 外部リンク／サービス

- Google Fonts（Inter、Noto Sans JP、Noto Serif JP）
- Google Maps検索リンク
- じゃらんnetの予約ページ
- inimu、HATENKO等の公式サイトへの参照リンク

これらはページ内リンクまたはフォント読み込みであり、プロジェクト側の認証情報は確認できません。

### Google Apps Script

`google-apps-script/Code.gs` は、POSTされた会員情報を指定スプレッドシートの指定シートへ追加する雛形です。必須項目は `memberId`、`name`、`kana`、`email`、`scentPreference`、`createdAt` です。

現状、`SPREADSHEET_ID` はプレースホルダーで、WebアプリURLも設定されていません。実際のGoogleアカウント、スプレッドシート、Apps Scriptプロジェクト、デプロイ設定はこのリポジトリから復元できません。

### 注意

既存READMEには会員情報・個人情報の扱いに関する記述がありますが、現状のデモはブラウザlocalStorageを使用します。実在の個人情報を入力・共有しないでください。本番運用する前に、認証、権限、個人情報保護、サーバー側保存、CORS、エラー処理を設計し直す必要があります。

## 6. 現在のGit状態

調査時点の状態:

- ブランチ: `main`
- HEAD: `a447f84 セットページ修正`
- `origin/main`との差分コミット: なし
- 未コミット変更: 追跡済みファイル35件、未追跡ファイル多数
- 変更内容: 商品JSON、複数のHTML/CSS/JS、圧縮済み動画、商品・体験・ショップ画像、新規 `OPTIMIZATION_README.md` など
- `.history/` はGitで無視されていますが、学校PC上の作業履歴が入っています。

移行前に、未コミット変更をどう扱うか決めてください。変更を保持するなら、まず作業ブランチを作り、内容を確認してからコミット・pushします。判断前に `git diff` と未追跡ファイル一覧を保存してください。未追跡画像・動画を削除しないでください。

## 7. 継続作業に必要な設定・未解決問題

- GitHubへのpush権限とSSH/HTTPS認証をMacで準備する。
- 未コミット変更を、採用する変更と一時素材に分類する。
- 新規画像・動画がGitHubへpush可能なサイズか確認する。
- `api/products.json` と商品詳細画面のデータ整合性を確認する。
- `server.py` 起動時のAPIレスポンスと各商品ページを確認する。
- `GOOGLE_APPS_SCRIPT_URL` の実装・設定状況を確認し、GASを使う場合だけGoogle側で再構築する。
- スプレッドシート名・列・権限・Apps ScriptデプロイURLを、秘密情報を記録せずに別管理する。
- 学校課題用の非公式ポートフォリオである旨、外部予約・購入不可の注記を維持する。
- 実在の住所・価格・営業時間・商品情報は公開前に公式情報と再照合する。
- `docs/TODO.md` の未完了項目（演出、画像差し替え、最終表示確認など）を再確認する。
- README/HANDOFF/TODOの文字化けが見られるため、MacでUTF-8として表示できるか確認し、必要なら別タスクで修正する（今回の移行では既存コードを変更しない）。

## 8. Macで開発を再開する具体的手順

1. MacにGit、VS Code、Python 3、ブラウザを準備する。提案書を扱うならLibreOfficeも準備する。
2. GitHubからcloneし、`git status` でクリーンな状態を確認する。
3. 学校PCの未コミット変更を、コミット済みなら `git pull --ff-only` で取得する。未コミットのままなら、後述の退避データを先にコピーする。
4. `python3 server.py` を実行し、`http://localhost:8000/` を開く。
5. `/api/health`、トップ、EXPERIENCE、SHOP、商品詳細、登録、管理画面、動画プロトタイプを順に確認する。
6. モバイル幅とデスクトップ幅で表示し、画像パス・動画再生・言語切替・localStorage動作を確認する。
7. 未コミット変更をMacへ移す場合は、バックアップコピーまたはパッチを確認してから、ファイル単位で作業ブランチへ反映する。
8. 変更を採用する場合だけ、差分確認、ブラウザ確認、コミット、`git push origin main` を行う。
9. GASを再開する場合は、Googleアカウント側のスプレッドシートとApps Scriptを確認し、コード中のプレースホルダーを秘密情報として安全に設定する。URLやIDを公開リポジトリに書かない。

## 学校PCから別途退避するデータ

優先度高:

- 未コミットの追跡済み変更と、未追跡の画像・動画・`OPTIMIZATION_README.md`。
- `video-prototype/video/` の動画素材。
- `images/`、`proposal-preview/assets/`、`video-prototype/images/` の新規WebP/PNG/JPG素材。
- 提案書のPPTX、`inimu_企画提案書_FINAL_2026-09-30.md`、`build_proposal.py`、`make_final.ps1`。

必要に応じて:

- `.history/` の作業履歴。
- `lo-profile/` のLibreOfficeプロファイル、`check/` の提案書確認用展開データ。通常のWeb開発には不要ですが、学校PCでの提案書編集状態を再現したい場合は保管する。
- Googleスプレッドシート、Apps Scriptプロジェクト、Google Drive上の素材、Googleアカウントの設定。これらはGit cloneだけでは移行されない。
- ブラウザのlocalStorageにあるデモデータ。必要ならブラウザからCSV出力するか、個人情報を含めない形で別途保管する。秘密情報・個人情報をこのリポジトリへ追加しない。

この引き継ぎ書自体には、パスワード、APIキー、スプレッドシートID、Apps Scriptの実URL、個人情報を記載していません。
