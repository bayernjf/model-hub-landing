export const languages = {
  en: "English",
  zh: "简体中文",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Model Hub — One control plane for every model your projects run",
    "meta.description":
      "Self-hosted model control plane for a single owner: register provider credentials once, curate a five-modality catalog, assign models to projects with roles and daily budgets, and let each project pull its projection and call providers directly.",

    "nav.langSwitch": "中文",
    "hud.status": "Self-hosted · single owner",

    "hero.kicker": "CONTROL PLANE · NOT A GATEWAY",
    "hero.title": "One control plane for every model your projects run.",
    "hero.sub":
      "Model Hub is a self-hosted, single-owner control plane. Register provider credentials once, maintain one catalog across five modalities, and assign models to projects many-to-many. Each project pulls its own projection with a token — then calls the provider directly. Inference traffic never passes through the hub.",
    "hero.cta": "View on GitHub",
    "hero.cta2": "How it works",
    "hero.meta.modalities": "modalities in one catalog",
    "hero.meta.assign": "model↔project assignments",
    "hero.meta.cache": "ETag projection, 304 cached",

    "cap.kicker": "CAPABILITIES",
    "cap.title": "The four things the hub actually does",
    "cap.sub":
      "Everything else — inference, streaming, billing — stays where it belongs: inside your projects.",
    "cap.1.t": "Provider vault",
    "cap.1.d":
      "Presets for Ark Plan, Ark Platform, Agnes, Anthropic, OpenAI and OpenSpeech. Credentials are sealed with AES-256-GCM envelope encryption, shown masked, rotatable, and verifiable with an L1 connection test.",
    "cap.2.t": "Five-modality catalog",
    "cap.2.d":
      "Text, image, video, audio and embedding models in one catalog: multi-dimensional pricing, endpoint and dialect adapters, LiteLLM-compatible naming. Preset entries are opt-in under a strict overlay.",
    "cap.3.t": "Assignments & budgets",
    "cap.3.d":
      "Models map to projects many-to-many, with primary/fallback roles, per-project aliases and daily budgets. Over-budget calls route to a fallback, trip a circuit breaker, or stop at the kill switch.",
    "cap.4.t": "Distribution & resilience",
    "cap.4.d":
      "Projects pull GET /pub/v1/models with a Bearer token; revisions ride ETag and 304. A 0600 local cache keeps every project running even when the hub itself is down.",

    "boundary.kicker": "BOUNDARY",
    "boundary.title": "A control plane, not a gateway.",
    "boundary.sub":
      "The hub decides which models a project may use and hands out the projection. It never sits in the request path.",
    "boundary.p1": "No inference traffic passes through the hub",
    "boundary.p2": "No streaming proxy, no centralized billing",
    "boundary.p3": "End-user BYOK keys stay inside each project — the hub never sees them",
    "boundary.p4": "Usage is reported back for accounting and budgets only",

    "flow.kicker": "WORKFLOW",
    "flow.title": "From credential to running project",
    "flow.sub": "Six steps, each auditable — the same loop the owner's projects already run on.",
    "flow.s1.t": "Register providers",
    "flow.s1.d": "Store credentials encrypted; verify with an L1 connection test.",
    "flow.s2.t": "Curate the catalog",
    "flow.s2.d": "Enable models across five modalities, with pricing, endpoints and dialect adapters.",
    "flow.s3.t": "Register projects",
    "flow.s3.d": "Each project gets a hashed token — the plaintext is shown exactly once.",
    "flow.s4.t": "Assign with guardrails",
    "flow.s4.d": "Many-to-many, roles, aliases, daily budgets. One batch save bumps the catalog revision.",
    "flow.s5.t": "Pull and run",
    "flow.s5.d":
      "model-kit fetches the projection (ETag/304), caches it 0600, calls providers directly, and reports usage back.",
    "flow.s6.t": "Watch the board",
    "flow.s6.d": "Costs by project × source × day × model, budget watermarks, and L1–L4 health checks.",

    "console.kicker": "THE CONSOLE",
    "console.title": "An ops surface, not a mockup",
    "console.sub":
      "Seven screens cover the lifecycle — providers, catalog, projects, assignments, costs and knowledge — drawn with the same console-ui tokens the hub itself ships.",
    "console.tab.dashboard": "Dashboard",
    "console.tab.providers": "Providers",
    "console.tab.models": "Models",
    "console.tab.projects": "Projects",
    "console.tab.assignments": "Assignments",
    "console.tab.costs": "Costs",
    "console.tab.knowledge": "Knowledge",
    "console.sampleLabel": "GET /pub/v1/usage/summary — a real response shape",
    "console.windowTitle": "model-hub · admin console",

    "fit.kicker": "WHO IT'S FOR",
    "fit.title": "Built for one owner running many projects",
    "fit.sub":
      "Not a multi-tenant SaaS. A single-operator control plane for a fleet of projects that share providers and budgets.",
    "fit.1.t": "Several AI projects at once",
    "fit.1.d":
      "zeus, loom, atlas, agent-world and job-agent already read their model configuration from a single hub.",
    "fit.2.t": "Swap models without redeploys",
    "fit.2.d":
      "Change the assignment, bump the revision — projects pick the new projection up on their next refresh cycle.",
    "fit.3.t": "Guardrails, not invoices",
    "fit.3.d":
      "Daily budgets per assignment, fallback routing and a kill switch. BYOK traffic is metered, never billed.",
    "fit.4.t": "Self-hosted by default",
    "fit.4.d":
      "Single owner, docker compose up, bound to 127.0.0.1 — designed for internal or Tailscale exposure behind Caddy HTTPS.",

    "cta.title": "Run your own model control plane",
    "cta.sub":
      "One compose file brings up the hub, the admin console, and a backup sidecar with a 7-day retention.",
    "cta.primary": "View on GitHub",
    "cta.secondary": "Read the README",
    "cta.snippet": "docker compose up --build   # binds 127.0.0.1:8791",

    "foot.tag": "Self-hosted model control plane",
    "foot.nav.cap": "Capabilities",
    "foot.nav.flow": "Workflow",
    "foot.nav.fit": "Who it's for",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",

    "legal.privacyTitle": "Privacy Policy",
    "legal.privacyBody":
      "This is a placeholder. The privacy policy will be finalized before the public launch.",
    "legal.termsTitle": "Terms of Service",
    "legal.termsBody":
      "This is a placeholder. The terms of service will be finalized before the public launch.",
    "legal.updated": "Last updated",
  },

  zh: {
    "meta.title": "Model Hub — 统一模型管理中心",
    "meta.description":
      "单 owner 自托管的模型控制面：厂商凭证一次录入、五模态模型目录统一维护、按项目多对多分配并配角色与日预算；各项目用 token 拉取自己的投影后直连厂商，推理流量不经过 hub。",

    "nav.langSwitch": "English",
    "hud.status": "自托管 · 单 owner",

    "hero.kicker": "控制面 · 非推理网关",
    "hero.title": "所有项目要跑的模型，收进同一个控制面。",
    "hero.sub":
      "Model Hub 是单 owner 自托管的模型控制面：厂商凭证一次录入，五模态目录统一维护，模型按项目多对多分配。各项目凭 token 拉取自己的投影，然后直连厂商——推理流量从不经过 hub。",
    "hero.cta": "查看 GitHub 仓库",
    "hero.cta2": "看怎么跑起来",
    "hero.meta.modalities": "模态同录一册",
    "hero.meta.assign": "模型↔项目分配",
    "hero.meta.cache": "ETag 投影，304 缓存",

    "cap.kicker": "核心能力",
    "cap.title": "hub 真正做的四件事",
    "cap.sub": "其余的一切——推理、流式、计费——都留在各项目内部，各归其位。",
    "cap.1.t": "厂商凭证保险库",
    "cap.1.d":
      "预置 Ark Plan、Ark Platform、Agnes、Anthropic、OpenAI 与 OpenSpeech。凭证以 AES-256-GCM 信封加密落库，掩码展示、可轮换，并可用 L1 连接测试验证。",
    "cap.2.t": "五模态模型目录",
    "cap.2.d":
      "文本、图像、视频、音频、向量五类模型同录一册：多维定价、端点与方言 adapter、LiteLLM 兼容命名；预置清单默认不勾选，strict overlay 生效。",
    "cap.3.t": "分配与预算",
    "cap.3.d":
      "模型与项目多对多分配，支持 primary/fallback 角色、项目内 alias 与日预算。超预算的调用自动切到 fallback、触发熔断，或由 kill switch 终止。",
    "cap.4.t": "下发与韧性",
    "cap.4.d":
      "项目用 Bearer token 拉取 GET /pub/v1/models，revision 搭 ETag 与 304；0600 本地缓存兜底，hub 宕机时项目照常运行。",

    "boundary.kicker": "边界",
    "boundary.title": "是控制面，不是网关。",
    "boundary.sub": "hub 只决定项目能用哪些模型并下发投影，从不坐在请求链路上。",
    "boundary.p1": "推理流量不经过 hub",
    "boundary.p2": "不做流式中转，不做集中扣费",
    "boundary.p3": "终端用户的 BYOK 留在各项目内，hub 不感知、不触碰",
    "boundary.p4": "usage 仅回传用于记账与预算",

    "flow.kicker": "工作流",
    "flow.title": "从一把凭证到一个在跑的项目",
    "flow.sub": "六步，每步可审计——owner 的项目群现在就跑在这条回路上。",
    "flow.s1.t": "录入厂商凭证",
    "flow.s1.d": "凭证加密落库，用 L1 连接测试验证可用。",
    "flow.s2.t": "维护模型目录",
    "flow.s2.d": "跨五模态启用模型，配好定价、端点与方言 adapter。",
    "flow.s3.t": "注册项目",
    "flow.s3.d": "每个项目拿到一把哈希存储的 token——明文只展示一次。",
    "flow.s4.t": "带护栏分配",
    "flow.s4.d": "多对多、角色、alias、日预算；整批保存，revision 自增。",
    "flow.s5.t": "拉取并运行",
    "flow.s5.d": "model-kit 拉取投影（ETag/304）、0600 缓存兜底、直连厂商推理，并把 usage 回传。",
    "flow.s6.t": "盯看板",
    "flow.s6.d": "按 项目 × 来源 × 天 × 模型 看成本，看预算水位，跑 L1–L4 健康检查。",

    "console.kicker": "管理台",
    "console.title": "真实的运营界面，不是效果图",
    "console.sub":
      "七个页面覆盖全生命周期——厂商、目录、项目、分配、成本与知识——用的正是 hub 自己出厂的 console-ui 令牌。",
    "console.tab.dashboard": "总览",
    "console.tab.providers": "厂商",
    "console.tab.models": "模型",
    "console.tab.projects": "项目",
    "console.tab.assignments": "分配",
    "console.tab.costs": "成本",
    "console.tab.knowledge": "知识",
    "console.sampleLabel": "GET /pub/v1/usage/summary —— 真实响应结构",
    "console.windowTitle": "model-hub · 管理台",

    "fit.kicker": "适用场景",
    "fit.title": "为一个 owner 跑多个项目而生",
    "fit.sub": "不是多租户 SaaS，而是单操作员的控制面，服务一群共享厂商与预算的项目。",
    "fit.1.t": "同时在跑多个 AI 项目",
    "fit.1.d": "zeus、loom、atlas、agent-world、job-agent 已经在从同一个 hub 读取模型配置。",
    "fit.2.t": "换模型不用重新部署",
    "fit.2.d": "改分配、bump revision——项目在下一个刷新周期自动拿到新投影。",
    "fit.3.t": "要护栏，不要账单惊吓",
    "fit.3.d": "按分配设日预算，fallback 路由加 kill switch；BYOK 流量只计量、不计费。",
    "fit.4.t": "默认自托管",
    "fit.4.d": "单 owner、docker compose 一键起、绑定 127.0.0.1——按内网或 Tailscale 暴露设计，Caddy 终止 HTTPS。",

    "cta.title": "把模型控制面跑在你自己的机器上",
    "cta.sub": "一个 compose 文件拉起 hub、管理台，以及保留 7 天的备份 sidecar。",
    "cta.primary": "查看 GitHub 仓库",
    "cta.secondary": "读 README",
    "cta.snippet": "docker compose up --build   # 绑定 127.0.0.1:8791",

    "foot.tag": "自托管模型控制面",
    "foot.nav.cap": "核心能力",
    "foot.nav.flow": "工作流",
    "foot.nav.fit": "适用场景",
    "foot.nav.privacy": "隐私政策",
    "foot.nav.terms": "服务条款",

    "legal.privacyTitle": "隐私政策",
    "legal.privacyBody": "占位内容。公开上线前将完善隐私政策。",
    "legal.termsTitle": "服务条款",
    "legal.termsBody": "占位内容。公开上线前将完善服务条款。",
    "legal.updated": "最后更新",
  },
} as const;

export type Lang = keyof typeof languages;
export type UIKey = keyof (typeof ui)["en"];
