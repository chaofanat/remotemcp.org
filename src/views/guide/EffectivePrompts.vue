<template>
  <div class="effective-prompts-page">
    <!-- 顶部介绍区 -->
    <section class="hero-section">
      <div class="container">
        <h1>编写有效的 MCP 提示</h1>
        <p class="lead">学习如何编写清晰、有效的提示，充分利用 Model Context Protocol 的能力</p>
      </div>
    </section>

    <!-- 面包屑导航 -->
    <div class="breadcrumb-nav container">
      <router-link to="/">首页</router-link> &gt; 
      <router-link to="/guide">用户指南</router-link> &gt; 
      <span>有效提示</span>
    </div>

    <!-- 主要内容区 -->
    <div class="guide-content container">
      <div class="content-wrapper">
        <!-- 目录导航 -->
        <div class="toc">
          <h3>目录</h3>
          <ul>
            <li><a href="#fundamentals">提示工程基础</a></li>
            <li><a href="#mcp-specific">MCP 特定的提示技巧</a></li>
            <li><a href="#context-strategies">上下文管理策略</a></li>
            <li><a href="#tool-usage">有效的工具使用</a></li>
            <li><a href="#templates">通用提示模板</a></li>
            <li><a href="#examples">实例分析</a></li>
            <li><a href="#troubleshooting">常见问题排查</a></li>
          </ul>
        </div>

        <!-- 主内容 -->
        <div class="main-content">
          <section id="introduction">
            <p>
              编写有效的提示是充分利用 MCP 能力的关键。与传统的 API 不同，Model Context Protocol 允许您通过自然语言与 AI 进行更灵活、更强大的交互，同时也提供了工具调用和上下文管理等高级功能。
              本指南将帮助您掌握 MCP 提示工程的技巧，从基础概念到高级策略。
            </p>
          </section>

          <section id="fundamentals">
            <h2>提示工程基础</h2>
            
            <h3>清晰性优先</h3>
            <p>
              清晰、明确的提示是获得准确结果的基础。避免模糊不清或过于复杂的表述。
            </p>
            <div class="example-box">
              <div class="example-bad">
                <h4>❌ 低效提示</h4>
                <p>"能帮我分析一下这些数据吗？"</p>
              </div>
              <div class="example-good">
                <h4>✅ 有效提示</h4>
                <p>"请分析这组销售数据，重点关注第三季度的收入趋势，并标识销售额下降的产品类别。"</p>
              </div>
            </div>

            <h3>结构化输入</h3>
            <p>
              将复杂请求分解为清晰的步骤或部分，使 AI 能够更系统地处理信息。
            </p>
            <div class="example-box">
              <div class="example-bad">
                <h4>❌ 低效提示</h4>
                <p>"我需要一个新产品的营销方案，并分析竞争对手，预估销售额，规划社交媒体策略。"</p>
              </div>
              <div class="example-good">
                <h4>✅ 有效提示</h4>
                <p>"请为我们的新产品创建营销方案，包括以下几个部分：<br>1. 目标市场分析<br>2. 主要竞争对手概述<br>3. 首年销售预测<br>4. 社交媒体推广策略建议"</p>
              </div>
            </div>
          </section>

          <section id="mcp-specific">
            <h2>MCP 特定的提示技巧</h2>
            
            <h3>明确工具需求</h3>
            <p>
              当您希望 AI 使用特定工具时，明确指出这一点会提高成功率。
            </p>
            <div class="example-box">
              <div class="example-bad">
                <h4>❌ 低效提示</h4>
                <p>"我需要了解比特币的当前价格。"</p>
              </div>
              <div class="example-good">
                <h4>✅ 有效提示</h4>
                <p>"请使用 cryptoPriceTool 查询比特币的当前价格，并分析过去 24 小时的价格波动。"</p>
              </div>
            </div>

            <h3>利用多模态能力</h3>
            <p>
              MCP 支持多模态交互，您可以在提示中结合使用文本、图像和其他媒体形式。
            </p>
            <div class="example-box">
              <div class="example-good">
                <h4>✅ 有效提示</h4>
                <p>"这是我公司产品的照片。请分析图片中的产品设计，并使用 designAnalysisTool 提供改进建议，特别关注人体工程学方面。"</p>
              </div>
            </div>
          </section>

          <section id="context-strategies">
            <h2>上下文管理策略</h2>
            
            <h3>有效提供上下文</h3>
            <p>
              MCP 的一个核心优势是能够管理丰富的上下文。学会有效提供上下文信息可以显著提高响应质量。
            </p>
            <div class="example-box">
              <div class="example-bad">
                <h4>❌ 低效方式</h4>
                <p>"继续我们之前的讨论"（没有提供任何上下文）</p>
              </div>
              <div class="example-good">
                <h4>✅ 有效方式</h4>
                <p>
                  通过 context 参数提供结构化上下文：
                  <pre><code>{
  "previousDiscussion": {
    "topic": "营销策略",
    "lastConclusion": "需要增加社交媒体预算"
  },
  "companyInfo": {
    "industry": "消费电子",
    "targetAudience": "25-40岁专业人士"
  }
}</code></pre>
                </p>
              </div>
            </div>

            <h3>状态保持与记忆管理</h3>
            <p>
              在多轮对话中，正确引用之前的信息而不是完全重复可以提高效率。
            </p>
            <div class="example-box">
              <div class="example-good">
                <h4>✅ 有效提示序列</h4>
                <p>
                  第一轮："分析这份季度销售报告，找出销售额最高的三个产品类别。"<br><br>
                  第二轮："针对你刚才识别的三个最佳销售类别，使用 marketingTool 生成下一季度的营销策略建议。"
                </p>
              </div>
            </div>
          </section>

          <section id="tool-usage">
            <h2>有效的工具使用</h2>
            
            <h3>工具链接策略</h3>
            <p>
              MCP 允许您创建工具链，将多个工具的输出串联起来完成复杂任务。
            </p>
            <div class="example-box">
              <div class="example-good">
                <h4>✅ 工具链接示例</h4>
                <p>"请执行以下分析流程：<br>1. 使用 dataCrawlerTool 收集过去一周关于我们品牌的社交媒体提及<br>2. 使用 sentimentAnalysisTool 分析这些提及的情感倾向<br>3. 使用 visualizationTool 创建情感分布的图表<br>4. 最后，总结关键发现并提出改进建议"</p>
              </div>
            </div>

            <h3>处理工具错误</h3>
            <p>
              提供明确的错误处理指导可以使 AI 在工具调用失败时做出更合适的反应。
            </p>
            <div class="example-box">
              <div class="example-good">
                <h4>✅ 有效错误处理</h4>
                <p>"使用 weatherTool 获取北京未来 5 天的天气预报。如果 API 调用失败，请说明无法获取准确预报，并提供一般季节性建议作为备选。"</p>
              </div>
            </div>
          </section>

          <section id="templates">
            <h2>通用提示模板</h2>
            
            <h3>数据分析模板</h3>
            <div class="template-box">
              <pre><code>请分析以下[数据类型]数据，重点关注：
1. [关注点1]
2. [关注点2]
3. [关注点3]

数据如下：
[插入数据或数据引用]

如果需要，请使用 [可能的工具名称] 工具进行深入分析。
输出格式要求：[指定所需的输出格式]</code></pre>
            </div>

            <h3>内容创建模板</h3>
            <div class="template-box">
              <pre><code>请创建[内容类型]，针对[目标受众]，主题为[主题]。

要求：
- 语调：[正式/友好/专业等]
- 长度：[大致字数或段落数]
- 关键要点：[列出必须包含的关键点]
- 特殊要求：[任何特殊格式、引用或内容要求]

请使用 [相关工具] 获取最新的相关数据或参考材料。</code></pre>
            </div>
          </section>

          <section id="examples">
            <h2>实例分析</h2>
            
            <div class="case-study">
              <h3>案例研究：市场数据分析</h3>
              
              <h4>用户提示</h4>
              <div class="code-block">
                <pre><code>请帮我分析附件中的市场调查数据，重点关注：
1. 18-25岁用户群体的产品偏好
2. 价格敏感度的地区差异
3. 功能偏好与教育水平的相关性

请使用 statisticalAnalysisTool 进行相关性分析，并用 visualizationTool 生成关键发现的图表。

输出格式：简明报告，包含数据洞察、图表和业务建议。</code></pre>
              </div>
              
              <h4>分析</h4>
              <p>
                这个提示有效的原因：
              </p>
              <ul>
                <li><strong>明确的分析目标</strong>：提示明确列出了三个具体的分析重点</li>
                <li><strong>指定工具使用</strong>：明确要求使用特定工具进行分析和可视化</li>
                <li><strong>定义输出格式</strong>：清楚地说明了期望的输出形式</li>
                <li><strong>专业性与简洁性平衡</strong>：提供足够的细节，同时保持简洁</li>
              </ul>
            </div>
          </section>

          <section id="troubleshooting">
            <h2>常见问题排查</h2>
            
            <div class="problem-solution">
              <h3>问题：AI 不使用指定的工具</h3>
              <div class="solution">
                <h4>解决方案</h4>
                <ul>
                  <li>确保明确指出工具名称，并简要说明其用途</li>
                  <li>提供一个需要该工具才能完成的明确任务</li>
                  <li>检查工具是否在当前会话中可用</li>
                  <li>提供示例参数或使用方式</li>
                </ul>
                <div class="example-fix">
                  <p>
                    <strong>改进前</strong>："分析这些网站流量数据。"<br>
                    <strong>改进后</strong>："使用 trafficAnalysisTool 分析附件中的网站流量数据，特别关注转化率下降的页面，并提供改进建议。"
                  </p>
                </div>
              </div>
            </div>

            <div class="problem-solution">
              <h3>问题：上下文丢失或混淆</h3>
              <div class="solution">
                <h4>解决方案</h4>
                <ul>
                  <li>使用结构化的 context 对象提供关键信息</li>
                  <li>在多轮对话中，明确引用之前的结论或决定</li>
                  <li>避免在单个提示中混合过多不相关的主题</li>
                </ul>
                <div class="example-fix">
                  <p>
                    <strong>改进前</strong>："继续我们的讨论。"<br>
                    <strong>改进后</strong>："基于我们之前讨论的电商网站性能问题（高跳出率和低转化率），请提出三个具体的改进建议。"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="conclusion">
            <h2>结语</h2>
            <p>
              掌握有效的 MCP 提示技巧需要实践和不断调整。随着您对系统的了解加深，您的提示会变得更加精确和高效。记住，最好的提示是那些清晰表达意图、提供适当上下文、有效利用工具的提示。
            </p>
            <p>
              我们鼓励您尝试本指南中的技巧，并根据您的特定需求进行调整。随着时间的推移，您会发展出最适合您应用场景的提示模式。
            </p>
          </section>

          <div class="next-resources">
            <h3>相关资源</h3>
            <ul>
              <li><router-link to="/guide/use-cases">MCP 应用场景</router-link></li>
              <li><router-link to="/guide/tutorials">详细教程</router-link></li>
              <li><router-link to="/guide/faq">常见问题解答</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 如果需要额外的逻辑，可以在这里添加
</script>

<style scoped>
.effective-prompts-page {
  padding-bottom: 60px;
}

.hero-section {
  background-color: var(--color-primary-light);
  padding: 50px 0;
  text-align: center;
  margin-bottom: 30px;
}

.hero-section h1 {
  margin-bottom: 16px;
  font-size: 2.5rem;
  color: var(--color-primary);
}

.lead {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-text-secondary);
}

.breadcrumb-nav {
  margin-bottom: 30px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.breadcrumb-nav a {
  color: var(--color-primary);
  text-decoration: none;
}

.breadcrumb-nav a:hover {
  text-decoration: underline;
}

.guide-content {
  display: flex;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
}

.toc {
  position: sticky;
  top: 20px;
  align-self: flex-start;
  width: 250px;
  background-color: var(--color-background-light);
  padding: 20px;
  border-radius: 8px;
}

.toc h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.toc ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.toc li {
  margin-bottom: 10px;
}

.toc a {
  color: var(--color-text);
  text-decoration: none;
  display: block;
  padding: 5px 0;
  transition: color 0.2s;
}

.toc a:hover {
  color: var(--color-primary);
}

.main-content {
  flex: 1;
}

.main-content h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-primary);
}

.main-content h3 {
  margin-top: 30px;
  color: var(--color-text);
}

.main-content p {
  line-height: 1.6;
  margin-bottom: 16px;
}

.main-content ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.main-content li {
  margin-bottom: 8px;
}

.example-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
  padding: 20px;
  background-color: var(--color-background-light);
  border-radius: 8px;
}

.example-bad, .example-good {
  padding: 15px;
  border-radius: 6px;
}

.example-bad {
  background-color: rgba(255, 73, 73, 0.1);
  border-left: 4px solid #ff4949;
}

.example-good {
  background-color: rgba(82, 196, 26, 0.1);
  border-left: 4px solid #52c41a;
}

.example-bad h4, .example-good h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1rem;
}

.template-box {
  background-color: var(--color-code-bg);
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
  overflow-x: auto;
}

.template-box pre {
  margin: 0;
}

.code-block {
  background-color: var(--color-code-bg);
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code, .template-box code {
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.case-study {
  background-color: var(--color-background-light);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.case-study h3 {
  margin-top: 0;
  color: var(--color-primary);
}

.problem-solution {
  background-color: var(--color-background-light);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.problem-solution h3 {
  margin-top: 0;
  color: var(--color-warning);
}

.solution h4 {
  color: var(--color-primary);
  margin-bottom: 15px;
}

.example-fix {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
}

.next-resources {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.next-resources h3 {
  color: var(--color-primary);
}

.next-resources ul {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-left: 0;
  list-style-type: none;
}

.next-resources a {
  display: inline-block;
  padding: 10px 15px;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.next-resources a:hover {
  background-color: var(--color-primary);
  color: white;
}

@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .toc {
    width: 100%;
    position: relative;
    margin-bottom: 30px;
  }
  
  .example-box {
    flex-direction: column;
  }
}
</style> 