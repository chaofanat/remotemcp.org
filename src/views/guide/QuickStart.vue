<template>
  <div class="quick-start">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>快速入门 MCP</h1>
        <p>本指南将帮助您快速上手并开始使用 Model Context Protocol</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>快速入门</span>
        </div>
        
        <div class="guide-content">
          <h2>开始使用 MCP</h2>
          <p>无论您是希望简单体验 AI 能力的普通用户，还是需要深度集成 MCP 的开发人员，本指南都将为您提供清晰的起步路径。</p>
          
          <div class="tabs">
            <div class="tab-headers">
              <button class="tab-btn active" @click="activeTab = 'regular'">普通用户指南</button>
              <button class="tab-btn" @click="activeTab = 'developer'">开发人员指南</button>
            </div>
            
            <!-- 普通用户指南 -->
            <div class="tab-content" v-show="activeTab === 'regular'">
              <h3>1. 选择 MCP 服务</h3>
              <p>作为普通用户，您可以通过以下步骤快速体验 MCP 的强大功能：</p>
              <ol>
                <li>
                  <strong>浏览服务目录</strong> - 访问我们的<router-link to="/directory">服务目录</router-link>，查看支持 MCP 的各类服务和应用。
                </li>
                <li>
                  <strong>注册账号</strong> - 选择一个适合您需求的服务，并按照指引完成账号注册。
                </li>
                <li>
                  <strong>开始使用</strong> - 登录后，您可以直接通过界面与 MCP 服务交互，无需编写代码。
                </li>
              </ol>
              
              <div class="note">
                <strong>提示：</strong> 大多数面向普通用户的 MCP 服务都提供了友好的界面，使您能够方便地使用高级 AI 功能。
              </div>
              
              <h3>2. 常见使用场景</h3>
              <p>作为普通用户，以下是一些您可以立即尝试的 MCP 应用场景：</p>
              <ul>
                <li><strong>智能助手</strong> - 让 AI 帮您查询信息、安排日程、撰写内容</li>
                <li><strong>内容创作</strong> - 使用 AI 协助您写作、设计、制作多媒体内容</li>
                <li><strong>信息分析</strong> - 让 AI 帮您总结长文档、提取关键信息</li>
                <li><strong>学习辅助</strong> - 利用 AI 解答问题、提供学习建议</li>
              </ul>
              
              <h3>3. 提高使用效果的技巧</h3>
              <p>以下是一些帮助您获得更好 MCP 体验的技巧：</p>
              <ul>
                <li><strong>明确表达需求</strong> - 尽量详细描述您的需求和背景</li>
                <li><strong>善用上下文功能</strong> - 许多 MCP 服务允许您上传文件或链接作为上下文</li>
                <li><strong>迭代交流</strong> - 如果结果不理想，给出反馈并让 AI 进行调整</li>
                <li><strong>探索高级功能</strong> - 了解并使用服务提供的特殊功能，如数据可视化、代码执行等</li>
              </ul>
              
              <h3>4. 后续步骤</h3>
              <p>当您熟悉了基本使用后，可以：</p>
              <ul>
                <li>查看<router-link to="/guide/effective-prompts">如何编写有效提示</router-link>的指南</li>
                <li>了解<router-link to="/guide/mcp-concepts">MCP 核心概念</router-link>，更好地理解底层原理</li>
                <li>参与<router-link to="/community">社区讨论</router-link>，分享您的使用经验</li>
              </ul>
            </div>
            
            <!-- 开发人员指南 -->
            <div class="tab-content" v-show="activeTab === 'developer'">
              <h3>1. 环境准备</h3>
              <p>在开始集成 MCP 之前，您需要确保已具备以下条件：</p>
              <ul>
                <li>已安装 Node.js（推荐 v16 或更高版本）</li>
                <li>基本了解 RESTful API 和 WebSocket</li>
                <li>熟悉 JavaScript/TypeScript 开发</li>
              </ul>
              
              <h3>2. 安装 MCP 客户端</h3>
              <p>首先，安装官方的 MCP 客户端库：</p>
              <div class="code-block">
                <pre><code>npm install @mcp/client</code></pre>
              </div>
              
              <h3>3. 初始化客户端</h3>
              <p>在您的项目中导入并初始化 MCP 客户端：</p>
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
              
              <h3>4. 连接 MCP 服务</h3>
              <p>连接到您选择的 MCP 服务：</p>
              <div class="code-block">
                <pre><code>// 连接到公共服务
await client.connect({
  serverUrl: 'https://api.remotemcp.org/v1',
  serviceId: 'gpt-4-mcp' // 或其他支持的服务
});</code></pre>
              </div>
              
              <div class="note">
                <strong>提示：</strong> 您可以在我们的<router-link to="/directory">服务目录</router-link>中找到可用的服务 ID 和服务器 URL。
              </div>
              
              <h3>5. 创建会话并交互</h3>
              <p>连接成功后，创建会话并开始交互：</p>
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
});</code></pre>
              </div>
              
              <h3>6. 处理工具调用</h3>
              <p>MCP 的一个核心特性是工具调用，以下是处理方式：</p>
              <div class="code-block">
                <pre><code>// 如果响应包含工具调用请求
if (response.toolCalls && response.toolCalls.length > 0) {
  // 处理每个工具调用
  const toolResults = [];
  
  for (const toolCall of response.toolCalls) {
    // 根据工具类型执行相应操作
    const result = await executeToolCall(toolCall);
    toolResults.push({
      toolCallId: toolCall.id,
      result: result
    });
  }
  
  // 将工具结果发送回 MCP
  const finalResponse = await session.sendToolResults(toolResults);
  console.log(finalResponse.content);
}</code></pre>
              </div>
              
              <h3>7. 注册自定义工具</h3>
              <p>您还可以注册自定义工具，扩展 MCP 的能力：</p>
              <div class="code-block">
                <pre><code>// 注册自定义工具
client.registerTool({
  name: 'data_visualization',
  description: '将数据可视化为各种图表',
  parameters: {
    type: 'object',
    properties: {
      chartType: {
        type: 'string',
        enum: ['bar', 'line', 'pie'],
        description: '图表类型'
      },
      data: {
        type: 'array',
        description: '要可视化的数据'
      }
    },
    required: ['chartType', 'data']
  },
  handler: async (params) => {
    // 实现数据可视化逻辑
    const chartUrl = await generateChart(params.chartType, params.data);
    return { chartUrl };
  }
});</code></pre>
              </div>
              
              <h3>8. 后续步骤</h3>
              <p>成功集成基本功能后，您可以：</p>
              <ul>
                <li>深入学习<router-link to="/developers/api-reference">API 参考文档</router-link></li>
                <li>查看<router-link to="/developers/advanced-topics">高级主题</router-link>，如流式响应、并发处理等</li>
                <li>参考<router-link to="/developers/sample-projects">示例项目</router-link>获取实际应用灵感</li>
                <li>加入<router-link to="/community/developers">开发者社区</router-link>讨论技术问题</li>
              </ul>
            </div>
          </div>
          
          <div class="guide-navigation">
            <router-link to="/guide/mcp-concepts" class="btn">&larr; MCP核心概念</router-link>
            <router-link to="/guide/effective-prompts" class="btn">有效提示指南 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('regular');
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

/* 新增的选项卡样式 */
.tabs {
  margin: 30px 0;
}

.tab-headers {
  display: flex;
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 20px;
}

.tab-btn {
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: var(--text-color);
  position: relative;
}

.tab-btn.active {
  color: var(--primary-color);
  font-weight: 600;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--primary-color);
}

.tab-content {
  padding: 0 10px;
}

.code-block {
  background-color: var(--code-bg);
  border-radius: var(--border-radius);
  padding: 20px;
  margin: 20px 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: monospace;
  line-height: 1.5;
}
</style> 