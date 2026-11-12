# Model Hub — Landing

统一模型管理中心（自托管模型控制面）的落地页：厂商凭证保险库、五模态目录、多对多分配与预算、ETag 投影下发、成本治理。是控制面，不是推理网关。

- 线上（占位域名，待确认）：https://model-hub.bayjf.com （English）· https://model-hub.bayjf.com/zh/ （简体中文）
- 产品仓库：https://github.com/bayernjf/model-hub

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`，无 React island（纯静态）
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`，
  令牌值与 `@bayjf/console-ui`（model-hub 产品管理台在用的令牌源）保持一致
- `@bay/landing-ui` 提供品牌链接与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+（`node -v` 确认；Astro 7 会拒绝 20.x）。

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务，用 Playwright 截取两种
语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png` 作为 og:image。预览图不入库，
每次构建现生成，所以改了首屏视觉不用手动重截。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 目录结构

```
public/            favicon、brand mark、robots.txt、llms.txt / llms-en.txt
scripts/shot.mjs   构建后截取 og:image
src/consts.ts      站点级常量（域名、社交、og 图路径）
src/i18n/          ui.ts 文案字典 + index.ts 语言工具
src/layouts/       Layout.astro（head、reveal 脚本）
src/components/    SEO、Hud、Hero、Capabilities（四项真实能力）、Boundary（非网关边界）、
                   Workflow（六步工作流）、Console（管理台预览）、Fit（适用场景）、
                   Cta、Footer、LegalLayout
src/pages/         index.astro（en）、zh/index.astro、404.astro、
                   privacy / terms（两种语言各一份）
src/styles/        global.css
```

## 内容来源与红线

页面文案全部取自产品仓库真实材料：`README.md`（能力清单、边界声明、快速开始）、
`docs/cost-governance.md`（预算读数契约、Console 区的 JSON 示例）、`handoff.md`
（消费方 zeus/loom/atlas/agent-world/job-agent、部署形态）。未编造用户数、客户
logo、评价、定价或性能数字；隐私/服务条款为占位文案，上线前需定稿。

## 部署（Cloudflare Pages，Git 集成）

已上线：

- GitHub：`bayernjf/model-hub-landing`（public），`main` 生产、`dev` 日常开发
- Pages 项目 `model-hub-landing`，已连接仓库，推送 `main` 自动构建发版，其它分支出 preview
  - Build command：`npx playwright install chromium && npm run build`
  - Build output directory：`dist`
  - Environment variables：`NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`
- 站点：`https://model-hub-landing.pages.dev`

自定义域名 `model-hub.bayjf.com` 已通过 Pages API 绑定到本项目（2026-11-12），
`src/consts.ts` 的 `SITE_URL` 与 `public/robots.txt` 的 Sitemap 地址已一致。
DNS 侧需在 `bayjf.com` zone 加一条 `CNAME model-hub → model-hub-landing.pages.dev`
（Proxied）；当前 Pages 域名状态为 pending，等 DNS 生效后自动签发证书。

## SEO

- 每种语言独立的 title / description，取自 `src/i18n/ui.ts` 的 `meta.*`
- canonical + 三条 hreflang（自身、另一语言、x-default）
- Open Graph + Twitter `summary_large_image`，og:image 用构建时截图
- JSON-LD `@graph`：Organization / WebSite / SoftwareApplication
- `@astrojs/sitemap` 生成带 hreflang 互指的 sitemap
- `prefetch` 全站预取，`inlineStylesheets: 'auto'`

## GEO（生成式引擎优化）

- `public/robots.txt` 显式放行 GPTBot、ClaudeBot、PerplexityBot、CCBot 等 AI 爬虫
- `public/llms.txt`（中文）与 `public/llms-en.txt`（英文）用 markdown 自述产品定义、
  核心能力、工作流与差异点，供答案引擎直接引用
