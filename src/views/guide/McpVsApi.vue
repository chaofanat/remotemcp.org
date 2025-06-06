<template>
  <div class="mcp-vs-api">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP vs 传统API</h1>
        <p>了解Model Context Protocol与传统API之间的关键区别和优势</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>MCP vs 传统API</span>
        </div>
        
        <div class="guide-content">
          <h2>MCP与传统API的根本区别</h2>
          <p>虽然Model Context Protocol (MCP)和传统的应用程序接口(API)都为软件组件之间的通信提供了方法，但它们在设计理念和实现方式上存在根本性的差异。理解这些差异对于选择适合特定应用场景的技术至关重要。</p>
          
          <div class="note">
            <strong>核心区别：</strong> 传统API是为确定性计算设计的接口，而MCP专为AI模型这类需要理解上下文的系统设计，能够处理模糊性并支持智能决策。
          </div>
          
          <h2>关键特性对比</h2>
          
          <table class="comparison-table">
            <thead>
              <tr>
                <th>特性</th>
                <th>传统API</th>
                <th>MCP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>设计目标</strong></td>
                <td>支持确定性计算，精确的输入-输出映射</td>
                <td>支持上下文感知的AI模型，处理模糊性和复杂意图</td>
              </tr>
              <tr>
                <td><strong>调用方式</strong></td>
                <td>直接、精确的方法调用，需要开发者显式编码</td>
                <td>AI根据上下文和用户意图自动决定调用方式</td>
              </tr>
              <tr>
                <td><strong>上下文管理</strong></td>
                <td>上下文需手动传递，每次调用通常是独立的</td>
                <td>自动管理上下文，保持对话和操作历史</td>
              </tr>
              <tr>
                <td><strong>错误处理</strong></td>
                <td>严格的错误代码和异常处理</td>
                <td>柔性错误处理，能够理解失败原因并尝试替代方案</td>
              </tr>
              <tr>
                <td><strong>使用复杂度</strong></td>
                <td>需要技术专业知识，学习曲线较陡</td>
                <td>自然语言交互，降低非技术用户的使用门槛</td>
              </tr>
              <tr>
                <td><strong>文档需求</strong></td>
                <td>需要详细的技术文档</td>
                <td>文档仍然重要，但AI能够自主解析和理解接口</td>
              </tr>
              <tr>
                <td><strong>版本管理</strong></td>
                <td>版本变更可能导致破坏性更改</td>
                <td>更高的兼容性，能够适应接口的微小变化</td>
              </tr>
            </tbody>
          </table>
          
          <h2>MCP的独特优势</h2>
          
          <h3>1. 智能意图解析</h3>
          <p>MCP能够根据用户的自然语言表述来理解他们的真实意图，而不必要求用户精确地指定参数和方法。这种能力大大降低了用户与系统交互的认知负担。</p>
          
          <h3>2. 自适应交互</h3>
          <p>与严格遵循预定格式的传统API不同，MCP可以适应各种表达方式和不完整的请求，通过理解上下文来补全缺失的信息。</p>
          
          <h3>3. 多步骤任务协调</h3>
          <p>MCP能够自动分解复杂任务，进行多个操作的协调，并在需要时请求额外信息，这对于传统API来说通常需要显式编程实现。</p>
          
          <h3>4. 工具组合能力</h3>
          <p>MCP可以智能地组合多个工具和服务来完成任务，而无需用户了解每个工具的细节和它们如何协同工作。</p>
          
          <div class="note">
            <strong>示例：</strong> 用户请求"分析上个月的销售数据并创建一个包含主要趋势的报告"可以由MCP自动分解为数据获取、分析和报告生成等步骤，无需用户编写详细代码。
          </div>
          
          <h2>传统API的优势场景</h2>
          <p>尽管MCP提供了许多优势，但传统API在某些场景下仍然是更好的选择：</p>
          
          <ul>
            <li><strong>高性能要求</strong> - 当需要极高的性能和低延迟时，直接API调用通常更为高效</li>
            <li><strong>确定性操作</strong> - 对于需要100%可预测行为的关键任务系统</li>
            <li><strong>简单接口</strong> - 对于功能单一、使用简单的服务，传统API可能更加直接</li>
            <li><strong>资源受限环境</strong> - 在内存或处理能力受限的环境中</li>
          </ul>
          
          <h2>MCP和API的协同关系</h2>
          <p>重要的是，MCP和传统API并非对立关系，而是可以协同工作：</p>
          
          <ul>
            <li>MCP可以作为传统API之上的智能层，简化复杂API的使用</li>
            <li>传统API可以作为MCP的基础设施，提供确定性和高性能的服务</li>
            <li>许多系统可以同时提供API和MCP接口，满足不同用户的需求</li>
          </ul>
          
          <h2>选择合适的接口类型</h2>
          <p>在决定使用MCP还是传统API时，考虑以下因素：</p>
          
          <h3>选择MCP的情况：</h3>
          <ul>
            <li>目标用户包括非技术人员</li>
            <li>任务涉及自然语言理解</li>
            <li>操作需要上下文感知</li>
            <li>使用场景涉及复杂的多步骤流程</li>
            <li>需要适应用户的不同表达方式</li>
          </ul>
          
          <h3>选择传统API的情况：</h3>
          <ul>
            <li>系统对性能要求极高</li>
            <li>需要精确控制每个操作步骤</li>
            <li>操作属于简单、标准化的功能</li>
            <li>目标是系统间的自动集成而非人机交互</li>
          </ul>
          
          <h2>未来发展方向</h2>
          <p>随着技术的发展，我们可以预见：</p>
          
          <ul>
            <li>更多传统服务将开始提供MCP接口</li>
            <li>MCP和API之间的边界将变得更加模糊</li>
            <li>将出现专门优化的工具，使MCP能力更容易集成到现有系统中</li>
            <li>更强大的上下文处理能力将使MCP在复杂任务中的优势更加明显</li>
          </ul>
          
          <div class="guide-navigation">
            <router-link to="/guide/what-is-mcp" class="btn">&larr; 上一篇：什么是MCP?</router-link>
            <router-link to="/guide/mcp-concepts" class="btn">下一篇：MCP核心概念 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// "MCP vs 传统API"页面逻辑
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
  margin-top: 30px;
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

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
}

.comparison-table th, .comparison-table td {
  border: 1px solid var(--light-gray);
  padding: 12px;
  text-align: left;
}

.comparison-table th {
  background-color: var(--secondary-light);
  font-weight: 600;
}

.comparison-table tr:nth-child(even) {
  background-color: var(--lightest-gray);
}
</style> 