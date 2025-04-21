<template>
  <header class="header">
    <div class="container header-container">
      <router-link to="/" class="logo">RemoteMCP.org</router-link>
      <nav>
        <ul class="nav-menu">
          <li><router-link to="/" :class="{ active: isActive('/') }">首页</router-link></li>
          <li><router-link to="/directory" :class="{ active: isActive('/directory') }">浏览服务</router-link></li>
          <li><router-link to="/guide" :class="{ active: isActive('/guide') }">用户指南</router-link></li>
          <li><router-link to="/developers" :class="{ active: isActive('/developers') }">开发者中心</router-link></li>
          <li><router-link to="/about" :class="{ active: isActive('/about') }">关于</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => {
  return computed(() => {
    if (path === '/') {
      return route.path === '/'
    }
    return route.path.startsWith(path)
  }).value
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin-left: 1.5rem;
}

.nav-menu a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s;
}

.nav-menu a:hover, .nav-menu a.active {
  color: var(--primary-color);
}

.nav-menu a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-menu {
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-menu li {
    margin: 0.5rem;
  }
}
</style> 