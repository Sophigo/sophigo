# Sophigo 平台资讯

关注 Sophigo 的最新动态，这里为您提供关于数字制造、快速原型工艺、AI 算法迭代以及社区创客项目的最新行业资讯与平台升级日志。

## 最新公告

### Sophigo 平台正式更名与品牌升级 (2026-06-02)
- 为更好地推进数字化“新工科”建设，平台全线从 ProFabX 升级更名为 **Sophigo**！
- 我们的主站域名及 API 接口均已完成迁移，给您带来的不便敬请谅解。
- 引入了全新的 3D 渲染框架与 Hypothesis 知识共创模块，提升创客交互体验。

### 移动底盘 Sophicar 控制算法文档升级发布 (2026-05-25)
- 发布了支持双轮差速与麦克纳姆轮的二维控制仿真算法与配套 G-Code 校准工具。
- 在课程文档中集成了 Hypothesis 划词协作批注功能，方便创客进行学术和技术交流。

---

## 深度技术报告

<div class="reports-grid">
  <div class="report-card">
    <div class="card-badge">深度分析</div>
    <h3 class="card-title">Leap71 与 Articraft 深度技术分析报告</h3>
    <p class="card-desc">全维度对比 Leap71 计算工程与 Articraft 智能体 3D 关节资产生成。涵盖两家公司的技术方案、核心竞争力、应用群体、商业模式、实战案例与生态探索。</p>
    <div class="card-tags">
      <span class="tag">Computational Eng.</span>
      <span class="tag">Agentic 3D</span>
      <span class="tag">Interactive</span>
    </div>
    <a href="/docs/news/techanalysis/index.html" class="card-link" target="_blank">
      <span>🚀 查看完整交互式报告</span>
      <svg class="arrow-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div>
</div>

---

> [!NOTE]
> 如果您想发布自己的创客项目或者分享相关的 CMF 工艺标准，欢迎划词联系我们，我们将为您开通创作者频道。

<style scoped>
.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}
.report-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
.report-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  background: var(--vp-c-bg-mute);
}
.card-badge {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: rgba(0, 47, 167, 0.1);
  border: 1px solid rgba(0, 47, 167, 0.2);
  padding: 0.25rem 0.6rem;
  border-radius: 99px;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}
.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0 !important;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  border-top: none !important;
}
.card-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1.25rem 0 !important;
  flex-grow: 1;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.card-tags .tag {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-alt);
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
  transition: gap 0.2s;
  align-self: flex-start;
}
.card-link:hover .arrow-icon {
  transform: translateX(4px);
}
.arrow-icon {
  transition: transform 0.2s;
}
</style>
