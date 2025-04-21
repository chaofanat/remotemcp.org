<template>
  <div class="what-is-mcp">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>什么是MCP?</h1>
        <p>了解Model Context Protocol的基础概念和工作原理</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>什么是MCP?</span>
        </div>
        
        <div class="guide-content">
          <h2>Model Context Protocol简介</h2>
          <p>Model Context Protocol（简称MCP）是一种创新的协议，设计用于增强人工智能模型与外部工具、数据源和服务之间的交互能力。它代表了AI系统与现实世界交互方式的重大进步，使AI能够在理解上下文的同时执行具体操作。</p>
          
          <div class="note">
            <strong>简单来说：</strong> MCP是一种让AI模型能够"看到"和"操作"真实世界数据和服务的标准化方法。
          </div>
          
          <h2>MCP的核心原理</h2>
          <p>MCP的工作原理基于以下几个关键概念：</p>
          
          <h3>1. 上下文理解</h3>
          <p>MCP允许AI模型获取并理解更丰富的上下文信息，而不仅仅是文本输入。这包括：</p>
          <ul>
            <li>用户环境数据（如操作系统、地理位置等）</li>
            <li>应用程序状态</li>
            <li>相关文档和资源</li>
            <li>历史交互记录</li>
          </ul>
          
          <h3>2. 工具调用能力</h3>
          <p>MCP赋予AI模型调用外部工具和服务的能力，这些包括：</p>
          <ul>
            <li>搜索引擎和知识库</li>
            <li>代码执行环境</li>
            <li>数据分析工具</li>
            <li>API和第三方服务</li>
            <li>文件系统和数据存储</li>
          </ul>
          
          <h3>3. 标准化接口</h3>
          <p>MCP提供了一套标准化的接口规范，确保不同的AI模型和工具之间能够无缝协作。这降低了集成复杂性，并允许生态系统中的各个组件独立发展。</p>
          
          <h2>为什么MCP很重要？</h2>
          <p>MCP协议的出现解决了传统AI系统面临的多项限制：</p>
          
          <ul>
            <li><strong>克服知识截止问题</strong> - 通过实时访问最新信息，AI不再受限于训练数据的时间限制</li>
            <li><strong>扩展能力边界</strong> - AI能够执行超出其内置能力的任务，如复杂计算、专业分析等</li>
            <li><strong>提高任务准确性</strong> - 获取准确、最新的信息使AI回答更可靠</li>
            <li><strong>实现真正的助手体验</strong> - 从纯对话式AI转变为能够执行实际操作的助手</li>
          </ul>
          
          <h2>MCP架构概览</h2>
          <p>MCP协议的架构由以下主要组件构成：</p>
          
          <h3>模型组件</h3>
          <p>AI模型本身，负责理解用户意图、处理上下文信息，并决定需要调用哪些工具。</p>
          
          <h3>上下文管理器</h3>
          <p>负责收集、组织和提供相关上下文信息，确保模型拥有充分的背景来做出决策。</p>
          
          <h3>工具注册表</h3>
          <p>包含可用工具的目录，每个工具都有明确定义的功能、参数和返回值格式。</p>
          
          <h3>执行环境</h3>
          <p>安全地执行工具调用，并将结果返回给模型进行进一步处理。</p>
          
          <h3>安全层</h3>
          <p>确保所有操作都在适当的权限范围内执行，保护用户数据和系统安全。</p>
          
          <h2>MCP的实际应用</h2>
          <p>MCP已经在多个领域展现出强大的应用潜力：</p>
          
          <ul>
            <li><strong>智能助手</strong> - 能够查询实时信息、控制设备、安排日程等</li>
            <li><strong>代码开发</strong> - 辅助编程，可以检索文档、生成代码、运行测试等</li>
            <li><strong>数据分析</strong> - 处理和可视化数据，生成洞察和报告</li>
            <li><strong>内容创作</strong> - 结合最新资料创作高质量内容</li>
            <li><strong>教育和学习</strong> - 提供交互式学习体验和定制化教学</li>
          </ul>
          
          <div class="note">
            <strong>重要提示：</strong> MCP是一个不断发展的生态系统，新工具和功能正在持续加入，扩展AI的能力边界。
          </div>
          
          <h2>开始使用MCP</h2>
          <p>要开始体验MCP的强大功能，您可以：</p>
          
          <ol>
            <li>浏览我们的<router-link to="/directory">服务目录</router-link>，寻找支持MCP的服务</li>
            <li>阅读<router-link to="/guide/quick-start">快速入门指南</router-link>，了解如何连接和使用MCP服务</li>
            <li>查看<router-link to="/guide/mcp-concepts">MCP核心概念</router-link>，深入理解协议的工作方式</li>
          </ol>
          
          <div class="guide-navigation">
            <router-link to="/guide" class="btn">&larr; 返回指南首页</router-link>
            <router-link to="/guide/mcp-vs-api" class="btn">下一篇：MCP vs 传统API &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// "什么是MCP"页面逻辑
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

.guide-content img {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin: 20px 0;
}

.guide-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
}
</style> 