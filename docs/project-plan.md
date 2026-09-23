# Project Plan v1.0

Status: PILOT_COMPLETED / NEXT_PHASE_PLANNING

## Goal

親が育児上の疑問について、結論だけでなく、その結論を支える研究と不確実性まで確認できる日本語の Evidence Review データベースを作る。

## Initial scope

- 主対象: 0〜6歳
- 初期分野: 睡眠、食事、行動・しつけ、発達、遊び・学習、スクリーン、保育
- 初期成果: 5本の Pilot Review
- 初期サイト: 検索、年齢・分野による絞り込み、Review 本文、Methods、更新履歴

## Pilot set

1. 読み聞かせと言語発達
2. スクリーン時間と言語発達
3. タイムアウトと問題行動
4. 睡眠トレーニングの効果と長期影響
5. 保育園への早期入園と発達

Pilot は「人気テーマ5件」ではなく、異なる研究デザイン・因果推論上の難しさを含む問いを通し、Methodology が一般化できるかを確認するために選ぶ。

## MVP success criteria

記事数を主要指標にしない。

最初の判断基準は次のとおり。

- Review を読めば、結論と不確実性を短時間で把握できる
- 根拠を確認したい読者が主要研究まで辿れる
- 同じ手順で別テーマを再調査できる
- 新しい証拠が出た際、影響する Claim を特定できる
- 実際の育児上の疑問で再利用したくなる

## Site boundary

初期MVPでは、ユーザー登録、個別最適化、AIチャット、コミュニティ機能は作らない。

まず Evidence Review の質、検索性、更新可能性を検証する。

## Research / publication separation

調査中の資料、探索的メモ、未検証の解釈と、公開可能な Review を分ける。

公開ページへ出すのはPublication Gateを通過して `PUBLISHED` となった成果のみとする。

## Completed pilot sequence

以下は完了済み。

1. Q001〜Q005の検索・Evidence table・Reader Layer作成
2. 主要出典のsource verification
3. 5件それぞれの独立publication review
4. Publication Gate通過
5. Evidence Review Methodology v1.0への一般化
6. AstroによるサイトMVP実装
7. 横断QA
8. 再利用テンプレートとProduction release checklist作成

## Next phase

Production反映後は、記事数を急増させる前に次を優先する。

1. 公開後smoke testとProduction SHA確認
2. 実際の検索・閲覧で見つかる欠落質問の収集
3. 更新作業の人間時間と再現性の測定
4. Q006以降の候補をpain / evidence availability / Japan applicabilityで選定
5. 必要に応じてMethodology v1.xを更新
