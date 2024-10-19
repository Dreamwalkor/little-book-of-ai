import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import footnote from "markdown-it-footnote";
import sup from "markdown-it-sup";
import sub from "markdown-it-sub";
import mark from "markdown-it-mark";
import ins from "markdown-it-ins";

export default withMermaid(
  {
    title: "人工智能小白书",
    description: "A VitePress Site",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
      ],

      sidebar: [
        { text: '00. 前言', link: '/00' },
        { text: '01. 一个 AMA 机器人', link: '/01' },
        { text: '02. 安全永远第一', link: '/02' },
        { text: '03. 智能的核心：判断', link: '/03' },
        { text: '04. 进化的核心：递归', link: '/04' },
        { text: '05. 方法的核心：流程', link: '/05' },
        { text: '06. 人工智能的特长', link: '/06' },
        { text: '07. 人工智能排斥懒人', link: '/07' },
        { text: '08. 学习路径的颠覆', link: '/08' },
        { text: '09. 人人都可以生产', link: '/09' },
        { text: '10. 人人都能用英语', link: '/10' },
        { text: '11. 必须用好计算机', link: '/11' },
        { text: '12. 最大限制是自己', link: '/12' },
        { text: '13. ChatGPT 之外', link: '/13' },
        { text: '14. 关于插图', link: '/14' },
        { text: '15. 后记', link: '/15' },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
    lastUpdated: true,

    markdown: {
      // https://vitepress.dev/reference/markdown
      math: true,
      config: (md) => {
        // use more markdown-it plugins!
        md.use(footnote);
        md.use(sub);
        md.use(sup);
        md.use(mark);
        md.use(ins);
      },
      toc: {
        level: [1, 2, 3]
      }
    },
    srcExclude: ['**/README.md', '**/TODO.md', '_ignored']
  })

