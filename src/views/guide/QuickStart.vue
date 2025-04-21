<template>
  <div class="quick-start-page">
    <!-- 顶部介绍区 -->
    <section class="hero-section">
      <div class="container">
        <h1>快速入门 MCP</h1>
        <p class="lead">本指南将帮助您快速上手并开始使用 Model Context Protocol（MCP）</p>
      </div>
    </section>

    <!-- 面包屑导航 -->
    <div class="breadcrumb-nav container">
      <router-link to="/">首页</router-link> &gt; 
      <router-link to="/guide">用户指南</router-link> &gt; 
      <span>快速入门</span>
    </div>

    <!-- 主要内容区 -->
    <div class="guide-content container">
      <div class="content-wrapper">
        <!-- 目录导航 -->
        <div class="toc">
          <h3>目录</h3>
          <ul>
            <li><a href="#prerequisites">准备工作</a></li>
            <li><a href="#client-setup">客户端设置</a></li>
            <li><a href="#server-connection">连接到 MCP 服务器</a></li>
            <li><a href="#first-interaction">第一次交互</a></li>
            <li><a href="#next-steps">下一步</a></li>
          </ul>
        </div>

        <!-- 主内容 -->
        <div class="main-content">
          <section id="prerequisites">
            <h2>准备工作</h2>
            <p>在开始使用 MCP 之前，您需要确保已具备以下条件：</p>
            <ul>
              <li>已安装 Node.js（推荐 v16 或更高版本）</li>
              <li>对命令行工具有基本了解</li>
              <li>熟悉基本的 AI 模型概念</li>
            </ul>
          </section>

          <section id="client-setup">
            <h2>客户端设置</h2>
            <p>首先，您需要安装 MCP 客户端。</p>
            <div class="code-block">
              <pre><code>npm install @mcp/client</code></pre>
            </div>
            
            <p>在您的项目中导入并初始化客户端：</p>
            <div class="code-block">
              <pre><code>// 导入 MCP 客户端
import { McpClient } from '@mcp/client';

// 初始化客户端
const client = new McpClient({
  // 基本配置
  apiKey: 'your-api-key',
  // 可选：日志级别
  logLevel: 'info'
});</code></pre>
            </div>
          </section>

          <section id="server-connection">
            <h2>连接到 MCP 服务器</h2>
            <p>接下来，您需要连接到 MCP 服务器。您可以选择公共服务器或自行设置。</p>
            
            <h3>选项1：连接到公共 MCP 服务</h3>
            <div class="code-block">
              <pre><code>// 连接到公共服务
await client.connect({
  serverUrl: 'https://api.remotemcp.org/v1',
  serviceId: 'gpt-4-mcp' // 或其他支持的服务
});</code></pre>
            </div>
            
            <h3>选项2：连接到自定义 MCP 服务器</h3>
            <div class="code-block">
              <pre><code>// 连接到自定义服务器
await client.connect({
  serverUrl: 'http://your-mcp-server.com/api',
  serviceId: 'your-custom-service'
});</code></pre>
            </div>
          </section>

          <section id="first-interaction">
            <h2>第一次交互</h2>
            <p>成功连接后，您就可以开始与 MCP 服务交互了。以下是一个简单的示例：</p>
            
            <div class="code-block">
              <pre><code>// 创建会话
const session = await client.createSession();

// 发送消息并接收响应
const response = await session.sendMessage({
  content: "你好，请帮我分析以下数据并生成图表。",
  context: {
    // 提供上下文信息
    data: [
      { month: "一月", sales: 100 },
      { month: "二月", sales: 120 },
      { month: "三月", sales: 90 }
    ]
  }
});

// 处理响应
console.log(response.content);

// 如果响应包含工具调用请求
if (response.toolCalls && response.toolCalls.length > 0) {
  // 处理工具调用...
  const toolResults = await handleToolCalls(response.toolCalls);
  
  // 将工具结果发送回 MCP
  await session.sendToolResults(toolResults);
}</code></pre>
            </div>
          </section>

          <section id="next-steps">
            <h2>下一步</h2>
            <p>恭喜您完成了 MCP 的基本设置和第一次交互！以下是您可以进一步探索的内容：</p>
            <ul>
              <li><router-link to="/guide/mcp-concepts">深入了解 MCP 核心概念</router-link></li>
              <li><router-link to="/guide/effective-prompts">学习如何编写有效的提示</router-link></li>
              <li><router-link to="/guide/use-cases">探索 MCP 的常见应用场景</router-link></li>
              <li><router-link to="/guide/tutorials">查看详细教程</router-link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 如果需要额外的逻辑，可以在这里添加
</script>

<style scoped>
.quick-start-page {
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

.code-block code {
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
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
}
</style> 