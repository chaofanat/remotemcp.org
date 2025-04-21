<template>
  <div class="developers-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>开发者中心</h1>
        <p>了解如何使用和创建MCP服务，查看文档并参与社区贡献</p>
      </div>
    </section>

    <!-- 主要内容 -->
    <section class="section">
      <div class="container">
        <div class="developers-grid">
          <!-- 文档部分 -->
          <div class="developers-section">
            <h2>文档与资源</h2>
            <p>查阅全面的技术文档，学习MCP协议的工作原理和实现方法。</p>
            
            <div class="resource-cards">
              <div class="resource-card">
                <h3>MCP协议规范</h3>
                <p>详细了解Model Context Protocol的技术规范和标准。</p>
                <a href="#" class="btn btn-sm">查看文档</a>
              </div>
              
              <div class="resource-card">
                <h3>API参考</h3>
                <p>浏览MCP服务端和客户端API的完整参考文档。</p>
                <a href="#" class="btn btn-sm">浏览API</a>
              </div>
              
              <div class="resource-card">
                <h3>示例代码</h3>
                <p>各种编程语言的示例代码，帮助您快速开始使用MCP。</p>
                <a href="#" class="btn btn-sm">获取代码</a>
              </div>
            </div>
          </div>
          
          <!-- 工具与SDK部分 -->
          <div class="developers-section">
            <h2>开发工具与SDK</h2>
            <p>使用我们提供的工具和SDK，简化MCP服务的集成和开发过程。</p>
            
            <div class="sdk-cards">
              <div class="sdk-card">
                <div class="sdk-icon">🐍</div>
                <div class="sdk-info">
                  <h3>Python SDK</h3>
                  <p>用于Python应用程序的MCP客户端库</p>
                  <div class="sdk-links">
                    <a href="#">文档</a>
                    <a href="#">GitHub</a>
                    <a href="#">示例</a>
                  </div>
                </div>
              </div>
              
              <div class="sdk-card">
                <div class="sdk-icon">⚛️</div>
                <div class="sdk-info">
                  <h3>JavaScript/Node.js</h3>
                  <p>适用于Web和Node.js应用的MCP库</p>
                  <div class="sdk-links">
                    <a href="#">文档</a>
                    <a href="#">GitHub</a>
                    <a href="#">示例</a>
                  </div>
                </div>
              </div>
              
              <div class="sdk-card">
                <div class="sdk-icon">☕</div>
                <div class="sdk-info">
                  <h3>Java SDK</h3>
                  <p>适用于Java和Android应用的MCP客户端</p>
                  <div class="sdk-links">
                    <a href="#">文档</a>
                    <a href="#">GitHub</a>
                    <a href="#">示例</a>
                  </div>
                </div>
              </div>
              
              <div class="sdk-card">
                <div class="sdk-icon">🦀</div>
                <div class="sdk-info">
                  <h3>Rust SDK</h3>
                  <p>高性能Rust语言MCP客户端库</p>
                  <div class="sdk-links">
                    <a href="#">文档</a>
                    <a href="#">GitHub</a>
                    <a href="#">示例</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 教程部分 -->
        <div class="tutorial-section">
          <h2>热门教程</h2>
          <p>通过我们的教程学习如何构建和部署MCP服务。</p>
          
          <div class="tutorial-list">
            <div class="tutorial-item">
              <div class="tutorial-number">01</div>
              <div class="tutorial-content">
                <h3>创建您的第一个MCP服务</h3>
                <p>学习如何使用Python设置和部署一个基本的MCP服务。</p>
                <a href="#" class="tutorial-link">开始学习 →</a>
              </div>
            </div>
            
            <div class="tutorial-item">
              <div class="tutorial-number">02</div>
              <div class="tutorial-content">
                <h3>集成外部工具和API</h3>
                <p>为您的MCP服务添加外部工具和API集成能力。</p>
                <a href="#" class="tutorial-link">开始学习 →</a>
              </div>
            </div>
            
            <div class="tutorial-item">
              <div class="tutorial-number">03</div>
              <div class="tutorial-content">
                <h3>高级上下文管理</h3>
                <p>学习如何在MCP服务中实现高效的上下文管理。</p>
                <a href="#" class="tutorial-link">开始学习 →</a>
              </div>
            </div>
            
            <div class="tutorial-item">
              <div class="tutorial-number">04</div>
              <div class="tutorial-content">
                <h3>部署与扩展</h3>
                <p>部署MCP服务到云端并实现水平扩展。</p>
                <a href="#" class="tutorial-link">开始学习 →</a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 社区和贡献部分 -->
        <div class="community-section">
          <h2>加入开发者社区</h2>
          <p>与其他MCP开发者交流，分享经验，共同推动MCP生态系统的发展。</p>
          
          <div class="community-cards">
            <div class="community-card">
              <h3>GitHub</h3>
              <p>查看我们的开源项目，提交问题和贡献代码。</p>
              <a href="https://github.com/yourusername/remotemcp.org" target="_blank" class="btn btn-outline">访问GitHub</a>
            </div>
            
            <div class="community-card">
              <h3>开发者论坛</h3>
              <p>与MCP开发者社区交流，获取帮助和分享见解。</p>
              <a href="#" class="btn btn-outline">加入论坛</a>
            </div>
            
            <div class="community-card">
              <h3>贡献指南</h3>
              <p>了解如何为MCP项目做出贡献。</p>
              <a href="#" class="btn btn-outline">查看指南</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 开发者中心页面逻辑
</script>

<style scoped>
.developers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.developers-section {
  margin-bottom: 2rem;
}

.developers-section h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.resource-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.resource-card {
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.resource-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.7rem;
}

.resource-card p {
  margin-bottom: 1.2rem;
  color: var(--text-light);
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
}

.sdk-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.sdk-card {
  display: flex;
  background-color: white;
  border-radius: var(--border-radius);
  padding: 1.2rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
  gap: 1rem;
  align-items: center;
}

.sdk-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.sdk-icon {
  font-size: 2rem;
  background-color: var(--lightest-gray);
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sdk-info {
  flex: 1;
}

.sdk-info h3 {
  margin-bottom: 0.3rem;
  color: var(--secondary-color);
}

.sdk-info p {
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
  color: var(--text-light);
}

.sdk-links {
  display: flex;
  gap: 1rem;
}

.sdk-links a {
  font-size: 0.85rem;
  font-weight: 600;
}

.tutorial-section {
  margin-bottom: 3rem;
}

.tutorial-section h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.tutorial-list {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
}

.tutorial-item {
  display: flex;
  gap: 1.2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}

.tutorial-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.tutorial-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-light);
  opacity: 0.5;
  line-height: 1;
}

.tutorial-content {
  flex: 1;
}

.tutorial-content h3 {
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.tutorial-content p {
  margin-bottom: 0.8rem;
  color: var(--text-light);
  font-size: 0.95rem;
}

.tutorial-link {
  font-weight: 600;
  display: inline-block;
}

.community-section {
  margin-bottom: 2rem;
}

.community-section h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.community-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.community-card {
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}

.community-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.community-card h3 {
  margin-bottom: 0.7rem;
  color: var(--secondary-color);
}

.community-card p {
  margin-bottom: 1.2rem;
  color: var(--text-light);
}

@media (max-width: 900px) {
  .developers-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .tutorial-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .tutorial-item {
    flex-direction: column;
    gap: 0.7rem;
  }
  
  .tutorial-number {
    font-size: 2rem;
  }
}
</style> 