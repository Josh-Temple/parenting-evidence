# Parenting Evidence

育児について、現在の研究から「何が分かっていて、何がまだ分からないか」を、親が確認できる形で整理する Evidence Review プロジェクトです。

## Purpose

このプロジェクトは、育児の「正解」を提示することではなく、具体的な疑問ごとに、

- どのような研究があるか
- どこまで因果関係を推定できるか
- 結果はどの程度一貫しているか
- 研究結果を日本の家庭へどこまで適用できるか
- 何がまだ不明か

を、出典と調査方法を含めて公開することを目的とします。

## Current status

**Five-review pilot completed; production release prepared.**

Q001〜Q005の5件について、主要出典のsource verificationと独立publication reviewを完了しています。Evidence Review Methodologyはv1.0 / ACTIVEです。

公開サイトはAstroによる静的サイトとして実装済みで、現在は5件をまとめたRelease PRのProduction反映を準備しています。各Reviewは診療ガイドラインや個別の医学的助言ではなく、現在の研究から分かること・分からないことを出典とともに整理したEvidence Reviewです。

## Initial scope

初期対象は主に0〜6歳の育児です。最初のPilot setとして、次の5件を用いて方法の再利用性を検証しました。

1. 読み聞かせと言語発達
2. スクリーン時間と言語発達
3. タイムアウトと問題行動
4. 睡眠トレーニングの効果と長期影響
5. 保育園への早期入園と発達

5件から得た知見はEvidence Review Methodology v1.0と再利用テンプレートへ反映しています。

## Principles

1. 一次資料、システマティックレビュー、公的ガイドラインを優先します。
2. 事実、研究結果、解釈、実践上の含意を分けます。
3. 「差がない」と「証拠が不足している」を区別します。
4. 相関を因果関係として扱いません。
5. 正式な GRADE 評価を実施していない場合、独自に GRADE の確実性ラベルを付けません。
6. 検索日、検索方法、主要な採否判断、更新履歴を残します。
7. 医療・安全に関わる領域は、現行の公的・専門ガイドラインを優先します。

## Repository structure

- `methodology/` — Evidence Review の方法とデータ仕様
- `reviews/` — 個別の Evidence Review
- `docs/` — プロジェクト設計・運用方針
- `site/` — 公開サイト実装
- `templates/` — 次回Review用の再利用テンプレート

## Important note

本リポジトリは研究情報の整理を目的としており、個別の診断、治療、受診判断などの医学的助言を提供するものではありません。
