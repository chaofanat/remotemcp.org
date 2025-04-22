<template>
  <div class="glossary-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP 术语表</h1>
        <p>了解 Model Context Protocol 中的常用术语和概念</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>术语表</span>
        </div>
        
        <div class="guide-content">
          <p>
            本术语表收录了 MCP 生态系统中的重要术语和概念。这些定义将帮助您更好地理解 MCP 的文档和讨论。
            术语按字母顺序排列，您可以使用搜索功能或直接浏览查找需要的内容。
          </p>
          
          <div class="glossary-search">
            <input
              type="text"
              v-model="searchTerm"
              placeholder="搜索术语..."
              class="search-input"
            />
          </div>
          
          <div class="glossary-container">
            <div v-for="letter in visibleLetters" :key="letter" class="glossary-section">
              <h2 :id="letter">{{ letter }}</h2>
              <div v-for="term in getTermsByLetter(letter)" :key="term.name" class="glossary-term">
                <h3>{{ term.name }}</h3>
                <div class="term-content">
                  <p>{{ term.definition }}</p>
                  <p v-if="term.example" class="term-example">
                    <strong>示例：</strong> {{ term.example }}
                  </p>
                  <p v-if="term.related && term.related.length > 0" class="term-related">
                    <strong>相关术语：</strong> 
                    <span v-for="(relatedTerm, index) in term.related" :key="relatedTerm">
                      <a href="#" @click.prevent="scrollToTerm(relatedTerm)">{{ relatedTerm }}</a>
                      <span v-if="index < term.related.length - 1">, </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div v-if="visibleLetters.length === 0" class="no-results">
              <p>未找到匹配的术语。请尝试其他搜索词。</p>
            </div>
          </div>
          
          <div class="alphabet-nav">
            <a 
              v-for="letter in alphabet" 
              :key="letter" 
              href="#" 
              @click.prevent="scrollToLetter(letter)"
              :class="{ 'active': hasTermsForLetter(letter) }"
            >
              {{ letter }}
            </a>
          </div>
          
          <div class="guide-navigation">
            <router-link to="/guide/faq" class="btn">&larr; 常见问题</router-link>
            <router-link to="/guide/resources" class="btn">学习资源 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 字母表数组
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// 搜索词
const searchTerm = ref('');

// MCP术语数据
const terms = [
  {
    name: "API Key",
    letter: "A",
    definition: "用于身份验证的安全凭证，允许MCP客户端访问特定服务。每个API密钥通常与特定用户、项目或应用关联，并用于跟踪和限制API调用。",
    example: "client.connect({ apiKey: 'mcp_sk_12345...' })",
    related: ["认证", "服务提供商"]
  },
  {
    name: "认证 (Authentication)",
    letter: "A",
    definition: "验证用户或客户端身份的过程，通常通过API密钥或OAuth令牌实现。MCP中的认证确保只有授权用户能够访问特定服务。",
    related: ["API Key", "授权"]
  },
  {
    name: "授权 (Authorization)",
    letter: "A",
    definition: "定义和管理用户或客户端对资源访问权限的过程。在MCP中，授权决定了客户端可以访问哪些服务、功能和工具。",
    related: ["认证", "权限"]
  },
  {
    name: "批处理请求 (Batch Request)",
    letter: "B",
    definition: "将多个MCP请求组合成单个API调用的技术，可减少网络开销并提高性能。",
    example: "client.batchProcess([request1, request2, request3])",
    related: ["请求", "响应"]
  },
  {
    name: "客户端 (Client)",
    letter: "C",
    definition: "与MCP服务进行交互的应用程序或库。客户端负责发送请求、处理响应，并可能实现缓存、重试逻辑等功能。",
    example: "const client = new McpClient({ apiKey: '...' })",
    related: ["SDK", "服务提供商"]
  },
  {
    name: "上下文 (Context)",
    letter: "C",
    definition: "提供给模型的背景信息，可以包括用户历史交互、相关文档、系统状态等。MCP的核心功能之一是丰富的上下文管理能力。",
    example: "session.sendMessage({ content: '分析这些数据', context: { data: [...] } })",
    related: ["消息", "提示"]
  },
  {
    name: "模型 (Model)",
    letter: "M",
    definition: "能够理解和生成内容的AI系统。在MCP中，模型是由服务提供商提供的核心组件，可以处理自然语言、代码或多模态输入。",
    example: "GPT-4, Claude, PaLM等",
    related: ["服务", "多模态"]
  },
  {
    name: "消息 (Message)",
    letter: "M",
    definition: "在MCP会话中发送给模型的单个交互单元，包含内容和可选的上下文。消息可以是用户输入，也可以是模型的响应。",
    related: ["会话", "上下文"]
  },
  {
    name: "多模态 (Multimodal)",
    letter: "M",
    definition: "能够处理多种类型输入（如文本、图像、音频）的MCP功能或模型。多模态模型允许更丰富的交互方式。",
    example: "发送包含图像和文本的消息请求模型分析图表",
    related: ["模型"]
  },
  {
    name: "提示 (Prompt)",
    letter: "P",
    definition: "发送给模型的指令或查询，用于引导模型生成特定类型的输出。有效的提示工程是充分利用MCP能力的关键。",
    related: ["上下文", "提示工程"]
  },
  {
    name: "提示工程 (Prompt Engineering)",
    letter: "P",
    definition: "设计和优化模型提示的技术，以获得更准确、更有用的响应。包括提示格式化、上下文设计和指令优化等方面。",
    related: ["提示", "上下文"]
  },
  {
    name: "请求 (Request)",
    letter: "R",
    definition: "从客户端发送到MCP服务的数据包，包含消息内容、上下文信息、工具调用结果等。",
    related: ["响应", "批处理请求"]
  },
  {
    name: "响应 (Response)",
    letter: "R",
    definition: "从MCP服务返回给客户端的数据包，包含模型生成的内容、工具调用请求等信息。",
    related: ["请求", "工具调用"]
  },
  {
    name: "SDK (Software Development Kit)",
    letter: "S",
    definition: "用于简化MCP集成的开发工具包，通常提供各种编程语言的客户端库和辅助功能。",
    example: "@mcp/client, mcp-python, mcp-java等",
    related: ["客户端"]
  },
  {
    name: "服务 (Service)",
    letter: "S",
    definition: "MCP生态系统中可用的特定AI功能，通常包括特定的模型、工具集和配置。每个服务都有唯一的serviceId标识。",
    example: "gpt-4-mcp, claude-3-mcp, gemini-pro-mcp等",
    related: ["服务提供商", "模型"]
  },
  {
    name: "服务提供商 (Service Provider)",
    letter: "S",
    definition: "提供MCP兼容服务的组织或平台，负责托管模型、处理请求和实施安全措施。",
    example: "OpenAI, Anthropic, Google等公司可以作为MCP服务提供商",
    related: ["服务", "API Key"]
  },
  {
    name: "会话 (Session)",
    letter: "S",
    definition: "在MCP中，会话是一系列相关消息的集合，保持持续的上下文和状态。会话允许多轮对话，并可以在不同请求之间保持上下文连贯性。",
    example: "const session = await client.createSession()",
    related: ["消息", "上下文"]
  },
  {
    name: "工具 (Tool)",
    letter: "T",
    definition: "模型可以调用的外部功能，用于扩展其能力。包括搜索引擎、代码执行、数据分析等功能。",
    related: ["工具调用", "工具结果"]
  },
  {
    name: "工具调用 (Tool Call)",
    letter: "T",
    definition: "模型请求执行特定工具的操作。工具调用包含工具名称、参数和唯一ID等信息。",
    example: "{ toolCalls: [{ id: 'call_123', tool: 'weatherTool', params: { city: '北京' } }] }",
    related: ["工具", "工具结果"]
  },
  {
    name: "工具结果 (Tool Result)",
    letter: "T",
    definition: "工具执行后返回的数据，作为上下文发送回模型进行进一步处理。",
    example: "session.sendToolResults([{ toolCallId: 'call_123', result: { temp: 25, condition: '晴天' } }])",
    related: ["工具", "工具调用"]
  },
  {
    name: "版本控制 (Versioning)",
    letter: "V",
    definition: "MCP协议和服务的版本管理机制，确保API变更不会破坏现有集成。客户端可以指定所需的API版本。",
    example: "client.connect({ apiVersion: '2023-05' })",
    related: []
  },
  {
    name: "Webhook",
    letter: "W",
    definition: "允许MCP服务向指定URL发送事件通知的HTTP回调机制。Webhook可用于异步处理长时间运行的请求或接收服务状态更新。",
    example: "client.registerWebhook('https://example.com/mcp-events', ['session.completed'])",
    related: []
  }
];

// 计算可见术语和字母
const filteredTerms = computed(() => {
  if (!searchTerm.value) return terms;
  
  const lowercaseSearch = searchTerm.value.toLowerCase();
  return terms.filter(term => 
    term.name.toLowerCase().includes(lowercaseSearch) || 
    term.definition.toLowerCase().includes(lowercaseSearch)
  );
});

const visibleLetters = computed(() => {
  const letters = new Set(filteredTerms.value.map(term => term.letter));
  return alphabet.filter(letter => letters.has(letter));
});

// 按字母获取术语
function getTermsByLetter(letter) {
  return filteredTerms.value.filter(term => term.letter === letter);
}

// 检查字母是否有术语
function hasTermsForLetter(letter) {
  return filteredTerms.value.some(term => term.letter === letter);
}

// 滚动到指定字母
function scrollToLetter(letter) {
  if (!hasTermsForLetter(letter)) return;
  
  const element = document.getElementById(letter);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 滚动到指定术语
function scrollToTerm(termName) {
  const term = terms.find(t => t.name === termName);
  if (!term) return;
  
  scrollToLetter(term.letter);
  
  // 使用setTimeout确保先滚动到字母，再滚动到具体术语
  setTimeout(() => {
    const elements = document.querySelectorAll('.glossary-term h3');
    for (const element of elements) {
      if (element.textContent === termName) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.parentElement.classList.add('highlight');
        
        // 移除高亮效果
        setTimeout(() => {
          element.parentElement.classList.remove('highlight');
        }, 2000);
        break;
      }
    }
  }, 300);
}
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

.guide-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
}

/* 术语表特定样式 */
.glossary-search {
  margin: 30px 0;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: white;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
}

.glossary-section {
  margin-bottom: 40px;
}

.glossary-section h2 {
  font-size: 28px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.glossary-term {
  margin-bottom: 25px;
  padding: 20px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  transition: background-color 0.3s;
}

.glossary-term.highlight {
  background-color: var(--highlight-color, #fff3cd);
}

.glossary-term h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--secondary-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.term-content {
  padding-left: 15px;
  border-left: 3px solid var(--accent-color);
}

.term-example {
  font-style: italic;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 4px;
}

.term-related {
  margin-top: 15px;
  font-size: 0.95em;
}

.term-related a {
  color: var(--primary-color);
  text-decoration: none;
}

.term-related a:hover {
  text-decoration: underline;
}

.alphabet-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 30px 0;
  padding: 15px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.alphabet-nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--text-color-secondary);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.alphabet-nav a.active {
  background-color: white;
  color: var(--primary-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.alphabet-nav a.active:hover {
  background-color: var(--primary-color);
  color: white;
}

.alphabet-nav a:not(.active) {
  opacity: 0.5;
  cursor: default;
}

.no-results {
  text-align: center;
  padding: 40px 20px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  margin: 30px 0;
}
</style>
