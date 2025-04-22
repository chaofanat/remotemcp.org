<template>
  <div class="learning-resources">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP 学习资源</h1>
        <p>探索丰富的学习资料，助您掌握 Model Context Protocol 的各项能力</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>学习资源</span>
        </div>
        
        <div class="guide-content">
          <p>
            我们整理了丰富的学习资源，帮助您深入了解和掌握MCP。无论您是初学者还是有经验的开发者，
            都能找到适合您的学习材料。这些资源会持续更新，确保您能获取最新的MCP知识和最佳实践。
          </p>
          
          <!-- 官方文档部分 -->
          <h2>官方文档</h2>
          <div class="resources-section">
            <div class="resource-card" v-for="doc in officialDocs" :key="doc.title">
              <div class="resource-icon" :class="doc.icon"></div>
              <div class="resource-content">
                <h3>{{ doc.title }}</h3>
                <p>{{ doc.description }}</p>
                <a :href="doc.link" target="_blank" class="resource-link">
                  查看文档 <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 视频教程部分 -->
          <h2>视频教程</h2>
          <div class="resources-grid">
            <div class="video-card" v-for="video in videos" :key="video.title">
              <div class="video-thumbnail" :style="{ backgroundImage: `url(${video.thumbnail})` }">
                <div class="video-duration">{{ video.duration }}</div>
                <div class="video-play-button"></div>
              </div>
              <div class="video-info">
                <h3>{{ video.title }}</h3>
                <p>{{ video.description }}</p>
                <div class="video-meta">
                  <span class="video-author">{{ video.author }}</span>
                  <span class="video-date">{{ video.date }}</span>
                </div>
                <a :href="video.link" target="_blank" class="video-link">
                  观看视频 <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 社区资源部分 -->
          <h2>社区资源</h2>
          <div class="resources-section">
            <div class="resource-card" v-for="community in communityResources" :key="community.title">
              <div class="resource-icon" :class="community.icon"></div>
              <div class="resource-content">
                <h3>{{ community.title }}</h3>
                <p>{{ community.description }}</p>
                <a :href="community.link" target="_blank" class="resource-link">
                  访问资源 <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 示例代码部分 -->
          <h2>示例代码库</h2>
          <div class="code-examples">
            <div class="code-example-card" v-for="example in codeExamples" :key="example.title">
              <div class="code-example-header">
                <h3>{{ example.title }}</h3>
                <div class="code-example-tags">
                  <span v-for="tag in example.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
              <p>{{ example.description }}</p>
              <div class="code-example-footer">
                <a :href="example.github" target="_blank" class="github-link">
                  <i class="icon-github"></i> 查看GitHub
                </a>
                <a :href="example.demo" target="_blank" class="demo-link" v-if="example.demo">
                  <i class="icon-play"></i> 在线演示
                </a>
              </div>
            </div>
          </div>
          
          <!-- 电子书和白皮书部分 -->
          <h2>电子书和白皮书</h2>
          <div class="resources-grid books-grid">
            <div class="book-card" v-for="book in books" :key="book.title">
              <div class="book-cover" :style="{ backgroundImage: `url(${book.cover})` }"></div>
              <div class="book-info">
                <h3>{{ book.title }}</h3>
                <p class="book-author">作者: {{ book.author }}</p>
                <p>{{ book.description }}</p>
                <div class="book-actions">
                  <a :href="book.download" class="download-link">
                    <i class="icon-download"></i> 下载PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 贡献资源部分 -->
          <div class="contribute-section">
            <h2>贡献资源</h2>
            <p>
              您有优质的MCP学习资源想要分享吗？我们欢迎社区成员贡献高质量的教程、文章、视频或示例代码。
              通过贡献，您可以帮助更多开发者了解和使用MCP，同时展示您的专业知识。
            </p>
            <div class="contribute-actions">
              <a href="https://github.com/modelcontextprotocol/community-resources" target="_blank" class="btn-primary">
                提交资源
              </a>
              <a href="/guide/contribution-guidelines" class="btn-secondary">
                查看贡献指南
              </a>
            </div>
          </div>
          
          <div class="guide-navigation">
            <router-link to="/guide/related-tutorials" class="btn">&larr; 相关教程</router-link>
            <router-link to="/guide/community" class="btn">社区指南 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 官方文档数据
const officialDocs = [
  {
    title: "MCP 规范文档",
    description: "详细了解MCP协议的技术规范，包括请求/响应格式、工具调用规范和上下文管理标准。",
    icon: "icon-book",
    link: "https://docs.modelcontextprotocol.org/specification"
  },
  {
    title: "API 参考",
    description: "查阅完整的MCP API参考文档，包含所有端点、参数、返回值和错误码的详细说明。",
    icon: "icon-code",
    link: "https://docs.modelcontextprotocol.org/api"
  },
  {
    title: "MCP JS SDK 文档",
    description: "JavaScript SDK的完整文档，包含客户端初始化、会话管理、消息发送和工具处理等功能的详细指南。",
    icon: "icon-javascript",
    link: "https://docs.modelcontextprotocol.org/js-sdk"
  },
  {
    title: "MCP Python SDK 文档",
    description: "Python SDK的使用指南，适合数据科学家和后端开发人员在Python环境中使用MCP。",
    icon: "icon-python",
    link: "https://docs.modelcontextprotocol.org/python-sdk"
  }
];

// 视频教程数据
const videos = [
  {
    title: "MCP入门：概念与架构",
    description: "介绍MCP的基本概念、核心组件和工作原理，帮助新手快速理解MCP的价值和使用场景。",
    thumbnail: "/images/videos/mcp-intro-thumbnail.jpg",
    duration: "28:45",
    author: "李明",
    date: "2023-10-15",
    link: "https://www.youtube.com/watch?v=mcp-intro"
  },
  {
    title: "工具调用深度解析",
    description: "详细讲解MCP的工具调用机制，包括工具定义、参数设计、调用处理和结果返回等关键环节。",
    thumbnail: "/images/videos/tool-calling-thumbnail.jpg",
    duration: "42:30",
    author: "张伟",
    date: "2023-11-05",
    link: "https://www.youtube.com/watch?v=mcp-tools"
  },
  {
    title: "MCP应用实战：构建智能客服系统",
    description: "通过一个完整案例，演示如何使用MCP构建智能客服系统，包括需求分析、系统设计和实际编码。",
    thumbnail: "/images/videos/customer-service-thumbnail.jpg",
    duration: "1:15:20",
    author: "王芳",
    date: "2024-01-18",
    link: "https://www.youtube.com/watch?v=mcp-customer-service"
  },
  {
    title: "MCP安全与隐私保护",
    description: "探讨使用MCP时的安全考量和隐私保护策略，适合关注数据安全的开发者和企业用户。",
    thumbnail: "/images/videos/security-thumbnail.jpg",
    duration: "35:15",
    author: "刘强",
    date: "2024-02-22",
    link: "https://www.youtube.com/watch?v=mcp-security"
  }
];

// 社区资源数据
const communityResources = [
  {
    title: "MCP开发者社区",
    description: "加入活跃的MCP开发者社区，分享经验、提问问题并与其他开发者建立联系。",
    icon: "icon-community",
    link: "https://community.modelcontextprotocol.org"
  },
  {
    title: "MCP Discord 频道",
    description: "实时与MCP开发者和核心团队成员交流，参与讨论和获取即时帮助。",
    icon: "icon-discord",
    link: "https://discord.gg/modelcontextprotocol"
  },
  {
    title: "MCP GitHub 讨论区",
    description: "在GitHub上参与技术讨论，报告问题或查看已解决的常见问题。",
    icon: "icon-github",
    link: "https://github.com/modelcontextprotocol/modelcontextprotocol/discussions"
  },
  {
    title: "MCP 社区博客",
    description: "浏览社区成员撰写的技术博客，了解实际应用案例和进阶技巧。",
    icon: "icon-blog",
    link: "https://blog.modelcontextprotocol.org"
  }
];

// 示例代码数据
const codeExamples = [
  {
    title: "MCP聊天应用",
    description: "一个完整的聊天应用示例，展示如何使用MCP实现多轮对话、记忆管理和用户界面。",
    tags: ["JavaScript", "React", "前端"],
    github: "https://github.com/modelcontextprotocol/examples/chat-app",
    demo: "https://chat-demo.modelcontextprotocol.org"
  },
  {
    title: "文档分析助手",
    description: "基于MCP的文档分析工具，能够上传文档并进行智能分析和问答。",
    tags: ["Python", "后端", "文档处理"],
    github: "https://github.com/modelcontextprotocol/examples/document-analyzer",
    demo: null
  },
  {
    title: "数据可视化工具",
    description: "演示如何使用MCP的工具调用功能实现数据分析和可视化的示例项目。",
    tags: ["Vue.js", "数据分析", "图表"],
    github: "https://github.com/modelcontextprotocol/examples/data-viz",
    demo: "https://data-viz.modelcontextprotocol.org"
  },
  {
    title: "MCP服务器实现",
    description: "一个简化的MCP服务器实现示例，展示如何创建兼容MCP协议的服务端。",
    tags: ["Node.js", "服务端", "API"],
    github: "https://github.com/modelcontextprotocol/examples/simple-server",
    demo: null
  }
];

// 电子书和白皮书数据
const books = [
  {
    title: "MCP实战指南",
    author: "张伟、李明",
    description: "全面介绍MCP的实际应用技巧和最佳实践，适合已经了解基础概念的开发者深入学习。",
    cover: "/images/books/mcp-in-action.jpg",
    download: "/downloads/mcp-in-action.pdf"
  },
  {
    title: "MCP技术白皮书",
    author: "MCP核心团队",
    description: "详细阐述MCP的技术原理、设计理念和未来发展方向的官方白皮书。",
    cover: "/images/books/mcp-whitepaper.jpg",
    download: "/downloads/mcp-whitepaper.pdf"
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

/* 资源页面特定样式 */
.resources-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.resource-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  border-top: 3px solid var(--accent-color);
  transition: transform 0.3s, box-shadow 0.3s;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.resource-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.resource-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.resource-content p {
  flex: 1;
  margin-bottom: 15px;
}

.resource-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
}

.resource-link:hover {
  text-decoration: underline;
}

.arrow {
  margin-left: 5px;
  transition: transform 0.2s;
}

.resource-link:hover .arrow {
  transform: translateX(3px);
}

/* 视频卡片样式 */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.video-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.video-thumbnail {
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: var(--light-gray);
}

.video-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.video-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-play-button:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  margin-left: 5px;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent white;
}

.video-info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.video-info h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9em;
  color: var(--text-color-secondary);
}

.video-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
}

.video-link:hover {
  text-decoration: underline;
}

/* 示例代码卡片样式 */
.code-examples {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.code-example-card {
  padding: 20px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  border-left: 3px solid var(--accent-color);
  transition: transform 0.3s, box-shadow 0.3s;
}

.code-example-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.code-example-header {
  margin-bottom: 15px;
}

.code-example-header h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.code-example-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag {
  font-size: 0.8em;
  background-color: white;
  padding: 3px 8px;
  border-radius: 3px;
  color: var(--text-color-secondary);
}

.code-example-footer {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.github-link, .demo-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-weight: 500;
}

.github-link {
  color: var(--text-color);
}

.demo-link {
  color: var(--primary-color);
}

.github-link:hover, .demo-link:hover {
  text-decoration: underline;
}

/* 电子书样式 */
.books-grid {
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

.book-card {
  display: flex;
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.book-cover {
  width: 120px;
  background-size: cover;
  background-position: center;
  background-color: var(--light-gray);
}

.book-info {
  flex: 1;
  padding: 20px;
}

.book-info h3 {
  margin-top: 0;
  margin-bottom: 5px;
}

.book-author {
  color: var(--text-color-secondary);
  margin-bottom: 10px;
  font-style: italic;
}

.book-actions {
  margin-top: 15px;
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.download-link:hover {
  text-decoration: underline;
}

/* 贡献部分样式 */
.contribute-section {
  margin: 40px 0;
  padding: 30px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  text-align: center;
}

.contribute-section h2 {
  margin-top: 0;
}

.contribute-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-secondary {
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: var(--primary-color-dark);
}

.btn-secondary:hover {
  background-color: var(--light-gray);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .resources-section,
  .resources-grid,
  .code-examples {
    grid-template-columns: 1fr;
  }
  
  .book-card {
    flex-direction: column;
  }
  
  .book-cover {
    width: 100%;
    height: 180px;
  }
  
  .contribute-actions {
    flex-direction: column;
    align-items: center;
  }
}

/* 图标样式（假设使用了字体图标或SVG图标） */
[class^="icon-"] {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-book { background-image: url('/icons/book.svg'); }
.icon-code { background-image: url('/icons/code.svg'); }
.icon-javascript { background-image: url('/icons/javascript.svg'); }
.icon-python { background-image: url('/icons/python.svg'); }
.icon-community { background-image: url('/icons/community.svg'); }
.icon-discord { background-image: url('/icons/discord.svg'); }
.icon-github { background-image: url('/icons/github.svg'); }
.icon-blog { background-image: url('/icons/blog.svg'); }
.icon-download { background-image: url('/icons/download.svg'); }
.icon-play { background-image: url('/icons/play.svg'); }
</style>
