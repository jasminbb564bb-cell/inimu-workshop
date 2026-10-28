# WEB総合制作実習2 最終提出前検証報告書

検証日: 2026-10-28  
対象: `inimu-workshop` 全体、`submit_summary.md`  
方針: 既存コード、デザイン、提案書、`submit_summary.md` は変更していない

## 1. 検証環境と制約

今回、リポジトリ内のコード・HTML・CSS・画像参照・Git履歴・報告書を読み取り専用で照合した。実ブラウザおよびChrome Networkの検証は、実行環境にPython実行環境がなく `server.py` を起動できなかったため実施できなかった。したがって、コードを読んだだけでブラウザ動作を「確認済み」とは判定していない。

既知の実測情報として、Cookie同意機能追加前にGA4リアルタイム画面で `page_view`、`intro_skip`、`entrance_click`、`reservation_click` の受信が確認済みであることを引き継いだ。これは同意機能追加後の通信確認ではない。

## 2. 実装内容の照合

| 検証項目 | 検証方法 | 確認結果 | 根拠ファイル | 判定・修正必要性 |
|---|---|---|---|---|
| INTRODUCTIONからSHOP・EXPERIENCEへの導線 | トップHTMLのリンクとイントロJSを確認 | `shop/` と `experience/` の選択リンクがあり、Scene 04で表示する実装がある | `index.html`, `video-prototype/top-choice.js` | 実装済み・コード確認。実クリックは未検証。 |
| SKIPボタンの動作 | ボタン、クリックハンドラ、Scene状態変更を確認 | `.skip-intro` のクリックで動画停止、Scene 04表示、選択肢表示へ進む実装がある | `index.html`, `video-prototype/top-choice.js` | 実装済み・コード確認。実ブラウザ未検証。 |
| じゃらんnet予約リンク | `jalan.net` のリンクと計測条件を検索 | EXPERIENCE、予約案内、キャンセル案内等に外部リンクがある。GA4ではクリックのみを計測する | `experience/index.html`, `reservation-guide/index.html`, `cancellation/index.html`, `js/analytics.js` | 実装済み・コード確認。予約完了は対象外。 |
| 日本語／英語切替 | `localStorage`、URLパラメータ、翻訳処理を確認 | `inimuLang` と `?lang=` を使う処理がある | `js/main.js`, `video-prototype/top-choice.js`, `experience/index.html`, `shop/index.html` | 実装済み・コード確認。全ページ実機確認は未検証。 |
| スマホ表示・画面の重なり | レスポンシブCSS、z-index、同意バナーCSSを確認 | SKIP、同意バナー、通常ページのモバイル用ルールがある。イントロ用バナーは `z-index:10000` | `video-prototype/top-choice.css`, `css/style.css` | 実装済み・コード確認。実機・全画面の重なりは未検証。 |
| 商品表示 | 商品詳細のAPI呼び出しとフォールバックを確認 | `api/products/:key` の取得に失敗しても、商品キーに対応するfallbackを描画する | `shop/product/detail-api.html`, `server.py`, `api/products.json` | 実装済み・コード確認。API障害時の実画面確認は未検証。 |
| 動画・画像の参照先 | HTML/CSSの参照先と軽量化記録を確認 | トップ動画は `scene-01-02-continuous.mp4`、ポスター・Scene画像は `images/optimized/*.jpg`、各所はWebP参照 | `index.html`, `css/style.css`, `OPTIMIZATION_README.md` | 実装済み・コード確認。全素材の表示品質は未検証。 |
| 軽量化結果 | 記録ファイルと実ファイルサイズを照合 | 動画6.84 MiB→2.72 MiB、画像55点99.52 MiB→6.41 MiBの記録あり | `OPTIMIZATION_README.md`, `video-prototype/video/scene-01-02-continuous.mp4` | 容量結果は記録確認。表示速度改善値は未検証。 |

## 3. GA4検証

### 3.1 コード上の照合

| イベント | 発火箇所 | 一回性・遷移時送信の評価 | 判定 |
|---|---|---|---|
| `page_view` | 同意後の `gtag('config', ...)` によるGA4標準計測 | ページごとの初期化を想定。実Network未検証 | 実装済み・コード確認 |
| `intro_skip` | `js/analytics.js` の `.skip-intro` キャプチャリスナー | `top-choice.js`からの重複送信は削除済み。1クリック1リスナーの構造 | 実装済み・コード確認 |
| `intro_complete` | `video-prototype/top-choice.js` の `show()` 内 | `shown` ガードにより `show()` は一度だけ。実ブラウザ未検証 | 実装済み・コード確認 |
| `entrance_click` | `js/analytics.js` のリンク委譲リスナー | 1つのdocumentリスナーで分類。実クリック未検証 | 実装済み・コード確認 |
| `reservation_click` | `js/analytics.js` の `jalan.net` 判定 | 予約完了ではなく外部リンククリック。実クリック未検証 | 実装済み・コード確認 |

GA4タグは、トップでは `index.html` が `js/analytics.js` を直接読み込み、通常ページでは `js/main.js` が未読込時だけ動的に読み込む。`inimu-ga4-script` IDと初期化フラグにより二重読み込みを防ぐ構造を確認した。イベントには `transport_type: 'beacon'` が指定されているが、画面遷移直前のNetwork送信完了は未検証である。

### 3.2 リアルタイム受信結果

| 項目 | 結果 |
|---|---|
| `page_view` | Cookie同意機能追加前にGA4リアルタイム画面で受信確認済み |
| `intro_skip` | Cookie同意機能追加前にGA4リアルタイム画面で受信確認済み |
| `entrance_click` | Cookie同意機能追加前にGA4リアルタイム画面で受信確認済み |
| `reservation_click` | Cookie同意機能追加前にGA4リアルタイム画面で受信確認済み |
| `intro_complete` | 受信未確認 |
| 同意機能追加後の通信 | 未検証 |

## 4. Cookie・プライバシー検証

| 検証項目 | コード上の確認 | 実ブラウザ結果 | 判定 |
|---|---|---|---|
| 同意前はGA4通信なし | `loadGoogleTag()` は同意値が`granted`の場合だけ実行 | Network未検証 | 実装済み・コード確認 |
| 拒否後も計測なし | `enabled` がfalseのまま、`send()`がreturnする | Network未検証 | 実装済み・コード確認 |
| 同意後は計測 | 同意ボタンで`granted`を保存し`loadGoogleTag()`実行 | Network未検証 | 実装済み・コード確認 |
| 同意撤回後は送信停止 | resetで同意を削除し`enabled=false`、バナー再表示 | Network未検証 | 実装済み・コード確認 |
| 再訪時の状態反映 | `inimuAnalyticsConsent`を`localStorage`から読み込む | シークレット・再訪実測未検証 | 実装済み・コード確認 |
| スマホ操作 | 640px以下でバナーを縦配置 | 実機未検証 | 実装済み・コード確認 |
| プライバシーページへの導線 | バナーリンク、通常ページフッター、ページ本体を確認 | 実クリック未検証 | 実装済み・コード確認 |

### 既に作成されたCookieの扱い

同意撤回時に、この実装が削除するのは `inimuAnalyticsConsent` のlocalStorage値である。GA4やGoogleタグが既に作成したCookie、Google側に送信済みの過去データを、このサイトの撤回操作だけで完全削除できることは確認できていない。公開前に、既存Cookieの削除方針、Google Analyticsのデータ保持期間、ユーザーからの削除請求への対応を別途確認する必要がある。

## 5. `submit_summary.md` 監査

| 記述内容 | 分類 | 根拠・コメント |
|---|---|---|
| UX導線、SHOP／EXPERIENCE、APIフォールバックが実装済み | 実装済み・コードのみ確認 | `index.html`, `top-choice.js`, `detail-api.html`, `server.py` |
| 動画約60.3%、画像約93.6%削減 | 実装済み・ファイル／記録確認 | `OPTIMIZATION_README.md` と実ファイル。表示速度改善値ではない |
| `page_view`、`intro_skip`、`entrance_click`、`reservation_click`の受信 | 実装済み・動作検証済み（同意機能追加前） | 利用者が報告したGA4リアルタイム画面の確認結果。今回のブラウザ検証結果ではない |
| `intro_complete`の受信 | 未検証 | コード上の発火箇所はあるが、受信結果なし |
| 同意前・拒否後・同意後・撤回後の通信制御 | 実装済み・コードのみ確認 | `js/analytics.js` に制御あり。Chrome Network未検証 |
| スマホの同意バナー操作 | 実装済み・コードのみ確認 | CSSルールあり。実機未検証 |
| 予約クリックを計測する | 実装済み・動作検証済み（同意機能追加前） | `reservation_click`の受信は確認済み。予約完了・予約増加は記載していない |
| 実際の予約完了数・予約増加・成約率 | 未実装／未確認 | `submit_summary.md`では確認していないと明記されており、コードにも完了連携はない |

### 記述と実装に食い違いがあるか

重大な食い違いは確認できない。報告書は、GA4イベント受信をCookie同意機能追加前の結果として区別し、予約完了や予約増加を未確認としている。なお、「動作確認済み」と書かれたCookie制御は、実ブラウザNetworkでの確認ではなくコード上の実装確認として扱う必要がある。

## 6. 人間が行う最終確認手順

前提: プロジェクトルートで `python3 server.py` を起動し、Chromeで `http://127.0.0.1:8000/` を開く。Windowsでは `python server.py` を使用する。

1. DevToolsのApplicationで `localStorage.removeItem('inimuAnalyticsConsent')` を実行し、ページを再読み込みする。
2. Networkを開き、同意前に `gtag/js`、`collect`、`g/collect` が発生しないことを確認する。
3. 同意前にSKIPを押しても、GA4通信が発生しないことを確認する。
4. 「同意する」を押し、`gtag/js`、`collect`、`g/collect`を確認する。`page_view`をDebugViewまたはリアルタイムで確認する。
5. INTRODUCTIONを通常完了し、`intro_complete`が1回だけ届くことを確認する。
6. SKIPを1回押し、`intro_skip`が1回だけ届くことを確認する。SHOP／EXPERIENCEをそれぞれ1回クリックし、`entrance_click`の分類を確認する。
7. EXPERIENCEまたは予約案内からじゃらんnetリンクを1回クリックし、`reservation_click`が1回だけ届くことを確認する。予約完了イベントとは扱わない。
8. プライバシーページで「Cookie設定を変更する」を押し、バナー再表示後に同意を撤回する。以降のSKIP・入口・予約クリックで新しいGA4通信が発生しないことを確認する。
9. 拒否を選択して再読み込みし、GA4通信がないことを確認する。再度同意を選択し、GA4通信が再開することを確認する。
10. Chromeのデバイスエミュレーションで幅390px前後を確認し、バナーの文面・拒否・同意ボタンがイントロや下層ページの操作を妨げないことを確認する。

## 結論

コードと報告書の主要な記述は整合している。GA4の4イベントはCookie同意機能追加前にリアルタイム受信済みである。一方、同意機能追加後の `gtag/js`、`collect`、`g/collect` の実通信、各イベントの一回性、画面遷移時の送信完了、スマホ実機表示は未検証であり、公開前に上記手順で確認する必要がある。
