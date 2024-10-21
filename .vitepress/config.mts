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
        { text: 'Home', link: '/cn/' },
      ],

      sidebar: [
        { text: '00. 前言', link: '/cn/00' },
        { text: '01. 一个 AMA 机器人', link: '/cn/01' },
        { text: '02. 安全永远第一', link: '/cn/02' },
        { text: '03. 智能的核心：判断', link: '/cn/03' },
        { text: '04. 进化的核心：递归', link: '/cn/04' },
        { text: '05. 方法的核心：流程', link: '/cn/05' },
        { text: '06. 人工智能的特长', link: '/cn/06' },
        { text: '07. 人工智能排斥懒人', link: '/cn/07' },
        { text: '08. 学习路径的颠覆', link: '/cn/08' },
        { text: '09. 人人都可以生产', link: '/cn/09' },
        { text: '10. 人人都能用英语', link: '/cn/10' },
        { text: '11. 必须用好计算机', link: '/cn/11' },
        { text: '12. 最大限制是自己', link: '/cn/12' },
        { text: '13. ChatGPT 之外', link: '/cn/13' },
        { text: '14. 关于插图', link: '/cn/14' },
        { text: '15. 后记', link: '/cn/15' },
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

