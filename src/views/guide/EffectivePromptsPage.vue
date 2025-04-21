<template>
  <div class="effective-prompts-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>编写有效提示</h1>
        <p>如何优化MCP交互，获得更精准的结果</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <!-- 面包屑导航 -->
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>编写有效提示</span>
        </div>
        
        <div class="guide-content">
          <h2>编写有效MCP提示指南</h2>
          <p>向MCP服务发送请求时，提示的质量直接影响响应的质量。本指南提供了编写有效提示的策略和最佳实践，帮助您获得最佳结果。</p>
          
          <div class="toc">
            <h3>目录</h3>
            <ul>
              <li><a href="#understanding">理解MCP提示的工作原理</a></li>
              <li><a href="#clear-instructions">提供清晰指令</a></li>
              <li><a href="#context">提供足够上下文</a></li>
              <li><a href="#format">指定输出格式</a></li>
              <li><a href="#tools">有效使用工具</a></li>
              <li><a href="#examples">提示示例对比</a></li>
              <li><a href="#templates">提示模板</a></li>
              <li><a href="#common-mistakes">常见错误</a></li>
            </ul>
          </div>
          
          <div id="understanding" class="section-block">
            <h3>理解MCP提示的工作原理</h3>
            <p>在MCP中，提示不仅仅是简单的问题或指令，而是一套结构化数据，包含以下关键元素：</p>
            <ul>
              <li><strong>输入消息</strong>：用户的主要请求或问题</li>
              <li><strong>上下文数据</strong>：相关的背景信息，包括历史交互</li>
              <li><strong>工具规范</strong>：可用的工具及其参数描述</li>
              <li><strong>元数据</strong>：关于请求本身的额外信息</li>
            </ul>
            <p>MCP服务将分析这些元素并生成适当的响应，可能包括直接回答、工具调用建议或需要澄清的问题。</p>
          </div>
          
          <div id="clear-instructions" class="section-block">
            <h3>提供清晰指令</h3>
            <p>清晰、具体的指令是有效提示的基础：</p>
            
            <h4>建议策略</h4>
            <ul>
              <li><strong>明确任务目标</strong>：阐明您希望MCP完成什么</li>
              <li><strong>分解复杂请求</strong>：将复杂任务分解为更小的步骤</li>
              <li><strong>指定约束条件</strong>：明确任何限制或优先级</li>
              <li><strong>避免歧义</strong>：使用精确的术语和描述</li>
            </ul>
            
            <div class="example-comparison">
              <div class="example bad">
                <h5>❌ 低效提示</h5>
                <div class="code-block">
                  <pre><code>"分析数据"</code></pre>
                </div>
                <p>问题：过于宽泛，没有具体说明期望的分析类型或数据格式。</p>
              </div>
              
              <div class="example good">
                <h5>✓ 有效提示</h5>
                <div class="code-block">
                  <pre><code>"请分析附件中的CSV销售数据，找出过去6个月中表现最好的三个产品类别，并说明可能的原因。生成一个简洁的表格摘要，并以不超过150字的段落解释趋势。"</code></pre>
                </div>
                <p>优点：明确了分析范围、期望的输出格式和长度限制。</p>
              </div>
            </div>
          </div>
          
          <div id="context" class="section-block">
            <h3>提供足够上下文</h3>
            <p>充分的上下文信息能帮助MCP更准确地理解您的需求：</p>
            
            <h4>上下文类型</h4>
            <ul>
              <li><strong>相关背景信息</strong>：与任务相关的基本知识或历史</li>
              <li><strong>专业领域信息</strong>：行业特定的术语或概念</li>
              <li><strong>用户偏好</strong>：您的需求、风格偏好或受众</li>
              <li><strong>先前的交互</strong>：引用之前的对话或结果</li>
            </ul>
            
            <div class="example-comparison">
              <div class="example bad">
                <h5>❌ 低效提示</h5>
                <div class="code-block">
                  <pre><code>"创建一个营销电子邮件"</code></pre>
                </div>
                <p>问题：缺乏产品、受众、目标和风格指导。</p>
              </div>
              
              <div class="example good">
                <h5>✓ 有效提示</h5>
                <div class="code-block">
                  <pre><code>"请为我们的新款智能手表创建一封营销电子邮件。我们的目标受众是25-40岁的健身爱好者。电子邮件应强调手表的健康追踪功能和30天电池寿命。我们的品牌风格是专业但友好，请使用我们的标语'为健康而设计'。电子邮件长度应控制在300字以内，包括明确的购买号召性用语。"</code></pre>
                </div>
                <p>优点：提供了产品细节、目标受众、关键卖点、品牌风格和长度要求。</p>
              </div>
            </div>
          </div>
          
          <div id="format" class="section-block">
            <h3>指定输出格式</h3>
            <p>明确您期望的输出格式可以确保结果符合您的需求：</p>
            
            <h4>常用格式指令</h4>
            <ul>
              <li><strong>结构要求</strong>：表格、列表、章节等</li>
              <li><strong>数据格式</strong>：JSON、CSV、Markdown等</li>
              <li><strong>长度限制</strong>：字数、段落数、时间等</li>
              <li><strong>风格指导</strong>：正式/非正式、技术性/通俗等</li>
            </ul>
            
            <div class="example-comparison">
              <div class="example bad">
                <h5>❌ 低效提示</h5>
                <div class="code-block">
                  <pre><code>"总结最近的研究成果"</code></pre>
                </div>
                <p>问题：没有指定输出格式、研究领域或总结长度。</p>
              </div>
              
              <div class="example good">
                <h5>✓ 有效提示</h5>
                <div class="code-block">
                  <pre><code>"请以JSON格式总结过去5年内关于量子计算在药物发现中应用的主要研究成果。每个研究点应包含以下字段：'title'（研究标题）、'year'（发表年份）、'key_finding'（主要发现，最多30字）、'potential_impact'（潜在影响，最多50字）。总共提供不超过5个最有影响力的研究成果。"</code></pre>
                </div>
                <p>优点：明确了输出格式(JSON)、领域范围、时间范围、结构要求和数量限制。</p>
              </div>
            </div>
          </div>
          
          <div id="tools" class="section-block">
            <h3>有效使用工具</h3>
            <p>MCP的一个强大特性是能够使用专门的工具完成特定任务。高效利用工具需要：</p>
            
            <h4>工具使用策略</h4>
            <ul>
              <li><strong>明确需要的工具</strong>：指定您希望使用的工具</li>
              <li><strong>提供必要参数</strong>：确保提供所有必需的参数和值</li>
              <li><strong>解释预期成果</strong>：说明您期望工具实现什么</li>
              <li><strong>组合工具链</strong>：描述多个工具如何配合使用</li>
            </ul>
            
            <div class="example-comparison">
              <div class="example bad">
                <h5>❌ 低效提示</h5>
                <div class="code-block">
                  <pre><code>"帮我写一个分析脚本"</code></pre>
                </div>
                <p>问题：没有指定分析目的、使用的工具或数据格式。</p>
              </div>
              
              <div class="example good">
                <h5>✓ 有效提示</h5>
                <div class="code-block">
                  <pre><code>"请使用数据分析工具，对上传的用户行为CSV文件进行分析。首先，使用'data_cleaning'工具处理缺失值和异常值。然后，使用'correlation_analysis'工具找出'购买频率'与其他用户属性之间的关系。最后，使用'visualization'工具生成前三个最强相关性的散点图。所有图表应使用蓝色和灰色配色方案。"</code></pre>
                </div>
                <p>优点：指定了工具链（清洗、分析、可视化），每个步骤的目标和具体参数。</p>
              </div>
            </div>
          </div>
          
          <div id="examples" class="section-block">
            <h3>提示示例对比</h3>
            <p>下面是几个完整的MCP提示示例，展示了良好实践的应用：</p>
            
            <h4>示例1：数据分析任务</h4>
            <div class="full-example">
              <div class="code-block">
                <pre><code>{
  "input": {
    "message": "请分析附件中过去12个月的网站流量数据，重点关注用户留存率和转化漏斗。我需要了解流量下降的可能原因，并提出改进策略。",
    "data": {
      "type": "csv",
      "url": "https://example.com/website_analytics.csv"
    }
  },
  "context": {
    "businessInfo": {
      "industry": "电子商务",
      "primaryProducts": ["服装", "配饰"],
      "targetAudience": "25-45岁专业人士"
    },
    "goals": [
      "提高移动端转化率",
      "减少购物车放弃率"
    ],
    "previousAnalysis": "上季度我们发现页面加载速度是一个问题"
  },
  "tools": [
    {
      "id": "data_analysis",
      "params": {
        "focus_metrics": ["retention", "conversion", "bounce_rate"],
        "time_comparison": "previous_period"
      }
    },
    {
      "id": "visualization",
      "params": {
        "chart_types": ["line", "funnel"],
        "color_scheme": "blue_gradient"
      }
    }
  ],
  "output_preferences": {
    "format": "detailed_report",
    "sections": ["executive_summary", "key_findings", "recommendations"],
    "length": "medium"
  }
}</code></pre>
              </div>
            </div>
            
            <h4>示例2：内容创建任务</h4>
            <div class="full-example">
              <div class="code-block">
                <pre><code>{
  "input": {
    "message": "创建一个关于人工智能在医疗保健中应用的社交媒体内容计划，覆盖未来4周，每周3篇文章。",
    "constraints": [
      "内容须符合医疗行业法规",
      "避免过度技术术语",
      "每篇文章应包含相关统计数据"
    ]
  },
  "context": {
    "brand_voice": "专业但平易近人，以教育为导向",
    "audience": {
      "primary": "医疗专业人员",
      "secondary": "对健康科技感兴趣的消费者"
    },
    "key_topics": [
      "诊断AI", "远程监控", "医疗数据隐私", 
      "预测分析", "医疗助手机器人"
    ]
  },
  "tools": [
    {
      "id": "content_planner",
      "params": {
        "platform": "all",
        "content_types": ["long_form", "infographic", "short_video_script"],
        "has_cta": true
      }
    },
    {
      "id": "research_assistant",
      "params": {
        "sources": ["recent_medical_journals", "industry_reports"],
        "citation_style": "inline_reference"
      }
    }
  ],
  "output_preferences": {
    "format": "spreadsheet_compatible",
    "includes": ["publication_date", "topic", "content_type", "headline", "key_points", "cta"]
  }
}</code></pre>
              </div>
            </div>
          </div>
          
          <div id="templates" class="section-block">
            <h3>提示模板</h3>
            <p>为了保持一致性并节省时间，可以使用以下提示模板作为起点：</p>
            
            <h4>通用提示模板</h4>
            <div class="code-block">
              <pre><code>{
  "input": {
    "message": "[主要请求或问题]",
    "data": {
      "type": "[数据类型]",
      "content": "[数据内容或URL]"
    },
    "constraints": [
      "[约束条件1]",
      "[约束条件2]"
    ]
  },
  "context": {
    "background": "[相关背景信息]",
    "previous_interactions": "[之前的相关交互]",
    "user_preferences": {
      "[偏好1]": "[值]",
      "[偏好2]": "[值]"
    }
  },
  "tools": [
    {
      "id": "[工具ID]",
      "params": {
        "[参数1]": "[值]",
        "[参数2]": "[值]"
      }
    }
  ],
  "output_preferences": {
    "format": "[期望格式]",
    "style": "[风格指导]",
    "length": "[长度限制]"
  }
}</code></pre>
            </div>
            
            <h4>特定任务模板</h4>
            <p>我们提供了多种特定任务的模板，您可以在<router-link to="/resources/templates">模板库</router-link>中查看和下载。</p>
          </div>
          
          <div id="common-mistakes" class="section-block">
            <h3>常见错误</h3>
            <p>避免以下常见的提示编写错误：</p>
            
            <div class="mistake-table">
              <table>
                <thead>
                  <tr>
                    <th>错误</th>
                    <th>问题</th>
                    <th>改进方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>过于宽泛</td>
                    <td>模糊不清的请求导致泛泛而谈的响应</td>
                    <td>提供具体细节、范围和期望</td>
                  </tr>
                  <tr>
                    <td>过度约束</td>
                    <td>过多的限制可能阻碍MCP发挥创造性</td>
                    <td>专注于关键约束，允许适当的灵活性</td>
                  </tr>
                  <tr>
                    <td>假设知识</td>
                    <td>假设MCP了解特定的非公开信息</td>
                    <td>明确提供所有必要的上下文信息</td>
                  </tr>
                  <tr>
                    <td>忽略工具参数</td>
                    <td>未提供工具所需的完整参数</td>
                    <td>检查每个工具的文档，确保提供所有必需参数</td>
                  </tr>
                  <tr>
                    <td>缺乏组织</td>
                    <td>杂乱无章的提示难以理解</td>
                    <td>使用清晰的结构和逻辑顺序组织提示</td>
                  </tr>
                  <tr>
                    <td>忽略多轮交互</td>
                    <td>未考虑先前交互的上下文</td>
                    <td>引用或总结之前的交互以维持连贯性</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="section-block">
            <h3>结语</h3>
            <p>编写有效的MCP提示是一项需要练习的技能。通过遵循这些最佳实践，并不断迭代改进您的提示，您将能够获得更准确、更有用的响应。记住，提示工程是一个持续改进的过程 - 分析结果，调整您的方法，并跟踪哪些策略最适合您的特定需求。</p>
            
            <div class="next-steps">
              <h4>下一步学习</h4>
              <ul>
                <li><router-link to="/guide/use-cases">探索MCP常见使用场景</router-link></li>
                <li><router-link to="/guide/mcp-concepts">深入了解MCP核心概念</router-link></li>
                <li><router-link to="/resources/templates">浏览提示模板库</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.guide-content {
  max-width: 800px;
  margin: 0 auto;
}

.toc {
  background-color: var(--lightest-gray);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin: 2rem 0;
}

.toc ul {
  margin-bottom: 0;
}

.section-block {
  margin: 2.5rem 0;
}

.section-block h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--light-gray);
}

.section-block h4 {
  color: var(--secondary-color);
  margin: 1.5rem 0 0.75rem;
}

.example-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .example-comparison {
    grid-template-columns: 1fr;
  }
}

.example {
  background-color: var(--lightest-gray);
  padding: 1.5rem;
  border-radius: var(--border-radius);
}

.example.bad {
  border-left: 4px solid var(--danger-color);
}

.example.good {
  border-left: 4px solid var(--success-color);
}

.example h5 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.full-example {
  margin: 1.5rem 0;
}

.code-block {
  background-color: var(--code-bg);
  padding: 1rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  margin: 1rem 0;
}

code {
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.mistake-table {
  overflow-x: auto;
  margin: 1.5rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--light-gray);
}

th {
  background-color: var(--lightest-gray);
  font-weight: 600;
}

.next-steps {
  background-color: var(--lightest-gray);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin-top: 2rem;
}

.breadcrumbs {
  margin-bottom: 2rem;
  color: var(--text-muted);
}

.breadcrumbs a {
  color: var(--text-muted);
  text-decoration: none;
}

.breadcrumbs a:hover {
  color: var(--primary-color);
}
</style> 