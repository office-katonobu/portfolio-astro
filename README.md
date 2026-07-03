# portfolio-astro
ポートフォリオサイト

## 動的ページ追加
- sidey.config.ts
  - sideyConfig.navigation に要素を追加。

- src/content.config.ts
  - コンテンツを集めるための管理情報定義
  - writings をコピってbaseパスを修正、左辺値変更
  - 新たに作った定義をcollectionsに追加

- src/content/xxx
    - コンテンツ.mdx がコンテンツ置き場

- src/components/section/xxx/XxxCard.astro

- src/layouts/pages
  - XxxPage.astro
    - 戻るのコンポーネントの修正

- src/pages
  - Xxx/[...id].astro
  - Xxx/index.astro
  - ディレクトリごとコピーして各.astroを修正
  - [...id].astro


- src/utils/getContent.ts
  - ここでコンテンツを集めている。
  - 対応する関数を追加
    - getContentsの引数に対してlintエラー出る。
    - src/pages/xxx/[...id].astro の修正で治る。


コマンドパレットで
TypeScript: Restart TS Server
の後、
Developer: Reload Window
で、消える。



