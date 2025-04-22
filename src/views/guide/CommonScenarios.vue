<template>
  <div class="common-scenarios">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP 常见使用场景</h1>
        <p>探索 Model Context Protocol 在不同领域的实际应用案例和最佳实践</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>常见使用场景</span>
        </div>
        
        <div class="guide-content">
          <p>
            MCP（Model Context Protocol）凭借其强大的上下文管理和工具调用能力，可以应用于各种场景。
            本页面将介绍一些最常见且有效的 MCP 应用场景，帮助您了解如何在实际业务和日常工作中充分利用 MCP。
          </p>
          
          <h2 id="content-creation">内容创作</h2>
          
          <div class="scenario-card">
            <h3>智能写作助手</h3>
            <p>MCP 可以作为强大的写作辅助工具，帮助用户创建、编辑和优化各种类型的内容。</p>
            
            <h4>典型用例</h4>
            <ul>
              <li>撰写和编辑营销文案、博客文章、产品描述等</li>
              <li>根据提供的关键点生成完整文档</li>
              <li>对现有内容进行风格调整、语法纠错和润色</li>
              <li>将专业内容改写为易于理解的形式，或反之</li>
            </ul>
            
            <h4>MCP 优势</h4>
            <div class="note">
              <ul>
                <li><strong>实时参考</strong>：可以使用工具获取最新信息，确保内容的准确性和时效性</li>
                <li><strong>多轮迭代</strong>：保持上下文的连贯性，便于内容的逐步完善</li>
                <li><strong>格式转换</strong>：可以调用工具将内容转换为不同格式（如 Markdown、HTML 等）</li>
              </ul>
            </div>
            
            <h4>示例提示</h4>
            <div class="code-example">
              <pre><code>请根据以下主题和关键点撰写一篇博客文章：

主题：人工智能在医疗领域的应用
关键点：
1. 诊断辅助系统
2. 药物研发加速
3. 个性化治疗方案
4. 医疗资源优化分配

要求：
- 篇幅约1000字
- 面向非专业读者，语言通俗易懂
- 每个关键点需包含实际案例
- 使用searchTool查询最新的相关研究数据

最后，使用formatTool将文章转换为markdown格式。</code></pre>
            </div>
          </div>
          
          <h2 id="data-analysis">数据分析</h2>
          
          <div class="scenario-card">
            <h3>智能数据分析师</h3>
            <p>MCP 可以帮助用户分析复杂数据，发现隐藏的模式和洞察，并将结果可视化。</p>
            
            <h4>典型用例</h4>
            <ul>
              <li>销售数据分析和趋势预测</li>
              <li>用户行为模式识别</li>
              <li>财务报表解读和异常检测</li>
              <li>市场研究数据整合与分析</li>
            </ul>
            
            <h4>MCP 优势</h4>
            <div class="note">
              <ul>
                <li><strong>工具链接</strong>：可以串联数据清洗、分析和可视化工具</li>
                <li><strong>专业解读</strong>：将复杂的数据分析结果转化为易于理解的见解</li>
                <li><strong>交互式分析</strong>：支持用户通过自然语言逐步深入分析</li>
              </ul>
            </div>
            
            <h4>示例提示</h4>
            <div class="code-example">
              <pre><code>请分析附件中的季度销售数据，完成以下任务：

1. 使用dataCleaningTool处理缺失值和异常值
2. 分析各产品类别的销售趋势，重点关注：
   - 增长最快的产品类别
   - 季节性波动明显的产品
   - 可能存在的区域差异
3. 使用statisticsTools计算关键指标的相关性
4. 使用visualizationTool生成以下图表：
   - 主要产品类别的环比增长率柱状图
   - 销售额地域分布热力图
   - 前五大产品的销售趋势线图

最后，提供一份简明的分析报告，包含关键发现和行动建议。</code></pre>
            </div>
          </div>
          
          <h2 id="coding-assistance">编程辅助</h2>
          
          <div class="scenario-card">
            <h3>智能编程助手</h3>
            <p>MCP 可以作为开发者的得力助手，协助编码、调试和优化。</p>
            
            <h4>典型用例</h4>
            <ul>
              <li>代码生成与补全</li>
              <li>代码重构和优化</li>
              <li>API 使用示例和文档查询</li>
              <li>测试用例生成</li>
              <li>错误排查和修复建议</li>
            </ul>
            
            <h4>MCP 优势</h4>
            <div class="note">
              <ul>
                <li><strong>代码执行</strong>：可以在沙盒环境中执行和测试代码</li>
                <li><strong>文档查询</strong>：能够实时检索最新的API文档和使用示例</li>
                <li><strong>版本控制集成</strong>：可以与git等工具结合，理解代码库的历史和结构</li>
              </ul>
            </div>
            
            <h4>示例提示</h4>
            <div class="code-example">
              <pre><code>我需要开发一个Python函数，用于处理CSV文件中的时间序列数据。要求如下：

1. 函数名为process_time_series
2. 参数：
   - input_file: 输入CSV文件路径
   - output_file: 输出CSV文件路径
   - window_size: 滑动窗口大小（默认值为5）
3. 功能：
   - 读取CSV文件（包含timestamp和value两列）
   - 使用滑动窗口计算移动平均值
   - 检测并标记异常值（超过2个标准差）
   - 将结果保存到新的CSV文件，添加ma_value和is_anomaly列

请使用pandas库实现此功能，并确保代码高效且有适当的错误处理。

生成代码后，请使用codeExecutionTool测试函数在示例数据上的表现。</code></pre>
            </div>
          </div>
          
          <h2 id="personal-assistant">个人助理</h2>
          
          <div class="scenario-card">
            <h3>智能生活助手</h3>
            <p>MCP 可以作为个人日常生活的智能助手，帮助管理任务、提供信息和建议。</p>
            
            <h4>典型用例</h4>
            <ul>
              <li>日程安排和提醒</li>
              <li>个人财务管理</li>
              <li>旅行规划</li>
              <li>餐饮和健康建议</li>
              <li>信息检索和学习辅助</li>
            </ul>
            
            <h4>MCP 优势</h4>
            <div class="note">
              <ul>
                <li><strong>多源信息整合</strong>：可以从多个渠道获取实时信息</li>
                <li><strong>个性化建议</strong>：基于用户历史和偏好提供定制化建议</li>
                <li><strong>工具操作</strong>：直接调用日历、地图、天气等服务</li>
              </ul>
            </div>
            
            <h4>示例提示</h4>
            <div class="code-example">
              <pre><code>我计划下周末去杭州旅游两天，请帮我制定一个合理的行程安排。

需要考虑以下因素：
1. 使用weatherTool查询杭州下周末的天气预报
2. 主要想参观西湖、灵隐寺和宋城
3. 预算约2000元（不含往返交通）
4. 偏好中等价位的本地特色美食
5. 住宿希望在西湖附近

请提供：
- 两天的详细行程安排（包括时间安排）
- 推荐的住宿选择（使用hotelTool查询）
- 餐饮建议（使用foodRecommendationTool）
- 景点间的交通方式和预估时间
- 基于天气的着装建议

如果天气不佳，请同时提供一套替代方案，包括更多室内活动。</code></pre>
            </div>
          </div>
          
          <h2 id="research">研究与学习</h2>
          
          <div class="scenario-card">
            <h3>知识助手</h3>
            <p>MCP 可以辅助研究、学习和知识探索，帮助用户获取、整合和理解复杂信息。</p>
            
            <h4>典型用例</h4>
            <ul>
              <li>学术文献研究和总结</li>
              <li>知识点学习和巩固</li>
              <li>复杂概念解释和类比</li>
              <li>学习材料生成</li>
              <li>研究方向探索</li>
            </ul>
            
            <h4>MCP 优势</h4>
            <div class="note">
              <ul>
                <li><strong>实时资料查询</strong>：可以检索最新的研究成果和学术资源</li>
                <li><strong>多层次解释</strong>：能够根据用户知识水平调整解释的深度</li>
                <li><strong>跨学科整合</strong>：帮助连接不同领域的知识点</li>
              </ul>
            </div>
            
            <h4>示例提示</h4>
            <div class="code-example">
              <pre><code>我正在研究量子计算对密码学的潜在影响。请帮我：

1. 使用researchTools查询近三年内关于量子计算破解传统加密算法的最新研究进展
2. 重点关注以下方面：
   - 量子计算机对RSA和ECC算法的威胁
   - 当前量子安全密码学的主要方向
   - 专家对量子计算实用化时间表的预测

3. 为我提供一份结构化的研究摘要，包括：
   - 关键研究成果概述
   - 主要研究团队和机构
   - 存在的技术挑战
   - 后量子密码学的主要候选算法

4. 建议5-8篇值得深入阅读的重要论文，并使用citationTool生成其引用格式。

请确保信息准确，并注明所有信息的来源。如有不同观点，请一并呈现。</code></pre>
            </div>
          </div>
          
          <h2 id="custom-integration">自定义集成</h2>
          
          <p>
            除了上述常见场景，MCP 的灵活性使其可以与各种特定领域的工具和系统集成，创造出更多专业化的应用场景。
            如果您有特定的业务需求，可以考虑如何利用 MCP 的工具调用、上下文管理等能力，打造适合您需求的解决方案。
          </p>
          
          <div class="note">
            <strong>提示：</strong> 不确定 MCP 是否适合您的特定场景？请<router-link to="/contact">联系我们</router-link>，我们的专家团队可以为您提供定制化建议。
          </div>
          
          <div class="guide-navigation">
            <router-link to="/guide/effective-prompts" class="btn">&larr; 有效提示指南</router-link>
            <router-link to="/guide/faq" class="btn">常见问题 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 无需额外的逻辑
</script>

<style scoped>
/* 采用与WhatIsMcp.vue相同的样式 */
.guide-content {
  max-width: 800px;
  margin: 0 auto;
}

.guide-content h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.guide-content h3 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.guide-content h4 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--text-color);
}

.guide-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.guide-content ul, .guide-content ol {
  margin-bottom: 20px;
  padding-left: 25px;
}

.guide-content li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.guide-content .note {
  background-color: var(--light-gray);
  border-left: 4px solid var(--accent-color);
  padding: 15px;
  margin: 20px 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.guide-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
}

/* 场景卡片样式 */
.scenario-card {
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  padding: 25px;
  margin: 30px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.scenario-card h3 {
  margin-top: 0;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.code-example {
  background-color: var(--code-bg);
  border-radius: var(--border-radius);
  padding: 20px;
  margin: 20px 0;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
}

.code-example code {
  font-family: monospace;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .scenario-card {
    padding: 20px;
  }
}
</style>
