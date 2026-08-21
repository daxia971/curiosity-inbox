# 📮 好奇心收件箱 curiosity-inbox

白天随手丢"为什么"，深夜 AI 研究员自动联网翻资料，早上收一份带出处的图文答卷。日积月累，攒出一本只属于自己的《好奇心百科》。

## 结构

- `index.html` — 邮局风视图（答卷时间线 / 收件箱 / 搜索 / 随机重温），零依赖，双击即用
- `data.js` — 唯一数据源，`window.CURIO.items` 数组，每条是一个问题（pending → answered）

## 工作流

1. **收题**：对 Claude 说 `好奇：XXX`，问题以 pending 状态 append 进 `data.js`
2. **夜研**：每晚 23:30 定时任务自动运行——取最早的最多 3 条 pending，多 agent 并行从不同角度检索（科学机制 / 历史由来 / 反方观点 / 中文语境），汇总执笔成答卷（一句话结论 + 3-5 段展开 + ≥2 个真实来源）
3. **收卷**：早上打开 `index.html` 看答卷

## 数据格式

```js
// 待解
{ id: "kebab-slug", q: "问题", asked: "2026-08-21", status: "pending" }
// 已解
{ id, q, asked, status: "answered", answered: "日期",
  tags: ["标签"], tldr: "一句话结论",
  body: `<p>…</p>`, sources: [{ t: "来源", u: "URL" }] }
```

铁律：已 answered 的条目永不修改；id 唯一不复用；body 内禁反引号。

---
*Powered by Claude Code · 一个测试工程师的 AI 自动化日常*
