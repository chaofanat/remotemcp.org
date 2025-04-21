<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-col">
          <h3>快速链接</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/directory">服务目录</router-link></li>
            <li><router-link to="/guide">用户指南</router-link></li>
            <li><router-link to="/developers">开发者中心</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>资源</h3>
          <ul>
            <li><router-link to="/guide/faq">常见问题</router-link></li>
            <li><router-link to="/guide/glossary">术语表</router-link></li>
            <li><router-link to="/blog">博客</router-link></li>
            <li><router-link to="/guide/tutorials">教程</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>社区</h3>
          <ul>
            <li><a href="https://github.com/yourusername/remotemcp.org" target="_blank">GitHub</a></li>
            <li><router-link to="/contribute">贡献指南</router-link></li>
            <li><router-link to="/submit">提交服务</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>法律</h3>
          <ul>
            <li><router-link to="/terms">使用条款</router-link></li>
            <li><router-link to="/privacy">隐私政策</router-link></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        &copy; {{ currentYear }} RemoteMCP.org. 基于MIT许可证开源。
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--dark-gray);
  color: #ffffff;
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.footer-col {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1.5rem;
  padding-right: 1.5rem;
}

.footer-col h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 0.5rem;
}

.footer-col a {
  color: var(--light-gray);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col a:hover {
  color: #ffffff;
}

.copyright {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: var(--light-gray);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-col {
    width: 100%;
    padding-right: 0;
  }
}
</style> 