// sidey.config.ts

export const sideyConfig = {
  /**
   * Global SEO and Site Identity
   * -------------------------------------------------------------------------
   * These values populate your HTML meta tags, RSS feed definitions,
   * and structural header components across the template.
   */
  site: {
    // ブラウザタブや検索結果に表示されるタイトル
    title: "IoT・セキュリティコンサルティング | Nobuo",

    // SEO・SNSカードに使われる短い説明文
    description: "IoT、製造業DX、地域情報管理を専門とするセキュリティコンサルタント。製品セキュリティ、LoRaWAN、OTセキュリティ、地域DXの安全設計を支援します。",

    // 公開する本番URL（GitHub Pages / CloudFront / Vercel など）
    url: "https://portfolio.office-katonobu.com",

    // 著者名（著作権表記やmetaタグに使用）
    author: "Nobuo",

    // HTML の lang 属性（日本語サイトなら "ja"）
    locale: "ja",
  },

  pages: {
    home: "pages/index.mdx",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Home", href: "/index" },
    { label: "Writings", href: "/writings" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ],
}

export type SideyConfigType = typeof sideyConfig
