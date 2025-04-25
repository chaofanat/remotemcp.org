<template>
  <div class="directory-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP服务目录</h1>
        <p>探索可用的远程MCP服务，找到适合您需求的解决方案</p>
      </div>
    </section>

    <!-- 搜索和过滤 -->
    <section class="section">
      <div class="container">
        <div class="search-filter">
          <div class="search-box">
            <input 
              type="text" 
              placeholder="搜索MCP服务..." 
              v-model="searchQuery"
              @input="filterServices"
            />
            <button class="search-btn">
              <span class="search-icon">🔍</span>
            </button>
          </div>
          <div class="filters">
            <div class="filter-group">
              <label>分类</label>
              <select v-model="categoryFilter" @change="filterServices">
                <option value="">所有分类</option>
                <option v-for="category in uniqueCategories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
            <div class="filter-group">
              <label>复杂度</label>
              <select v-model="complexityFilter" @change="filterServices">
                <option value="">所有复杂度</option>
                <option v-for="complexity in uniqueComplexities" :key="complexity" :value="complexity">
                  {{ complexity }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- 服务列表 -->
        <div class="services-list">
          <div v-if="filteredServices.length === 0" class="no-results">
            <p>没有找到匹配的服务。请尝试调整您的搜索条件。</p>
          </div>
          
          <div v-for="service in filteredServices" :key="service.id" class="service-card">
            <div class="service-header">
              <h3>{{ service.name }}</h3>
              <div class="service-badges">
                <span class="badge badge-category">{{ service.category }}</span>
                <span class="badge badge-complexity">{{ service.complexity }}</span>
              </div>
            </div>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-features">
              <div class="feature">
                <span class="feature-label">提供者:</span>
                <span>{{ service.provider }}</span>
              </div>
              <div class="feature">
                <span class="feature-label">更新时间:</span>
                <span>{{ service.lastUpdated }}</span>
              </div>
            </div>
            <div class="service-actions">
              <router-link :to="`/service/${service.id}`" class="btn">查看详情</router-link>
            </div>
          </div>
        </div>
        
        <div class="pagination">
          <button 
            class="btn btn-outline pagination-btn" 
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            上一页
          </button>
          <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
          <button 
            class="btn btn-outline pagination-btn" 
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            下一页
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
// 导入预生成的JSON数据
import serviceData from '../data/serviceData.json';

// 初始化markdown解析器
const md = new MarkdownIt();

// 真实数据加载，从data/services目录中加载并解析markdown文档
const services = ref([]);

onMounted(async () => {
  try {
    // 使用预生成的服务数据
    console.log('使用预生成的JSON服务数据，数量:', serviceData.length);
    
    // 处理每个服务数据，将Markdown转换为HTML
    services.value = serviceData.map(service => {
      // 解析markdown内容
      const htmlContent = md.render(service.content || '');
      
      // 返回带有HTML内容的服务对象
      return {
        ...service,
        content: htmlContent
      };
    });
    
    console.log('加载完成，找到服务数量:', services.value.length);
    
    // 应用过滤
    filterServices();
  } catch (error) {
    console.error('加载服务数据时发生错误:', error);
  }
});

// 分页参数
const itemsPerPage = 3;
const currentPage = ref(1);

// 过滤条件
const searchQuery = ref('');
const categoryFilter = ref('');
const complexityFilter = ref('');

// 过滤后的服务列表
const filteredServices = ref([]);

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredServices.value.length / itemsPerPage);
});

// 唯一的分类列表
const uniqueCategories = computed(() => {
  const categories = services.value.map(service => service.category);
  // 过滤掉重复和空值，并按字母顺序排序
  return [...new Set(categories)].filter(Boolean).sort();
});

// 唯一的复杂度列表
const uniqueComplexities = computed(() => {
  const complexities = services.value.map(service => service.complexity);
  // 过滤掉重复和空值
  const uniqueValues = [...new Set(complexities)].filter(Boolean);
  // 按复杂度级别排序（初级->中级->高级）
  const orderMap = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
  return uniqueValues.sort((a, b) => (orderMap[a] || 99) - (orderMap[b] || 99));
});

// 当前显示的服务
const currentServices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredServices.value.slice(start, end);
});

// 过滤服务
function filterServices() {
  console.log('正在过滤服务，当前服务数量:', services.value.length);
  let result = [...services.value]; // 创建副本以避免修改原始数据
  
  // 应用搜索查询
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(service => 
      (service.name && service.name.toLowerCase().includes(query)) || 
      (service.description && service.description.toLowerCase().includes(query))
    );
  }
  
  // 应用分类过滤
  if (categoryFilter.value) {
    result = result.filter(service => service.category === categoryFilter.value);
  }
  
  // 应用复杂度过滤
  if (complexityFilter.value) {
    result = result.filter(service => service.complexity === complexityFilter.value);
  }
  
  console.log('过滤结果:', result);
  filteredServices.value = result;
  
  // 重置页码
  if (currentPage.value > totalPages.value && totalPages.value > 0) {
    currentPage.value = 1;
  }
}

// 切换页面
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>

<style scoped>
.search-filter {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
}

.search-box {
  flex: 1;
  min-width: 250px;
  position: relative;
}

.search-box input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--light-gray);
  border-radius: var(--border-radius);
  font-size: 1rem;
}

.search-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  min-width: 150px;
}

.filter-group label {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  color: var(--text-light);
}

.filter-group select {
  padding: 0.7rem;
  border: 1px solid var(--light-gray);
  border-radius: var(--border-radius);
  background-color: white;
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.service-card {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.service-header {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-header h3 {
  margin-bottom: 0;
  color: var(--primary-color);
}

.service-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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

.service-description {
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex-grow: 1;
}

.service-features {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.feature {
  margin-bottom: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.feature-label {
  color: var(--text-light);
  white-space: nowrap;
}

.service-actions {
  margin-top: auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination-btn {
  padding: 0.5rem 1rem;
}

.page-info {
  font-weight: 600;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  background-color: var(--lightest-gray);
  border-radius: var(--border-radius);
}

@media (max-width: 768px) {
  .search-filter, .filters {
    flex-direction: column;
  }
  
  .filter-group, .search-box {
    width: 100%;
  }
}
</style> 