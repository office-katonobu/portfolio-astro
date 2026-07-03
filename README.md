# portfolio-astro
ポートフォリオサイト

## 動的ページ追加
- sidey.config.ts
  - sideyConfig.navigation に要素を追加。

- src/content
  - writings
    - コンテンツ.mdx がコンテンツ置き場

- src/components/section
  - writeings/WritingCard.astro

- src/layouts/pages
  - WritingPage.astro

- src/pages
  - writings/[...id].astro
  - writings/index.astro

- src/content.config.ts
  - 