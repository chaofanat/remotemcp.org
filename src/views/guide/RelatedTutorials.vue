<template>
  <div class="tutorials-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP 相关教程</h1>
        <p>学习如何在实际项目中应用 Model Context Protocol 的详细教程</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>相关教程</span>
        </div>
        
        <div class="guide-content">
          <p>
            以下教程将帮助您从基础到高级应用，逐步掌握 MCP 的使用。每个教程都包含完整的步骤说明和代码示例，
            适合不同经验水平的开发者。选择您感兴趣的主题开始学习，或按照推荐的学习路径依次完成。
          </p>
          
          <div class="tutorial-filters">
            <div class="filter-group">
              <span class="filter-label">难度级别：</span>
              <button 
                v-for="level in levels" 
                :key="level"
                @click="toggleLevelFilter(level)"
                :class="{ active: selectedLevels.includes(level) }"
              >
                {{ level }}
              </button>
            </div>
            
            <div class="filter-group">
              <span class="filter-label">分类：</span>
              <button 
                v-for="category in categories" 
                :key="category"
                @click="toggleCategoryFilter(category)"
                :class="{ active: selectedCategories.includes(category) }"
              >
                {{ category }}
              </button>
            </div>
          </div>
          
          <div class="tutorials-container">
            <div v-if="filteredTutorials.length === 0" class="no-results">
              <p>没有找到符合筛选条件的教程。请尝试调整筛选条件。</p>
            </div>
            
            <div v-for="tutorial in filteredTutorials" :key="tutorial.id" class="tutorial-card">
              <div class="tutorial-image" :style="{ backgroundImage: `url(${tutorial.image})` }">
                <span class="tutorial-level">{{ tutorial.level }}</span>
              </div>
              <div class="tutorial-content">
                <h3>{{ tutorial.title }}</h3>
                <div class="tutorial-meta">
                  <span class="tutorial-category">{{ tutorial.category }}</span>
                  <span class="tutorial-time">{{ tutorial.time }}</span>
                </div>
                <p class="tutorial-description">{{ tutorial.description }}</p>
                <div class="tutorial-tags">
                  <span v-for="tag in tutorial.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="tutorial-action">
                  <router-link :to="tutorial.link" class="btn-primary">查看教程</router-link>
                </div>
              </div>
            </div>
          </div>
          
          <h2>推荐学习路径</h2>
          <p>如果您是MCP的新手，我们建议您按照以下路径学习，以循序渐进地掌握MCP的各项功能：</p>
          
          <div class="learning-path">
            <div class="path-item" v-for="(path, index) in learningPath" :key="index">
              <div class="path-step">{{ index + 1 }}</div>
              <div class="path-content">
                <h3>{{ path.title }}</h3>
                <p>{{ path.description }}</p>
                <router-link :to="path.link" class="btn-text">开始学习 &rarr;</router-link>
              </div>
            </div>
          </div>
          
          <div class="tutorial-resources">
            <h2>额外资源</h2>
            <p>除了上述教程外，以下资源也可以帮助您更深入地学习MCP：</p>
            
            <div class="resources-grid">
              <div class="resource-card">
                <h3><i class="icon-github"></i> 示例项目库</h3>
                <p>在GitHub上探索完整的MCP应用示例项目，包括各种语言和框架的实现。</p>
                <a href="https://github.com/modelcontextprotocol/examples" target="_blank" class="btn-text">查看项目 &rarr;</a>
              </div>
              
              <div class="resource-card">
                <h3><i class="icon-video"></i> 视频教程系列</h3>
                <p>观看我们的视频教程系列，跟随专家学习MCP的各项功能和最佳实践。</p>
                <a href="#" class="btn-text">观看视频 &rarr;</a>
              </div>
              
              <div class="resource-card">
                <h3><i class="icon-book"></i> 完整API文档</h3>
                <p>详细查阅MCP的所有API参考文档，包括参数、返回值和示例代码。</p>
                <router-link to="/documentation/api" class="btn-text">阅读文档 &rarr;</router-link>
              </div>
              
              <div class="resource-card">
                <h3><i class="icon-community"></i> 社区论坛</h3>
                <p>加入MCP开发者社区，提问、分享经验并与其他开发者交流学习。</p>
                <a href="#" class="btn-text">加入社区 &rarr;</a>
              </div>
            </div>
          </div>
          
          <div class="guide-navigation">
            <router-link to="/guide/glossary" class="btn">&larr; MCP术语表</router-link>
            <router-link to="/guide/learning-resources" class="btn">学习资源 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 筛选条件
const levels = ['入门', '中级', '高级'];
const categories = ['基础', '工具调用', '上下文管理', '集成开发', '最佳实践'];

const selectedLevels = ref([...levels]); // 默认选中所有级别
const selectedCategories = ref([...categories]); // 默认选中所有分类

function toggleLevelFilter(level) {
  if (selectedLevels.value.includes(level)) {
    // 如果不允许全部取消选中，保留至少一个选项
    if (selectedLevels.value.length > 1) {
      selectedLevels.value = selectedLevels.value.filter(l => l !== level);
    }
  } else {
    selectedLevels.value.push(level);
  }
}

function toggleCategoryFilter(category) {
  if (selectedCategories.value.includes(category)) {
    // 如果不允许全部取消选中，保留至少一个选项
    if (selectedCategories.value.length > 1) {
      selectedCategories.value = selectedCategories.value.filter(c => c !== category);
    }
  } else {
    selectedCategories.value.push(category);
  }
}

// 教程数据
const tutorials = [
  {
    id: 1,
    title: "MCP 基础入门：第一个应用",
    description: "从零开始构建您的第一个MCP应用，学习基本概念和工作流程。本教程将带您完成环境设置、初始化客户端和发送第一条消息的全过程。",
    image: "/images/tutorials/getting-started.jpg",
    level: "入门",
    category: "基础",
    time: "30分钟",
    tags: ["JavaScript", "基础概念", "快速上手"],
    link: "/tutorials/getting-started",
  },
  {
    id: 2,
    title: "高效的上下文管理策略",
    description: "学习如何在MCP中有效管理和利用上下文信息，提高模型响应的准确性和相关性。掌握不同类型上下文的使用场景和最佳实践。",
    image: "/images/tutorials/context-management.jpg",
    level: "中级",
    category: "上下文管理",
    time: "45分钟",
    tags: ["上下文优化", "多轮对话", "记忆管理"],
    link: "/tutorials/context-management",
  },
  {
    id: 3,
    title: "构建自定义工具并集成到MCP",
    description: "深入了解如何创建自定义工具，并将其无缝集成到MCP工作流中。本教程涵盖工具定义、参数设计、处理逻辑和错误处理等方面。",
    image: "/images/tutorials/custom-tools.jpg",
    level: "高级",
    category: "工具调用",
    time: "60分钟",
    tags: ["自定义工具", "API集成", "工具链"],
    link: "/tutorials/custom-tools",
  },
  {
    id: 4,
    title: "MCP在React应用中的应用",
    description: "学习如何在React前端应用中集成MCP功能，包括组件设计、状态管理和用户交互。本教程提供完整的代码示例和最佳实践。",
    image: "/images/tutorials/react-integration.jpg",
    level: "中级",
    category: "集成开发",
    time: "75分钟",
    tags: ["React", "前端集成", "UI/UX"],
    link: "/tutorials/react-integration",
  },
  {
    id: 5,
    title: "使用MCP进行数据分析和可视化",
    description: "探索如何利用MCP的工具调用功能进行数据分析和可视化。学习如何处理数据请求、分析结果和生成图表。",
    image: "/images/tutorials/data-analysis.jpg",
    level: "中级",
    category: "工具调用",
    time: "50分钟",
    tags: ["数据分析", "可视化", "图表生成"],
    link: "/tutorials/data-analysis",
  },
  {
    id: 6,
    title: "MCP安全最佳实践",
    description: "了解保护MCP应用安全的关键实践，包括API密钥管理、权限控制、数据加密和隐私保护等方面。",
    image: "/images/tutorials/security.jpg",
    level: "高级",
    category: "最佳实践",
    time: "40分钟",
    tags: ["安全", "隐私", "合规"],
    link: "/tutorials/security-best-practices",
  },
  {
    id: 7,
    title: "MCP服务端实现指南",
    description: "学习如何构建自己的MCP兼容服务，包括实现MCP协议、集成模型和提供工具功能。适合希望自托管MCP服务的开发者。",
    image: "/images/tutorials/server-implementation.jpg",
    level: "高级",
    category: "集成开发",
    time: "90分钟",
    tags: ["服务端", "协议实现", "模型集成"],
    link: "/tutorials/server-implementation",
  },
  {
    id: 8,
    title: "使用MCP构建对话式文档助手",
    description: "从头开始构建一个能够理解和回答文档问题的智能助手。本教程涵盖文档处理、上下文管理和响应生成等方面。",
    image: "/images/tutorials/document-assistant.jpg",
    level: "中级",
    category: "上下文管理",
    time: "60分钟",
    tags: ["文档处理", "问答系统", "语义搜索"],
    link: "/tutorials/document-assistant",
  }
];

// 筛选后的教程
const filteredTutorials = computed(() => {
  return tutorials.filter(tutorial => 
    selectedLevels.value.includes(tutorial.level) && 
    selectedCategories.value.includes(tutorial.category)
  );
});

// 学习路径
const learningPath = [
  {
    title: "MCP 基础入门",
    description: "学习MCP的基本概念、环境设置和简单应用开发，适合完全的新手。",
    link: "/tutorials/getting-started"
  },
  {
    title: "上下文管理与多轮对话",
    description: "掌握如何管理上下文信息，构建更智能的多轮对话体验。",
    link: "/tutorials/context-management"
  },
  {
    title: "工具调用与功能扩展",
    description: "学习如何使用和创建工具，扩展AI的能力范围。",
    link: "/tutorials/custom-tools"
  },
  {
    title: "应用集成与实际部署",
    description: "将MCP集成到实际应用中，并了解部署和维护的最佳实践。",
    link: "/tutorials/react-integration"
  },
  {
    title: "安全与高级应用",
    description: "深入学习MCP的安全最佳实践和高级应用场景。",
    link: "/tutorials/security-best-practices"
  }
];
</script>

<style scoped>
/* 采用与WhatIsMcp.vue相同的基础样式 */
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

/* 教程特定样式 */
.tutorial-filters {
  margin: 30px 0;
  padding: 20px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-label {
  font-weight: 500;
  margin-right: 10px;
  min-width: 80px;
}

.filter-group button {
  background: white;
  border: 1px solid var(--border-color);
  padding: 6px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-group button.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.tutorials-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tutorial-card {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: white;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tutorial-image {
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: var(--light-gray); /* 作为图片加载前的占位 */
}

.tutorial-level {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 500;
}

.tutorial-content {
  padding: 20px;
}

.tutorial-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.tutorial-meta {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 0.9em;
  color: var(--text-color-secondary);
}

.tutorial-category {
  background-color: var(--light-gray);
  padding: 3px 8px;
  border-radius: 4px;
  margin-right: 10px;
}

.tutorial-time {
  display: flex;
  align-items: center;
}

.tutorial-time:before {
  content: "⏱";
  margin-right: 5px;
}

.tutorial-description {
  margin-bottom: 15px;
  font-size: 0.95em;
  line-height: 1.5;
  color: var(--text-color);
  /* 限制描述高度，使卡片大小统一 */
  height: 4.5em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.tutorial-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
}

.tag {
  font-size: 0.8em;
  background-color: var(--tag-bg, #f0f0f0);
  color: var(--tag-color, #666);
  padding: 3px 8px;
  border-radius: 3px;
}

.tutorial-action {
  text-align: right;
}

.btn-primary {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--primary-color-dark);
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
}

/* 学习路径样式 */
.learning-path {
  margin: 30px 0;
}

.path-item {
  display: flex;
  margin-bottom: 25px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.path-step {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.path-content {
  flex: 1;
  padding: 20px;
}

.path-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.path-content p {
  margin-bottom: 10px;
}

.btn-text {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.btn-text:hover {
  text-decoration: underline;
}

/* 额外资源样式 */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.resource-card {
  padding: 20px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  border-top: 3px solid var(--accent-color);
}

.resource-card h3 {
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.resource-card p {
  margin-bottom: 15px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .tutorials-container {
    grid-template-columns: 1fr;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-label {
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>
