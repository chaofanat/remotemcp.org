<template>
  <div class="mcp-concepts">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP核心概念</h1>
        <p>深入了解Model Context Protocol的关键组件和工作机制</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>MCP核心概念</span>
        </div>
        
        <div class="guide-content">
          <h2>MCP架构概述</h2>
          <p>
            Model Context Protocol (MCP) 由多个关键组件组成，它们协同工作，使AI模型能够有效地与外部世界交互。
            理解这些组件及其相互关系对于有效地使用和构建MCP服务至关重要。
          </p>
          
          <div class="concept-diagram">
            <div class="diagram-placeholder">
              <img src="@/assets/images/mcp-architecture.jpg" alt="MCP架构图">
            </div>
          </div>
          
          <h2>关键组件</h2>
          
          <div class="concept-card">
            <h3>1. 模型（Model）</h3>
            <p>
              模型是MCP体系中的核心智能组件，通常是一个大型语言模型（LLM）或其他类型的AI模型。
              它负责理解用户意图、解释上下文信息、推理决策，并选择合适的工具来完成任务。
            </p>
            <p>
              模型的主要职责包括：
            </p>
            <ul>
              <li>解析用户请求和指令</li>
              <li>理解和整合上下文数据</li>
              <li>判断何时需要调用外部工具</li>
              <li>整合工具返回的结果</li>
              <li>生成连贯且有帮助的最终响应</li>
            </ul>
          </div>
          
          <div class="concept-card">
            <h3>2. 上下文（Context）</h3>
            <p>
              上下文是MCP名称中的关键元素，代表模型在进行决策和响应时可用的所有相关信息。
              它是一个动态的、多层次的数据结构，包含对话历史、用户信息、环境状态和工具执行结果等。
            </p>
            <p>
              上下文类型包括：
            </p>
            <ul>
              <li><strong>会话上下文</strong>：对话历史和之前的交互</li>
              <li><strong>用户上下文</strong>：用户偏好、设置和权限</li>
              <li><strong>环境上下文</strong>：当前时间、位置、设备信息等</li>
              <li><strong>操作上下文</strong>：工具调用历史和结果</li>
              <li><strong>知识上下文</strong>：外部获取的信息和数据</li>
            </ul>
          </div>
          
          <div class="concept-card">
            <h3>3. 工具（Tools）</h3>
            <p>
              工具是模型可以调用的外部功能单元，使AI能够执行特定的操作或访问外部资源。
              每个工具都有明确定义的输入参数、功能和输出格式。
            </p>
            <p>
              常见工具类型：
            </p>
            <ul>
              <li><strong>查询工具</strong>：搜索引擎、知识库访问</li>
              <li><strong>计算工具</strong>：数学计算、数据分析</li>
              <li><strong>操作工具</strong>：文件操作、API调用</li>
              <li><strong>感知工具</strong>：图像分析、语音处理</li>
              <li><strong>创作工具</strong>：代码生成、内容创建</li>
            </ul>
          </div>
          
          <div class="concept-card">
            <h3>4. 协议（Protocol）</h3>
            <p>
              协议定义了MCP系统中各组件之间如何通信和交互的规则和格式。
              它确保了模型、工具和上下文管理器之间能够无缝协作，是整个系统的"通用语言"。
            </p>
            <p>
              协议的关键特性：
            </p>
            <ul>
              <li>标准化的工具描述和调用格式</li>
              <li>结构化的上下文表示和管理规则</li>
              <li>安全措施和权限控制</li>
              <li>版本兼容性和扩展性机制</li>
            </ul>
          </div>
          
          <h2>MCP工作流程</h2>
          <p>
            了解MCP的工作流程可以帮助您更好地利用MCP服务或构建自己的MCP应用。
            典型的MCP交互流程如下：
          </p>
          
          <ol class="workflow-steps">
            <li>
              <h3>用户输入处理</h3>
              <p>系统接收用户的请求并将其传递给模型，同时准备相关的上下文信息。</p>
            </li>
            <li>
              <h3>意图理解与规划</h3>
              <p>模型分析用户请求，理解其意图，并制定实现目标的计划，包括确定需要使用的工具。</p>
            </li>
            <li>
              <h3>工具选择与调用</h3>
              <p>模型选择适当的工具，准备必要的参数，并按照协议规定的格式发起调用。</p>
            </li>
            <li>
              <h3>工具执行</h3>
              <p>系统执行工具操作，访问外部资源或执行指定的功能，然后返回结果。</p>
            </li>
            <li>
              <h3>结果整合</h3>
              <p>模型接收工具返回的结果，将其整合到上下文中，并据此更新其理解。</p>
            </li>
            <li>
              <h3>响应生成</h3>
              <p>模型基于原始请求、执行的操作和获取的信息生成最终响应。</p>
            </li>
            <li>
              <h3>上下文更新</h3>
              <p>系统更新会话上下文，保存交互历史，为后续请求做准备。</p>
            </li>
          </ol>
          
          <div class="note">
            <strong>重要提示：</strong> 这个流程可能涉及多次工具调用和中间步骤，MCP的强大之处在于能够自动处理这种复杂性，使用户只需关注最终结果。
          </div>
          
          <h2>MCP的安全考虑</h2>
          <p>
            MCP通过允许AI模型与外部系统交互，引入了一系列安全考虑因素。
            了解这些因素对于负责任地使用MCP服务至关重要：
          </p>
          
          <div class="security-considerations">
            <div class="security-item">
              <h3>权限控制</h3>
              <p>MCP系统实施权限控制，确保模型只能访问和操作用户授权的资源和功能。</p>
            </div>
            
            <div class="security-item">
              <h3>数据隐私</h3>
              <p>应当明确了解哪些数据会被提供给模型，以及如何保护敏感信息。</p>
            </div>
            
            <div class="security-item">
              <h3>操作限制</h3>
              <p>系统应实施操作限制，防止模型执行潜在有害的行为或过于资源密集的操作。</p>
            </div>
            
            <div class="security-item">
              <h3>审计与监控</h3>
              <p>MCP系统应提供工具调用和操作的审计记录，以便追踪和监控活动。</p>
            </div>
          </div>
          
          <h2>高级MCP概念</h2>
          
          <div class="advanced-concepts">
            <div class="advanced-concept">
              <h3>多轮对话与状态管理</h3>
              <p>
                MCP系统能够在多轮对话中保持上下文连贯性，这需要复杂的状态管理机制。
                系统会跟踪对话历史、已执行的操作和收集的信息，使模型能够理解对话的进展并做出相应响应。
              </p>
            </div>
            
            <div class="advanced-concept">
              <h3>工具组合与编排</h3>
              <p>
                高级MCP实现支持工具的动态组合和编排，使模型能够创建复杂的工作流程。
                模型可以调用多个工具，将一个工具的输出作为另一个工具的输入，或者根据中间结果调整执行计划。
              </p>
            </div>
            
            <div class="advanced-concept">
              <h3>跨模态交互</h3>
              <p>
                现代MCP系统支持多模态交互，使模型能够处理和生成文本、图像、音频等多种类型的内容。
                这使得MCP应用能够提供更丰富、更自然的用户体验。
              </p>
            </div>
          </div>
          
          <h2>最佳实践</h2>
          <p>使用或构建MCP服务时，请考虑以下最佳实践：</p>
          
          <ul class="best-practices">
            <li>
              <strong>明确表达意图</strong> - 向MCP服务提供清晰、具体的请求，帮助模型更准确地理解您的需求。
            </li>
            <li>
              <strong>提供充分上下文</strong> - 包含必要的背景信息，但避免过多无关详情，以优化模型的理解和响应。
            </li>
            <li>
              <strong>合理管理权限</strong> - 只授予MCP服务执行任务所需的最小权限，遵循最小权限原则。
            </li>
            <li>
              <strong>验证输出</strong> - 检查MCP服务的输出，尤其是在关键或敏感操作中，不要盲目信任自动执行的结果。
            </li>
            <li>
              <strong>迭代优化</strong> - 根据反馈和使用体验不断调整您的提示和工具配置，以改进MCP服务的效果。
            </li>
          </ul>
          
          <div class="guide-navigation">
            <router-link to="/guide/mcp-vs-api" class="btn">&larr; 上一篇：MCP vs 传统API</router-link>
            <router-link to="/guide/quick-start" class="btn">下一篇：快速入门 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// "MCP核心概念"页面逻辑
</script>

<style scoped>
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
  margin-top: 25px;
  margin-bottom: 15px;
  color: var(--secondary-color);
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

.concept-diagram {
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
  padding: 30px;
  margin: 30px 0;
  text-align: center;
  font-style: italic;
  color: var(--text-light);
}

.concept-card {
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
  padding: 25px;
  margin: 25px 0;
  box-shadow: var(--shadow-sm);
}

.concept-card h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 8px;
}

.workflow-steps {
  counter-reset: step-counter;
  list-style-type: none;
  padding-left: 0;
}

.workflow-steps li {
  position: relative;
  padding-left: 45px;
  margin-bottom: 25px;
  counter-increment: step-counter;
}

.workflow-steps li:before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.workflow-steps h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.workflow-steps p {
  margin-bottom: 0;
}

.note {
  background-color: var(--light-gray);
  border-left: 4px solid var(--accent-color);
  padding: 15px;
  margin: 25px 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.security-considerations {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.security-item {
  background-color: var(--lightest-gray);
  border-left: 4px solid var(--warning-color);
  padding: 15px;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.security-item h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.security-item p {
  margin-bottom: 0;
}

.advanced-concept {
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--light-gray);
}

.advanced-concept:last-child {
  border-bottom: none;
}

.best-practices li {
  margin-bottom: 15px;
}

.guide-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
}

@media (max-width: 768px) {
  .security-considerations {
    grid-template-columns: 1fr;
  }
}
</style> 