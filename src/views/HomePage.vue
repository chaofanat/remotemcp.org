<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>发现和使用远程MCP服务的最佳平台</h1>
        <p>RemoteMCP.org为您提供全面的远程MCP服务目录，让您无需配置任何环境即可轻松使用AI模型的强大能力</p>
        <div class="hero-actions mt-3">
          <router-link to="/directory" class="btn">浏览服务</router-link>
          <router-link to="/guide" class="btn">用户指南</router-link>
        </div>
      </div>
    </section>

    <!-- 简介部分 -->
    <section class="section">
      <div class="container text-center">
        <h2 class="mb-3">什么是RemoteMCP.org?</h2>
        <p class="mb-3">
          RemoteMCP.org是一个综合性平台，旨在帮助用户发现、理解和使用远程MCP服务。
          我们的目标是简化MCP服务的访问过程，让所有人都能轻松利用AI模型的强大能力。
        </p>
        <div class="features mt-4">
          <div class="feature-card">
            <h3>全面的服务目录</h3>
            <p>发现各种远程MCP服务，从通用助手到专业工具应有尽有</p>
          </div>
          <div class="feature-card">
            <h3>详细的使用指南</h3>
            <p>了解如何连接和有效使用MCP服务，包括最佳实践和示例</p>
          </div>
          <div class="feature-card">
            <h3>社区驱动</h3>
            <p>贡献您的发现，评价服务质量，帮助构建更好的MCP生态系统</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速链接 -->
    <section class="section section-light">
      <div class="container">
        <h2 class="text-center mb-4">快速入门</h2>
        <div class="quick-links">
          <router-link to="/guide/what-is-mcp" class="quick-link-card">
            <h3>什么是MCP?</h3>
            <p>了解Model Context Protocol的基本概念和工作原理</p>
          </router-link>
          <router-link to="/directory" class="quick-link-card">
            <h3>浏览服务目录</h3>
            <p>探索可用的远程MCP服务，找到适合您需求的解决方案</p>
          </router-link>
          <router-link to="/guide/mcp-vs-api" class="quick-link-card">
            <h3>MCP与传统API对比</h3>
            <p>了解MCP相对于传统API的优势和适用场景</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 首页组件逻辑
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  padding: 5rem 0;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero-actions .btn {
  font-size: 1.1rem;
  padding: 0.7rem 1.5rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  padding: 2rem;
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.quick-link-card {
  display: block;
  padding: 1.5rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.3s, box-shadow 0.3s;
}

.quick-link-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  color: var(--text-color);
  text-decoration: none;
}

.quick-link-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style> 