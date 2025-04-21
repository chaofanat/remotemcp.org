<template>
  <div class="guide-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>用户指南</h1>
        <p>学习如何利用MCP服务释放AI的全部潜力</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="guide-container">
          <!-- 左侧导航 -->
          <div class="guide-nav">
            <h3>MCP基础知识</h3>
            <ul>
              <li>
                <router-link to="/guide/what-is-mcp" :class="{ active: isActive('/guide/what-is-mcp') }">
                  什么是MCP?
                </router-link>
              </li>
              <li>
                <router-link to="/guide/mcp-vs-api" :class="{ active: isActive('/guide/mcp-vs-api') }">
                  MCP vs 传统API
                </router-link>
              </li>
              <li>
                <router-link to="/guide/mcp-concepts" :class="{ active: isActive('/guide/mcp-concepts') }">
                  MCP核心概念
                </router-link>
              </li>
            </ul>
            
            <h3>入门</h3>
            <ul>
              <li>
                <router-link to="/guide/quick-start" :class="{ active: isActive('/guide/quick-start') }">
                  快速入门
                </router-link>
              </li>
              <li>
                <router-link to="/guide/choosing-service" :class="{ active: isActive('/guide/choosing-service') }">
                  选择适合的服务
                </router-link>
              </li>
            </ul>
            
            <h3>最佳实践</h3>
            <ul>
              <li>
                <router-link to="/guide/effective-prompts" :class="{ active: isActive('/guide/effective-prompts') }">
                  编写有效提示
                </router-link>
              </li>
              <li>
                <router-link to="/guide/use-cases" :class="{ active: isActive('/guide/use-cases') }">
                  常见使用场景
                </router-link>
              </li>
            </ul>
            
            <h3>资源</h3>
            <ul>
              <li>
                <router-link to="/guide/faq" :class="{ active: isActive('/guide/faq') }">
                  常见问题
                </router-link>
              </li>
              <li>
                <router-link to="/guide/glossary" :class="{ active: isActive('/guide/glossary') }">
                  术语表
                </router-link>
              </li>
              <li>
                <router-link to="/guide/tutorials" :class="{ active: isActive('/guide/tutorials') }">
                  教程
                </router-link>
              </li>
            </ul>
          </div>
          
          <!-- 主要内容 -->
          <div class="guide-content">
            <h2>欢迎来到RemoteMCP.org用户指南</h2>
            <p>
              无论您是AI领域的新手还是经验丰富的专业人士，我们的用户指南都能帮助您了解MCP及其服务，
              并学习如何将它们有效地应用于您的日常工作和项目中。
            </p>
            
            <div class="guide-cards">
              <div class="guide-card">
                <h3>MCP基础知识</h3>
                <p>了解MCP的基本概念、工作原理以及与传统API的区别</p>
                <router-link to="/guide/what-is-mcp" class="btn btn-sm">开始学习</router-link>
              </div>
              
              <div class="guide-card">
                <h3>快速入门</h3>
                <p>通过简单步骤开始使用远程MCP服务，实现您的第一个项目</p>
                <router-link to="/guide/quick-start" class="btn btn-sm">立即开始</router-link>
              </div>
              
              <div class="guide-card">
                <h3>最佳实践</h3>
                <p>掌握使用MCP服务的技巧，学习如何编写有效的提示并优化结果</p>
                <router-link to="/guide/effective-prompts" class="btn btn-sm">查看指南</router-link>
              </div>
              
              <div class="guide-card">
                <h3>常见问题</h3>
                <p>查找有关MCP服务的常见问题解答和疑难解答指南</p>
                <router-link to="/guide/faq" class="btn btn-sm">浏览FAQ</router-link>
              </div>
            </div>
            
            <h2 class="mt-4">推荐阅读</h2>
            <ul class="recommended-list">
              <li>
                <router-link to="/guide/what-is-mcp">什么是MCP?</router-link> - 
                理解Model Context Protocol的核心概念和工作原理
              </li>
              <li>
                <router-link to="/guide/mcp-vs-api">MCP vs 传统API</router-link> - 
                了解MCP与传统API的关键区别和优势
              </li>
              <li>
                <router-link to="/guide/quick-start">快速入门</router-link> - 
                开始使用远程MCP服务的步骤指南
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => {
  return computed(() => route.path === path).value
}
</script>

<style scoped>
.guide-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.guide-nav {
  background-color: var(--lightest-gray);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  position: sticky;
  top: 100px;
  align-self: start;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
}

.guide-nav h3 {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.75rem;
  color: var(--secondary-color);
}

.guide-nav h3:first-child {
  margin-top: 0;
}

.guide-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.guide-nav li {
  margin-bottom: 0.5rem;
}

.guide-nav a {
  display: block;
  padding: 0.5rem 0;
  color: var(--text-color);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: background-color 0.2s, color 0.2s;
}

.guide-nav a:hover, .guide-nav a.active {
  color: var(--primary-color);
}

.guide-nav a.active {
  font-weight: 600;
}

.guide-content {
  max-width: 800px;
}

.guide-content h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.guide-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.guide-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.guide-card {
  padding: 1.5rem;
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
}

.guide-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
}

.guide-card p {
  margin-bottom: 1rem;
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
}

.recommended-list {
  padding-left: 1.5rem;
}

.recommended-list li {
  margin-bottom: 1rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .guide-container {
    grid-template-columns: 1fr;
  }
  
  .guide-nav {
    position: relative;
    top: 0;
    margin-bottom: 2rem;
    max-height: none;
  }
}
</style> 