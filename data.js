/* 好奇心收件箱数据 —— 由 curiosity-inbox 技能维护
   规则：只 append 新条目 / 把 pending 改成 answered；不改旧 answered 条目；id 唯一不复用 */
window.CURIO = {
  updated: "2026-08-21",
  items: [
    {
      id: "progress-bar-lie",
      q: "为什么进度条总在 99% 卡住？它是不是在骗我？",
      asked: "2026-08-21",
      status: "answered",
      answered: "2026-08-21",
      tags: ["软件", "心理学"],
      tldr: "是的，它在骗你——而且是故意的：真实进度本来就没法算准，设计者干脆把它做成『安抚动画』。",
      body: `
<p><b>先说结论：进度条有三宗罪，一宗比一宗离谱。</b></p>
<p><b>第一宗：它想说真话，但真的做不到。</b>一次"复制文件"其实是十几个子任务的串烧——读盘、写盘、校验、杀毒扫描、更新索引……每一段的速度都不一样，而且没法预知：磁盘写入速度取决于数据落在盘片哪个位置，网络吞吐每毫秒都在变。前 90% 是搬文件（快），最后 10% 是落盘校验和杀毒扫描（慢且时长未知）。如果按"已完成字节数"画进度，就会出现你熟悉的画面：唰一下到 99%，然后一动不动。<b>不是卡了，是最难估的活儿全堆在最后。</b></p>
<p><b>第二宗：它干脆放弃说真话，改学表演。</b>心理学研究发现，人对等待的忍耐度取决于"感觉快不快结束"。所以很多进度条被故意设计成<b>前快后慢</b>——头四分之一的时间就冲到 50%，让你产生"快好了"的错觉，从而不去点取消。中间还有个叫 easing（缓动）的算法把跳变抹平滑，让假进度看起来像真的。1985 年 Brad Myers 在 CHI 会议上证明：<b>人类需要的不是准确的进度，而是"在动"的幻觉</b>——有东西可盯着，等待就显得短。四十年过去，这条结论一直没被推翻。</p>
<p><b>第三宗：有些进度条根本没连着任何真实数据。</b>装机时那种匀速走到 90% 然后等待的条，很多是纯定时动画，走完了活儿还没干完，只能停下来干等。更妙的是反向操作：研究者给进度条加上<b>向后流动的减速条纹</b>，用户会觉得它快了约 11%——啥都没改，只改了观感。</p>
<p><b>测试工程师彩蛋：</b>下次验收进度条，别只测"能不能走到 100%"。真正的测试点是：① 99% 卡住时任务管理器里到底还有没有 IO（区分假死和真校验）；② 取消按钮在最后阶段还生效吗；③ 进度权重是按子任务耗时分配的，还是按数量平均的——后者就是"99% 卡死体验"的元凶。</p>`,
      sources: [
        { t: "HowToGeek：进度条如何骗人，下载为何卡在 99%", u: "https://www.howtogeek.com/how-progress-bars-lie-and-why-downloads-get-stuck/" },
        { t: "Cloud Four：Truth, Lies and Progress Bars", u: "https://cloudfour.com/thinks/truth-lies-and-progress-bars/" },
        { t: "arXiv：用贝叶斯模型评估进度条的时间感知（慢到快 vs 匀速）", u: "https://arxiv.org/pdf/2211.13909" },
        { t: "Wikipedia：Progress bar（含 Myers 1985 与感知研究脉络）", u: "https://en.wikipedia.org/wiki/Progress_bar" }
      ]
    },
    { id: "plane-window-round", q: "为什么飞机窗户都是圆角的，方窗户会出什么事？", asked: "2026-08-21", status: "pending" },
    { id: "drive-letter-c", q: "为什么 Windows 系统盘是 C 盘？A 盘和 B 盘去哪了？", asked: "2026-08-21", status: "pending" },
    { id: "microwave-cold-center", q: "微波炉加热的饭为什么总是边上烫、中间凉？", asked: "2026-08-21", status: "pending" },
    { id: "qr-code-dirty", q: "二维码脏了、破了个角为什么还能扫出来？", asked: "2026-08-21", status: "pending" },
    { id: "mood-cycles-real-happiness", q: "人为什么总有一段时间emo，一段时间特别开心？真正的开心是啥？", asked: "2026-08-21", status: "pending" }
  ]
};
