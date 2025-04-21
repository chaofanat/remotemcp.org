<template>
  <div class="quick-start-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>快速入门</h1>
        <p>通过简单步骤开始使用远程MCP服务</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <!-- 面包屑导航 -->
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>快速入门</span>
        </div>
        
        <div class="guide-content">
          <h2>快速入门指南</h2>
          <p>这个指南将帮助您开始使用MCP服务，从设置到实现第一个基本项目。无论您是开发者还是业务用户，都能按照这些步骤快速上手。</p>
          
          <div class="toc">
            <h3>目录</h3>
            <ul>
              <li><a href="#prerequisites">前提条件</a></li>
              <li><a href="#choose-service">选择MCP服务</a></li>
              <li><a href="#setup">环境设置</a></li>
              <li><a href="#first-request">发送第一个请求</a></li>
              <li><a href="#analyze-response">理解响应</a></li>
              <li><a href="#next-steps">下一步</a></li>
            </ul>
          </div>
          
          <div id="prerequisites" class="section-block">
            <h3>前提条件</h3>
            <p>在开始使用MCP服务之前，请确保您具备以下条件：</p>
            <ul>
              <li>基本的编程知识（如果您是开发者）</li>
              <li>已注册RemoteMCP.org账户</li>
              <li>API密钥或授权凭证（从服务提供商处获取）</li>
              <li>支持HTTP请求的开发环境或工具</li>
            </ul>
          </div>
          
          <div id="choose-service" class="section-block">
            <h3>选择MCP服务</h3>
            <p>RemoteMCP.org提供多种MCP服务，每种都有其特定的功能和优势：</p>
            <ol>
              <li>
                <strong>通用MCP服务</strong> - 适合大多数应用场景，提供基础对话和工具调用能力
              </li>
              <li>
                <strong>专业领域MCP</strong> - 针对特定领域（如医疗、法律、金融等）优化的服务
              </li>
              <li>
                <strong>企业MCP解决方案</strong> - 提供高安全性、私有部署和定制功能
              </li>
            </ol>
            <p>对于初学者，我们建议从通用MCP服务开始，了解基本功能后再探索更专业的服务。</p>
            <p>访问<router-link to="/directory">服务目录</router-link>查看所有可用服务的详细比较。</p>
          </div>
          
          <div id="setup" class="section-block">
            <h3>环境设置</h3>
            <h4>使用JavaScript/Node.js</h4>
            <pre><code>// 安装MCP客户端库
npm install @remotemcp/client

// 引入并初始化客户端
const { McpClient } = require('@remotemcp/client');
const client = new McpClient({
  serviceUrl: 'https://api.example-service.com/mcp',
  apiKey: 'YOUR_API_KEY',
  // 可选配置
  timeout: 30000,
  maxRetries: 3
});</code></pre>
            
            <h4>使用Python</h4>
            <pre><code># 安装MCP客户端库
pip install remotemcp-client

# 引入并初始化客户端
from remotemcp.client import McpClient

client = McpClient(
    service_url="https://api.example-service.com/mcp",
    api_key="YOUR_API_KEY",
    # 可选配置
    timeout=30,
    max_retries=3
)</code></pre>
          </div>
          
          <div id="first-request" class="section-block">
            <h3>发送第一个请求</h3>
            <p>以下是一个简单的MCP请求示例：</p>
            
            <h4>JavaScript示例</h4>
            <pre><code>const response = await client.sendRequest({
  input: {
    message: "请分析以下数据并告诉我主要趋势",
    data: {
      type: "chart",
      values: [10, 15, 7, 12, 22, 30, 25]
    }
  },
  context: {
    conversationId: "conversation_123",
    previousMessages: []  // 首次请求，无历史消息
  },
  tools: [
    {
      id: "chart_analysis",
      name: "数据图表分析",
      description: "分析图表数据并识别趋势模式"
    }
  ]
});</code></pre>
            
            <h4>Python示例</h4>
            <pre><code>response = client.send_request(
    input={
        "message": "请分析以下数据并告诉我主要趋势",
        "data": {
            "type": "chart",
            "values": [10, 15, 7, 12, 22, 30, 25]
        }
    },
    context={
        "conversationId": "conversation_123",
        "previousMessages": []  # 首次请求，无历史消息
    },
    tools=[
        {
            "id": "chart_analysis",
            "name": "数据图表分析",
            "description": "分析图表数据并识别趋势模式"
        }
    ]
)</code></pre>
          </div>
          
          <div id="analyze-response" class="section-block">
            <h3>理解响应</h3>
            <p>MCP服务的响应通常包含以下部分：</p>
            <pre><code>{
  "response": {
    "message": "根据提供的数据，我注意到以下趋势：\n1. 整体呈上升趋势\n2. 第3个点(7)是最低点\n3. 第6个点(30)是最高点\n4. 最后有轻微下降",
    "actions": [
      {
        "type": "tool_use",
        "tool_id": "chart_analysis",
        "params": {
          "data": [10, 15, 7, 12, 22, 30, 25],
          "analysis_type": "trend"
        },
        "result": {
          "primary_trend": "upward",
          "variance": "moderate",
          "significant_points": [
            {"position": 2, "value": 7, "note": "lowest point"},
            {"position": 5, "value": 30, "note": "highest point"}
          ]
        }
      }
    ]
  },
  "context_updates": {
    "conversation_summary": "用户请求分析图表数据，系统识别出上升趋势，指出重要数据点。"
  },
  "metadata": {
    "processing_time": "0.342s",
    "model_version": "analytics-2.1",
    "request_id": "req_123456789"
  }
}</code></pre>
            <p>响应包含三个主要部分：</p>
            <ul>
              <li><strong>response</strong>: 包含模型生成的消息和执行的操作</li>
              <li><strong>context_updates</strong>: 对上下文的更新，用于多轮对话</li>
              <li><strong>metadata</strong>: 关于处理请求的技术信息</li>
            </ul>
          </div>
          
          <div id="next-steps" class="section-block">
            <h3>下一步</h3>
            <p>恭喜！您已经成功发送了第一个MCP请求并理解了响应。接下来您可以：</p>
            <ul>
              <li>尝试<router-link to="/guide/use-cases">不同的使用场景</router-link></li>
              <li>学习如何<router-link to="/guide/effective-prompts">编写更有效的提示</router-link></li>
              <li>探索<router-link to="/guide/mcp-concepts">MCP的核心概念</router-link>以更深入地理解工作原理</li>
              <li>查看<router-link to="/guide/choosing-service">如何选择适合您需求的服务</router-link></li>
            </ul>
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

pre {
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