# Evidence Review Methodology v1.0

Status: ACTIVE

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

既存のsystematic reviewをanchorとして使う場合は、その論文の刊行年だけでなく、**実際の検索終了日**を確認する。刊行年・Webページの更新年・データベース検索の終了年を同一視しない。出版社や集約ページのmetadataと原論文の刊行情報が食い違う場合は、その不一致を記録する。

anchor reviewの検索終了後についてはtargeted update searchを行い、少なくとも重要なsystematic review / meta-analysis、主要RCT・準実験、現行guideline、公的資料を確認する。

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
- **複数構成要素からなる介入の効果を、個別技法の効果として帰属しない。** 個別構成要素の因果効果を主張するには、dismantling trial、factorial design、直接比較、またはそれに準じる証拠が必要。component meta-regressionは「その構成要素を含むプログラムの方が効果が大きいという関連」として扱う。
- 「害が確認されない」と「害がないことが証明された」を区別する。安全性については、研究デザイン、追跡期間、実施方法の測定精度を明示する。
- **publication yearとevidence recencyを同一視しない。** systematic reviewは最終検索日、guidelineは現行版かどうかを確認する。
- **対照条件を固定して読む。** no-treatment、usual care、active control、通常実施との比較を混同しない。特に追加技法の有効性は、通常実施をactive controlとした比較を優先して解釈する。
- **アウトカムを分解する。** 例として、睡眠では入眠、夜間覚醒、連続睡眠、総睡眠時間を別Claimとして扱う。複合指標の一部を別のアウトカムへ一般化しない。
- **曝露・介入を分解する。** screen useでは時間、内容、共同利用、背景曝露を、保育では開始時期、時間、保育形態、質、制度環境を別に扱う。
- **数値カテゴリーを閾値へ変換しない。** cohortの1時間・1.5時間等のcutoffやguideline上限を、因果的・生物学的な安全境界として扱わない。
- **研究結果が不一致なら不一致を保存する。** 片方だけを採用して結論を単純化せず、対象、介入、アウトカム、検索期間、研究デザインの差を確認する。
- **国・制度をまたぐ一般化を制限する。** 保育制度、家庭環境、医療・公衆衛生guidanceなどsystem contextが結果を変えうる領域では、transportabilityを独立した論点として扱う。
- **論文タイトルの因果表現をそのまま採用しない。** 観察研究は、原論文タイトルにimpact / effect等が含まれていても、研究デザインに応じてassociationとして記述する。

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

## 10. Publication review

`PUBLISHED` へ変更する前に、作成時の統合結果を前提にしない独立publication reviewを1回行う。

最低限、以下を出典から再構成する。

- bottom line
- 主要effect estimate
- comparator / control
- causal wording
- safety wording
- age / population boundary
- Japan applicability / system context
- current guideline
- anchor review以後の重要な更新証拠

判定は `PASS` / `PASS_WITH_CHANGES` / `HOLD` とし、必要修正と最終判断を `independent-publication-review.md` に残す。

独立reviewで修正が必要になった場合、結論を守ることより、Claimの分割・弱化・保留を優先する。

## 11. Reader Layer consistency

公開ページでは、Evidence Table、Search Strategy、Source Verification、Reader Layerの間でClaimの強さを揃える。

特に以下を確認する。

- Evidence TableでMixed / UncertainのClaimがReader Layerで断定されていない
- observational associationが家庭向け文章でcausal recommendationへ変化していない
- guideline由来の実践上の推奨と、研究から直接推定したeffectを区別している
- 「推奨」「避けるべき」などの規範的表現には、その根拠がguidelineなのかevidence synthesisなのか分かるようにする

## 12. Update policy

一律の Living Review としない。

通常は年1回を基準とし、変化の速い領域、新しい主要guideline、重要なsystematic review、公的勧告変更などがある場合に前倒しで再評価する。

再検索では、前回anchorの検索終了日以降を明示的に確認する。重要な新規研究を採用しなかった場合も、対象外とした理由をsearch recordへ残す。

変更時には、前版から何が変わったかを残す。
