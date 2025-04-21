<template>
  <div class="faq-page">
    <!-- 英雄区域 -->
    <div class="hero-section">
      <div class="container">
        <h1>常见问题解答</h1>
        <p>关于MCP的常见问题和解答集合</p>
      </div>
    </div>

    <!-- 面包屑导航 -->
    <div class="breadcrumb container">
      <router-link to="/">首页</router-link> &gt;
      <router-link to="/guide">用户指南</router-link> &gt;
      <span>常见问题</span>
    </div>

    <!-- 内容部分 -->
    <div class="content-section container">
      <div class="faq-container">
        <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
          <div class="faq-question" @click="toggleFaq(index)">
            <h3>{{ item.question }}</h3>
            <span class="toggle-icon">{{ item.isOpen ? '−' : '+' }}</span>
          </div>
          <div class="faq-answer" v-show="item.isOpen">
            <p v-html="item.answer"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqItems = ref([
  {
    question: "什么是MCP？",
    answer: "MCP（Model Context Protocol）是一种标准化协议，用于连接AI模型、上下文和工具。它提供了一种统一的方式来构建和使用AI应用，使开发者能够更容易地集成不同的模型和工具。",
    isOpen: true
  },
  {
    question: "MCP与传统API有什么区别？",
    answer: "与传统API不同，MCP专为AI交互设计，提供了丰富的上下文管理、工具调用和标准化的通信格式。这使得AI应用的开发更加灵活和强大，能够处理更复杂的交互场景。",
    isOpen: false
  },
  {
    question: "如何开始使用MCP？",
    answer: "要开始使用MCP，您可以：<br>1. 查看<router-link to='/guide/quick-start'>快速入门指南</router-link><br>2. 探索兼容的MCP服务<br>3. 使用支持MCP的客户端<br>4. 参考我们的<router-link to='/guide/tutorials'>教程</router-link>进行实际应用",
    isOpen: false
  },
  {
    question: "MCP支持哪些模型？",
    answer: "MCP设计为与任何AI模型兼容，只要服务提供商实现了MCP接口。目前已支持多种流行的大型语言模型和多模态模型，包括来自OpenAI、Anthropic、Google等公司的产品。",
    isOpen: false
  },
  {
    question: "使用MCP需要什么技术要求？",
    answer: "使用MCP的基本要求包括：<br>1. 了解基本的Web技术（HTTP/REST）<br>2. 熟悉JSON格式<br>3. 根据您的使用场景，可能需要了解JavaScript、Python或其他编程语言<br>4. 如果您要部署自己的MCP服务，需要具备服务器管理知识",
    isOpen: false
  },
  {
    question: "MCP如何处理敏感数据？",
    answer: "MCP设计中包含了安全功能，如权限控制和隐私保护机制。服务提供商可以实现数据隔离、加密传输和访问控制。使用MCP时，建议查看服务提供商的具体数据处理政策。",
    isOpen: false
  },
  {
    question: "MCP是开源的吗？",
    answer: "是的，MCP是一个开源项目，您可以在GitHub上查看和贡献代码：<a href='https://github.com/modelcontextprotocol/modelcontextprotocol' target='_blank'>MCP GitHub仓库</a>",
    isOpen: false
  },
  {
    question: "我可以创建自己的MCP服务吗？",
    answer: "是的，您可以创建自己的MCP服务。MCP提供了规范和参考实现，您可以基于这些开发自己的服务，并与任何支持MCP的客户端兼容。",
    isOpen: false
  },
  {
    question: "MCP与其他AI框架如何比较？",
    answer: "MCP专注于提供标准化的协议，而不是完整的框架。它可以与其他AI框架互补使用，提供更好的互操作性和标准化。与LangChain或LlamaIndex等框架相比，MCP更侧重于通信标准而非应用逻辑。",
    isOpen: false
  },
  {
    question: "我在哪里可以获取更多帮助？",
    answer: "您可以通过以下渠道获取帮助：<br>1. 查看<router-link to='/documentation'>文档</router-link><br>2. 加入<a href='#'>Discord社区</a><br>3. 在<a href='https://github.com/modelcontextprotocol/modelcontextprotocol/issues' target='_blank'>GitHub Issues</a>提问<br>4. 参加<router-link to='/community'>社区活动</router-link>",
    isOpen: false
  }
]);

function toggleFaq(index) {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
}
</script>

<style scoped>
.faq-page {
  padding-bottom: 60px;
}

.hero-section {
  background-color: #f5f7fa;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 40px;
}

.hero-section h1 {
  margin-bottom: 16px;
  font-size: 36px;
  color: #2c3e50;
}

.hero-section p {
  font-size: 18px;
  color: #606f7b;
  max-width: 700px;
  margin: 0 auto;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumb {
  margin-bottom: 40px;
  color: #606f7b;
  font-size: 14px;
}

.breadcrumb a {
  color: #3498db;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.faq-question h3 {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
}

.toggle-icon {
  font-size: 24px;
  color: #3498db;
}

.faq-answer {
  padding: 20px;
  background-color: #fff;
  line-height: 1.6;
}

.faq-answer p {
  margin: 0;
  color: #4a5568;
}
</style> 