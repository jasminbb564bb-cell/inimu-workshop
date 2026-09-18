# HANDOFF

## プロジェクト名
inimu workshop

## プロジェクト概要
inimuのフレグランス体験Webサイト制作プロジェクト。

## 現在の目的
フレグランス体験の魅力が分かりやすく伝わり、
体験予約につながるWebサイトを制作する。

## 現在の進捗
- GitHubリポジトリ作成済み
- SourceTreeでクローン済み
- VS Codeでプロジェクトを開いている
- README.md作成済み
- GitHubへ初回Push済み

## 次にやること
1. プロジェクトの要件を整理する
2. デザイン方針を整理する
3. サイト構成を決める
4. HTML / CSS / JavaScriptで制作を開始する

## 制作時のルール
- 既存ファイルを勝手に大幅変更しない
- 作業前にこのHANDOFF.mdを読む
- 作業終了時に進捗をこのファイルへ追記する
- 不明な仕様は勝手に決めず確認する
- モバイル表示も考慮する

## Git運用
作業開始前：
git pull

作業終了後：
git status
git add .
git commit
git push

---

# 2026-09-18 最新引き継ぎ

※このセクションを最新情報として優先すること。

## 現在の制作段階

学校課題の設計工程は完了。

完了した工程：

企画
↓
マーケットリサーチ
↓
仮説ペルソナ
↓
サイトマップ
↓
TOPページ情報構成
↓
スマートフォン版ワイヤーフレーム
↓
デザインガイドライン

現在は、

### フロントエンド実装準備

の段階。

---

## 完了済み資料

実装前に必ず以下を読むこと。

- README.md
- HANDOFF.md
- docs/REQUIREMENTS.md
- docs/RESEARCH.md
- docs/PERSONA.md
- docs/SITEMAP.md
- docs/TOP_STRUCTURE.md
- docs/WIREFRAME_MOBILE.md
- docs/DESIGN.md
- docs/TODO.md

調査の元情報：

- docs/sources/REVIEWS.md
- docs/sources/COMPETITORS.md
- docs/sources/INIMU_CURRENT.md
- docs/sources/REFERENCES.md

---

## 決定済みのサイト構成

基本ページ：

- TOP
- WORKSHOP
- MATERIALS
- ACCESS
- RESERVATION

STORYは独立ページにしない。

素材・土地・生産者・日本のものづくり・inimuの考え方は
MATERIALSの中で扱う。

---

## 主な予約導線

基本導線：

TOP
↓
WORKSHOP
↓
RESERVATION

inimuらしさを詳しく知りたい場合：

TOP
↓
MATERIALS
↓
WORKSHOP
↓
RESERVATION

---

## TOPページ構成

1. HEADER
2. HERO
3. CONCEPT
4. WORKSHOP
5. MATERIALS
6. EXPERIENCE
7. VOICE
8. INFORMATION
9. ACCESS
10. RESERVATION
11. FOOTER

---

## デザイン方針

- 白を基調にする
- 十分な余白を取る
- 色数を増やしすぎない
- 素材や写真の色を活かす
- 過度な和風にしない
- 高級ブランド風に寄せすぎない
- 若者向けに寄せすぎない
- 老若男女が利用しやすくする
- スマートフォンを優先する
- 写真と素材を主役にする

日本語フォント：
Noto Sans JP

英字フォント：
Inter

---

## 実装時の重要ルール

設計済みの内容を勝手に大幅変更しない。

一気に完成させない。

次の順番で制作する。

1. HTMLの基本構造
2. スマートフォン版CSS
3. ブラウザで表示確認
4. PCレスポンシブ対応
5. 必要最低限のJavaScript
6. 最終動作確認

---

## 次に作るもの

初期構成：

- index.html
- css/style.css
- js/main.js
- images/

まずHTMLの基本構造から開始する。

まだ派手なアニメーションや追加機能は実装しない。

---

## Codex / Claude Code 共通ルール

作業開始時：

1. git pull
2. HANDOFF.mdを確認
3. TODO.mdを確認
4. 必要な設計資料を確認

作業終了時：

1. 動作確認
2. TODO.mdを更新
3. HANDOFF.mdを必要に応じて更新
4. git status
5. commit
6. push

昼のCodexと夜のClaude Codeが
同じGitHubリポジトリを使って作業を引き継ぐ。