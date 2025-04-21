<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <main class="main-content">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
@import './assets/css/global.css';

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
