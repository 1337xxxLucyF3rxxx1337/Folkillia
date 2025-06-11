// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LADY THE KILLA",
  // tagline: "I love linux.",
  favicon: "img/favicon.ico",

  //plugins: ["docusaurus-plugin-sass"],

  // Set the production url of your site here
  url: "https://cyber-syntax.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // Cyber-Syntax/
  baseUrl: "/Folkillia/",

  projectName: "Folkillia", // Usually your repo name.
  organizationName: "1337xxxLucyF3rxxx1337", // Usually your GitHub org/user name.
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/1337xxxLucyF3rxxx1337/Folkillia",
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          postsPerPage: 5,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/1337xxxLucyF3rxxx1337/Folkillia",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "nixos",
        path: "nixos",
        routeBasePath: "nixos",
        sidebarPath: "./sidebars.js",
        // ... other options
        editUrl: "https://github.com/1337xxxLucyF3rxxx1337/Folkillia",
        // Equivalent to `enableUpdateBy`.
        showLastUpdateAuthor: true,
        // Equivalent to `enableUpdateTime`.
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev",
        path: "dev",
        routeBasePath: "dev",
        sidebarPath: "./sidebars.js",
        // ... other options
        editUrl: "https://github.com/1337xxxLucyF3rxxx1337/Folkillia",
        // Equivalent to `enableUpdateBy`.
        showLastUpdateAuthor: true,
        // Equivalent to `enableUpdateTime`.
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: "img/docusaurus-social-card.jpg",
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
