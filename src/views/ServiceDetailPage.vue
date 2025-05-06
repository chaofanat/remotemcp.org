<template>
  <div class="service-detail-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>{{ service?.name || '加载中...' }}</h1>
        <p>{{ service?.description || '加载中...' }}</p>
      </div>
    </section>

    <!-- 面包屑导航 -->
    <div class="breadcrumb container">
      <router-link to="/">首页</router-link> &gt;
      <router-link to="/directory">服务目录</router-link> &gt;
      <span>{{ service?.name || '加载中...' }}</span>
    </div>

    <!-- 服务详情 -->
    <section class="section">
      <div class="container" v-if="service">
        <div class="service-content">
          <!-- 服务基本信息卡片 -->
          <div class="service-meta-card">
            <div class="service-header">
              <div class="badges">
                <span class="badge badge-category">{{ service.category }}</span>
                <span class="badge badge-complexity">{{ service.complexity }}</span>
              </div>
              <div class="provider">
                <span class="provider-label">提供者:</span>
                <span class="provider-value">{{ service.provider }}</span>
              </div>
              <div class="version">
                <span class="version-label">版本:</span>
                <span class="version-value">{{ service.version || '未指定' }}</span>
              </div>
              <div class="updated">
                <span class="updated-label">更新时间:</span>
                <span class="updated-value">{{ service.lastUpdated }}</span>
              </div>
            </div>
            
            <div class="meta-section">
              <h3>标签</h3>
              <div class="tags">
                <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
                <span v-if="!service.tags || service.tags.length === 0" class="no-tags">无标签</span>
              </div>
            </div>

            <div class="meta-section" v-if="service.technicalRequirement">
              <h3>技术要求</h3>
              <p>{{ service.technicalRequirement }}</p>
            </div>

            <div class="meta-section" v-if="service.setupEffort">
              <h3>配置难度</h3>
              <p>{{ service.setupEffort }}</p>
            </div>

            <div class="meta-section" v-if="service.license">
              <h3>许可证</h3>
              <p>{{ service.license }}</p>
            </div>

            <div class="meta-section" v-if="service.authentication && service.authentication.required">
              <h3>认证信息</h3>
              <div class="auth-info">
                <div class="auth-item">
                  <span class="auth-label">认证方式:</span>
                  <span class="auth-value">{{ service.authentication.method || '未指定' }}</span>
                </div>
                <div class="auth-item" v-if="service.authentication.authDocUrl">
                  <a :href="service.authentication.authDocUrl" target="_blank" class="external-link">认证文档</a>
                </div>
              </div>
            </div>

            <div class="meta-section" v-if="service.supportedFeatures && Object.keys(service.supportedFeatures).length > 0">
              <h3>功能支持</h3>
              <div class="features-list">
                <div class="feature-item" v-for="(value, key) in service.supportedFeatures" :key="key">
                  <span class="feature-name">{{ getFeatureName(key) }}:</span>
                  <span class="feature-value" :class="{ 'supported': value, 'unsupported': !value }">
                    {{ value ? '✓' : '✗' }}
                  </span>
                </div>
              </div>
            </div>

            <div class="meta-section" v-if="service.compatibility && (service.compatibility.platforms || service.compatibility.languages || service.compatibility.clients)">
              <h3>兼容性</h3>
              <div class="compatibility-info" v-if="service.compatibility.platforms && service.compatibility.platforms.length">
                <h4>平台</h4>
                <div class="tags">
                  <span v-for="platform in service.compatibility.platforms" :key="platform" class="tag">{{ platform }}</span>
                </div>
              </div>
              <div class="compatibility-info" v-if="service.compatibility.languages && service.compatibility.languages.length">
                <h4>编程语言</h4>
                <div class="tags">
                  <span v-for="language in service.compatibility.languages" :key="language" class="tag">{{ language }}</span>
                </div>
              </div>
              <div class="compatibility-info" v-if="service.compatibility.clients && service.compatibility.clients.length">
                <h4>客户端</h4>
                <div class="tags">
                  <span v-for="client in service.compatibility.clients" :key="client" class="tag">{{ client }}</span>
                </div>
              </div>
            </div>

            <div class="meta-section" v-if="service.homepage || service.repository">
              <h3>链接</h3>
              <div class="links">
                <a v-if="service.homepage" :href="service.homepage" target="_blank" class="external-link">官方主页</a>
                <a v-if="service.repository" :href="service.repository" target="_blank" class="external-link">代码仓库</a>
              </div>
            </div>
          </div>

          <!-- 服务详细内容 -->
          <div class="service-details">
            <div class="markdown-content" v-html="renderedContent"></div>
          </div>
        </div>
      </div>
      
      <div class="container" v-else>
        <div class="loading-state" v-if="!error">
          <p>正在加载服务信息...</p>
        </div>
        <div class="error-state" v-else>
          <h2>无法加载服务信息</h2>
          <p>{{ error }}</p>
          <router-link to="/directory" class="btn">返回服务目录</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
// 导入预生成的JSON数据
import serviceData from '../data/serviceData.json';

const route = useRoute();
const serviceId = route.params.id;
const service = ref(null);
const error = ref(null);

// 从Markdown渲染HTML内容
const renderedContent = computed(() => {
  if (!service.value || !service.value.content) return '';
  
  // 如果内容已经是HTML，直接返回
  if (service.value.content.startsWith('<')) {
    return service.value.content;
  }
  
  // 否则尝试渲染Markdown
  try {
    return marked(service.value.content);
  } catch (e) {
    console.error('Markdown渲染错误:', e);
    return `<p>内容渲染失败: ${e.message}</p>`;
  }
});

// 获取功能名称的可读版本
function getFeatureName(key) {
  const featureNames = {
    'resources': '资源访问',
    'prompts': '提示模板',
    'tools': '工具调用',
    'sampling': '采样控制'
  };
  return featureNames[key] || key;
}

// 加载服务详情
async function loadServiceDetail() {
  try {
    // 使用预生成的JSON服务数据
    console.log('从JSON数据中查找服务ID:', serviceId);
    
    // 查找匹配的服务
    const foundService = serviceData.find(s => s.id === serviceId);
    
    if (!foundService) {
      throw new Error(`找不到ID为 "${serviceId}" 的服务`);
    }
    
    console.log('找到服务:', foundService.name);
    
    // 创建服务对象，复制所有属性
    service.value = {
      ...foundService,
      // 保留原始的Markdown内容，由计算属性处理渲染
      content: foundService.content,
      rawData: foundService
    };
    
    // 更新页面标题
    document.title = `${service.value.name} - MCP服务详情 - RemoteMCP.org`;
  } catch (e) {
    console.error('加载服务详情失败:', e);
    error.value = e.message;
  }
}

onMounted(() => {
  loadServiceDetail();
});
</script>

<style>
.service-detail-page {
  margin-bottom: 3rem;
}

.container {
  max-width: 90%;
  width: 90%;
}

.breadcrumb {
  padding: 1rem 0;
  margin-bottom: 2rem;
  color: var(--text-light);
}

.breadcrumb a {
  color: var(--text-light);
  text-decoration: none;
  margin: 0 0.5rem;
}

.breadcrumb a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.breadcrumb a:first-child {
  margin-left: 0;
}

.service-content {
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(0, 3fr);
  gap: 2rem;
}

.service-meta-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  height: fit-content;
}

.service-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--light-gray);
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.badge-category {
  background-color: var(--lightest-gray);
  color: var(--secondary-color);
}

.badge-complexity {
  background-color: var(--primary-light);
  color: white;
}

.provider, .version, .updated {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.provider-label, .version-label, .updated-label {
  color: var(--text-light);
  display: inline-block;
  width: 80px;
}

.meta-section {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--light-gray);
}

.meta-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.meta-section h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: var(--light-gray);
  color: var(--text-dark);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.no-tags {
  color: var(--text-light);
  font-style: italic;
  font-size: 0.9rem;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.9rem;
}

.external-link:hover {
  text-decoration: underline;
}

.auth-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.auth-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.auth-label {
  color: var(--text-light);
  min-width: 80px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.feature-name {
  color: var(--text-dark);
}

.feature-value {
  font-weight: bold;
}

.supported {
  color: var(--success-color, green);
}

.unsupported {
  color: var(--muted-color, #999);
}

.compatibility-info {
  margin-bottom: 1rem;
}

.compatibility-info h4 {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: var(--text-light);
}

.service-details {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 2rem;
  width: 100%;
  max-width: 100%;
}

.markdown-content {
  line-height: 1.6;
  color: var(--text-dark);
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
}

.markdown-content h1 {
  font-size: 2rem;
  margin: 1.5rem 0 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 2px solid var(--primary-light);
  color: var(--primary-color);
}

.markdown-content h2 {
  font-size: 1.6rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--light-gray);
  color: var(--secondary-color);
}

.markdown-content h3 {
  font-size: 1.4rem;
  margin: 1.7rem 0 1rem;
  color: var(--text-dark);
  font-weight: 600;
}

.markdown-content h4 {
  font-size: 1.2rem;
  margin: 1.5rem 0 0.8rem;
  color: var(--text-dark);
  font-weight: 600;
}

.markdown-content p {
  margin-bottom: 1.2rem;
  text-align: justify;
}

.markdown-content a {
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: 1px dotted var(--primary-color);
  transition: all 0.2s ease;
}

.markdown-content a:hover {
  color: var(--primary-dark);
  border-bottom: 1px solid var(--primary-dark);
}

.markdown-content strong {
  font-weight: 600;
  color: var(--text-darker);
}

.markdown-content em {
  font-style: italic;
}

.markdown-content ul, .markdown-content ol {
  margin: 0 0 1.5rem 1.5rem;
  padding-left: 1rem;
}

.markdown-content ul {
  list-style-type: disc;
}

.markdown-content ol {
  list-style-type: decimal;
}

.markdown-content li {
  margin-bottom: 0.7rem;
  line-height: 1.5;
}

.markdown-content li > ul, .markdown-content li > ol {
  margin: 0.5rem 0 0.5rem 1.5rem;
}

.markdown-content blockquote {
  margin: 1.5rem 0;
  padding: 0.8rem 1.2rem;
  border-left: 4px solid var(--primary-light);
  background-color: var(--lightest-gray);
  font-style: italic;
  color: var(--text-dark);
}

.markdown-content blockquote p {
  margin-bottom: 0;
}

.markdown-content code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  background-color: var(--lightest-gray);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
  color: var(--secondary-color);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.markdown-content pre {
  background-color: #f8f9fa;
  padding: 1.2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  margin: 1.5rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.markdown-content pre code {
  background-color: transparent;
  padding: 0;
  border: none;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #333;
  display: block;
}

.markdown-content img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 1.5rem 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  display: block;
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  overflow-x: auto;
  display: block;
}

.markdown-content table th {
  background-color: var(--primary-light);
  color: white;
  font-weight: 600;
  padding: 0.8rem;
  text-align: left;
}

.markdown-content table td {
  padding: 0.8rem;
  border-bottom: 1px solid var(--light-gray);
}

.markdown-content table tr:nth-child(even) {
  background-color: var(--lightest-gray);
}

.markdown-content hr {
  height: 1px;
  background-color: var(--light-gray);
  border: none;
  margin: 2rem 0;
}

/* 代码语法高亮优化 */
.markdown-content .hljs-keyword,
.markdown-content .hljs-selector-tag,
.markdown-content .hljs-title,
.markdown-content .hljs-section,
.markdown-content .hljs-doctag,
.markdown-content .hljs-name,
.markdown-content .hljs-strong {
  color: #d73a49;
}

.markdown-content .hljs-attr {
  color: #6f42c1;
}

.markdown-content .hljs-string,
.markdown-content .hljs-title,
.markdown-content .hljs-section,
.markdown-content .hljs-built_in,
.markdown-content .hljs-literal,
.markdown-content .hljs-type,
.markdown-content .hljs-addition,
.markdown-content .hljs-tag,
.markdown-content .hljs-quote,
.markdown-content .hljs-name,
.markdown-content .hljs-selector-id,
.markdown-content .hljs-selector-class {
  color: #22863a;
}

.markdown-content .hljs-comment,
.markdown-content .hljs-deletion,
.markdown-content .hljs-meta {
  color: #6a737d;
}

.loading-state, .error-state {
  text-align: center;
  padding: 3rem;
}

.error-state h2 {
  color: var(--error-color);
  margin-bottom: 1rem;
}

.error-state .btn {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .service-content {
    grid-template-columns: 1fr;
  }
  
  .service-meta-card {
    order: 2;
  }
  
  .service-details {
    order: 1;
  }
}
</style> 