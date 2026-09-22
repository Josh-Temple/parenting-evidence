# Site MVP Specification v0.1

Status: DRAFT

## 1. Product purpose

Parenting Evidence の公開サイトは、育児上の疑問について「結論だけ」ではなく、根拠、不確実性、適用範囲まで確認できる日本語の Evidence Review データベースとする。

MVPの主要価値は記事数ではなく、次の4点に置く。

1. 親が30秒程度で現在の結論を把握できる
2. 何が分かっていて、何がまだ分からないかを区別できる
3. 根拠を確認したい人がClaim単位で主要研究まで辿れる
4. 新しい証拠が出たときに更新理由と変更箇所を追跡できる

## 2. Audience

Primary:
- 0〜6歳の子どもを育てる保護者
- 育児情報の真偽や根拠を確認したい人

Secondary:
- 保育・子育て支援に関わる実務者
- Evidence Reviewの調査方法を確認したい読者

MVPでは専門家向け臨床データベースを目指さない。

## 3. Information architecture

### Home

目的:
「記事を読む」より「自分の疑問を探す」ことを入口にする。

要素:
- Search: 質問・キーワード検索
- Age filter:
  - 0〜1歳
  - 1〜3歳
  - 3〜6歳
- Domain filter:
  - 睡眠
  - 食事
  - 行動・しつけ
  - 発達
  - 遊び・学習
  - スクリーン
  - 保育
- Review list
- Methodologyへの明確な導線

初期段階では人気順・ランキングを作らない。

### Review index

各カード / 行に表示:
- 質問
- 対象年齢
- 分野
- 30秒結論の1〜2文
- Last searched
- Status

Evidenceを星、点数、Strong/Weakの一語ラベルでランキングしない。

### Review page

各Reviewページは、Reader Layer と Audit Layer の2層で構成する。

#### Reader Layer

1. Question
2. 30秒で分かる結論
3. 何が分かっているか
4. まだ分からないこと
5. 家庭ではどう考えるか
6. 医療・安全上の境界（必要なReviewのみ）
7. Claim summary
8. Last searched / status

#### Audit Layer

9. Scope / PICO・PECO
10. Claim-by-claim evidence
11. Evidence table
12. Search method
13. Limitations
14. Applicability to Japan
15. Version history

Audit Layerは折りたたみ可能にしてよいが、URL上で常にアクセスできる状態を維持する。

### Methodology

公開する内容:
- Review unit: Question -> Claim -> Outcome -> Evidence
- source priority
- search modes
- systematic reviewとanchored updateの違い
- causality rules
- multicomponent attribution rule
- GRADEを独自に付与しない方針
- safety boundary
- update policy

### Updates

MVPでは独立したニュースフィードは不要。

各Reviewに、
- Initial publication
- Last evidence search
- Last reviewed
- Change log

を表示する。

## 4. Claim presentation

Q001〜Q003で、Review全体を一つのEvidence scoreに圧縮すると誤解が生じることを確認した。

そのため、Claimごとに次を表示する。

Example:

| Claim | What current evidence says | Main limitation |
|---|---|---|
| 読み聞かせ頻度と言語能力には関連がある | 正の関連は比較的一貫 | 主に観察研究 |
| 特別な読み方が通常読み聞かせより優れる | まだ不明確 | active controlとの差が小さい |

内部status codeはデータ管理に使えるが、一般読者には自然な日本語へ変換する。

例:
- SUPPORTED_AS_ASSOCIATION -> 「関連は比較的一貫して確認されています」
- UNCERTAIN -> 「現時点でははっきりしません」
- NOT_ESTABLISHED -> 「この結論を支持する十分な証拠はありません」

## 5. Evidence display rules

### Effect sizes

数字を表示する場合:
- 指標名を必ず併記する
- CIが確認できれば併記する
- relative risk / odds ratio等を直感的な絶対効果に変換できない場合は無理に変換しない
- 「統計的に有意」と「家庭で重要な大きさ」を区別する

### Observational evidence

「効果」ではなく原則「関連」と表現する。

### Program vs component

multicomponent interventionのprogram-level effectを一技法へ帰属しない。

### Safety

「害が確認されなかった」と「安全であることが証明された」を区別する。

## 6. Visual hierarchy

最重要:
- Question
- 30秒結論
- 分かっていること / 分からないこと

次:
- 家庭での含意
- Claim summary

詳細:
- Evidence table
- Search method
- full references

研究手順の透明性を保つが、最初の画面を方法論で埋めない。

## 7. Safety boundary

医療・安全関連Reviewではページ上部に種別を表示する。

- Evidence Review
- Clinical / Public-health Guidance

診断、治療、服薬、予防接種、緊急受診などは現行の公的・専門ガイドラインを優先する。

「発達が心配」「受診すべきか」等の問いで、一般的Reviewを個別診断の代わりにしない。

## 8. MVP content

MVP公開候補:
- Q001 読み聞かせと言語発達
- Q002 スクリーン時間と言語発達
- Q003 タイムアウトと問題行動

ただし、3本とも現在DRAFTであり、独立確認後にPUBLISHEDへ移行する。

Methods:
- Evidence Review Methodology v0.1
- Evidence Schemaの一般読者向け説明

## 9. MVP non-goals

初期MVPでは作らない:
- user account
- personalized recommendation
- AI chatbot
- comments / forum
- parenting diagnosis
- automated publication
- evidence ranking leaderboard
- daily news feed
- native app

## 10. Search and filters

最低限:
- title / question full-text search
- age range
- domain

後回し:
- study design
- certainty
- country
- outcome
- publication year

これらは研究者には便利だが、MVPの親向け入口としては優先しない。

## 11. Data / rendering approach

Research assetsをsource of truthとして維持し、公開サイトはそれをrenderする。

推奨構成:

```text
reviews/
  Q001-.../
    README.md
    search-strategy.md
    evidence-table.md
    review.md
    data.yaml       # 将来
site/
  pages/
  components/
  content-adapter/
```

最初からDBを導入しない。

Review数が少ない間はMarkdown / YAMLから静的生成する方が、監査性と版管理に適する。

## 12. Publication gate

PUBLISHEDへ変更する前に最低限確認する。

- bottom lineがEvidence tableと一致
- observational / causal languageが適切
- program/component attributionが適切
- effect sizeの転記が正しい
- safety boundaryが適切
- source URLs / DOIが機能
- last searchedを表示
- 独立確認を一度実施

## 13. Initial success measures

MVP公開後に見るもの:
- 実際の育児疑問で再訪したか
- 30秒結論だけで理解できたか
- 詳細Evidenceまで開く必要があったか
- どの問いを検索したが存在しなかったか
- 結論より「分からないこと」が意思決定に役立ったか
- 更新に必要な人間時間

Page viewsだけを主要KPIにしない。
