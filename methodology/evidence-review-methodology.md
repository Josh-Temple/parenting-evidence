# Evidence Review Methodology v0.1

Status: DRAFT

## 1. Purpose

育児に関する具体的な疑問について、検索過程、採用した証拠、限界、解釈を追跡できる形で整理する。

この方法は現段階では systematic review を名乗るための手順ではない。網羅検索、二重スクリーニング、正式な risk-of-bias 評価などを実施していないレビューを systematic review と表現しない。

## 2. Review unit

基本単位は一つの Question とする。

一つの Question の中に複数の Claim があり、Claim ごとに対象 Population、Intervention / Exposure、Comparator、Outcome を分ける。

例:

- Question: 読み聞かせは幼児の言語発達を促すか
- Claim A: 読み聞かせ頻度と言語能力には関連がある
- Claim B: 読み聞かせを促す介入は言語能力を改善する
- Claim C: 特定の読み聞かせ法は通常の読み聞かせより優れる
- Claim D: より早く始めるほど効果が大きい
- Claim E: 効果は長期に持続する

Question 全体へ一つの強さラベルを付けず、Claim と Outcome の単位で証拠を整理する。

## 3. Source priority

原則として以下を優先して確認する。

1. 日本の公的ガイドライン、行政資料、専門学会の現行ガイドライン
2. 国際機関・主要専門団体のガイドライン
3. Cochrane 等の高品質な systematic review
4. その他の systematic review / meta-analysis
5. RCT
6. 準実験研究
7. 観察研究
8. 専門家見解・解説

問いによって適切な研究デザインが異なるため、この順序を機械的な質ランキングとして扱わない。

## 4. Search record

各 Review で最低限、以下を保存する。

- searched_at
- databases / sources
- search queries
- date restrictions
- language restrictions
- inclusion criteria
- exclusion criteria
- records identified
- records screened
- full texts assessed
- included sources
- major exclusion reasons

探索的な事前調査と、本番 Review の固定検索を区別する。

## 5. Evidence extraction

採用した各研究・レビューについて、可能な範囲で次を抽出する。

- citation
- study design
- country / setting
- sample size
- age range
- exposure / intervention
- comparator
- outcome definition
- effect estimate
- confidence interval
- follow-up period
- main limitations
- risk-of-bias information
- applicability to Japan

値が報告されていない場合は推測して補わない。

## 6. Interpretation rules

- 相関研究を因果効果として表現しない。
- 統計的有意差と実用上の重要性を区別する。
- 「有意差なし」と「効果がないことが証明された」を同一視しない。
- 「研究がない」「取得できない」「結果が不一致」を区別する。
- subgroup 解析や探索的結果は、主要アウトカムと区別する。
- 研究対象と日本の一般家庭との差を明示する。
- 研究結果から家庭での実践へ移る際は、根拠の射程を広げない。

## 7. Certainty

外部の systematic review や guideline が正式に GRADE を実施している場合は、その評価と対象 Outcome を明示して引用する。

本プロジェクトが正式な GRADE 手順を実施していない場合、High / Moderate / Low / Very Low を独自に付与しない。

代わりに、研究デザイン、結果の一貫性、直接性、精度、主なバイアス要因などを個別に示す。

## 8. Medical and safety boundary

診断、治療、投薬、予防接種、緊急受診、安全上の重大リスクなどは、独自の Evidence Review を現行の診療・公衆衛生ガイドラインより優先しない。

必要に応じて Clinical guidance と Evidence Review をページ上で分離する。

## 9. Review states

- PLANNED: 問いのみ固定
- SEARCHING: 検索・資料収集中
- EXTRACTING: 証拠抽出中
- DRAFT: 統合結果の草稿
- REVIEW: 独立確認待ち
- PUBLISHED: 公開可能
- UPDATE_DUE: 再検索期限到来
- ARCHIVED: 現在は維持しない

## 10. Update policy

初期運用では一律の Living Review としない。

通常は年1回を基準とし、変化の速い領域、新しい主要 guideline、重要な systematic review、公的勧告変更などがある場合に前倒しで再評価する。

変更時には、前版から何が変わったかを残す。
