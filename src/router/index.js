import { createRouter, createWebHistory } from 'vue-router'

// 导入视图组件
const HomePage = () => import('../views/HomePage.vue')
const DirectoryPage = () => import('../views/DirectoryPage.vue')
const GuidePage = () => import('../views/GuidePage.vue')
const DevelopersPage = () => import('../views/DevelopersPage.vue')
const AboutPage = () => import('../views/AboutPage.vue')
const ServiceDetailPage = () => import('../views/ServiceDetailPage.vue')

// 指南子页面
const WhatIsMcp = () => import('../views/guide/WhatIsMcp.vue')
const McpVsApi = () => import('../views/guide/McpVsApi.vue')
const McpConcepts = () => import('../views/guide/McpConcepts.vue')
const QuickStart = () => import('../views/guide/QuickStart.vue')
const ChooseComfortableService = () => import('../views/guide/ChooseComfortableService.vue')
const EffectivePrompts = () => import('../views/guide/EffectivePrompts.vue')
const CommonScenarios = () => import('../views/guide/CommonScenarios.vue')
const FaqPage = () => import('../views/guide/FaqPage.vue')
const Glossary = () => import('../views/guide/Glossary.vue')
const RelatedTutorials = () => import('../views/guide/RelatedTutorials.vue')
const LearningResources = () => import('../views/guide/LearningResources.vue')
const Community = () => import('../views/guide/Community.vue')

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'RemoteMCP.org - 发现和使用远程MCP服务的最佳平台'
      }
    },
    {
      path: '/directory',
      name: 'directory',
      component: DirectoryPage,
      meta: {
        title: '服务目录 - RemoteMCP.org'
      }
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuidePage,
      meta: {
        title: '用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/what-is-mcp',
      name: 'what-is-mcp',
      component: WhatIsMcp,
      meta: {
        title: '什么是MCP? - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/mcp-vs-api',
      name: 'mcp-vs-api',
      component: McpVsApi,
      meta: {
        title: 'MCP vs 传统API - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/mcp-concepts',
      name: 'mcp-concepts',
      component: McpConcepts,
      meta: {
        title: 'MCP核心概念 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/quick-start',
      name: 'quick-start',
      component: QuickStart,
      meta: {
        title: '快速入门 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/choose-comfortable-service',
      name: 'choose-comfortable-service',
      component: ChooseComfortableService,
      meta: {
        title: '选择合适的服务 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/effective-prompts',
      name: 'effective-prompts',
      component: EffectivePrompts,
      meta: {
        title: '编写有效提示 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/common-scenarios',
      name: 'common-scenarios',
      component: CommonScenarios,
      meta: {
        title: 'MCP常见使用场景 - 用户指南 - RemoteMCP.org'
      }
    },
    
    {
      path: '/guide/faq',
      name: 'faq',
      component: FaqPage,
      meta: {
        title: '常见问题 - 用户指南 - RemoteMCP.org'
      } 
    },
    {
      path: '/guide/glossary',
      name: 'glossary',
      component: Glossary,
      meta: {
        title: 'MCP术语表 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/related-tutorials',
      name: 'related-tutorials',
      component: RelatedTutorials,
      meta: {
        title: '相关教程 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/learning-resources',
      name: 'learning-resources',
      component: LearningResources,
      meta: {
        title: '学习资源 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/guide/community',
      name: 'community',
      component: Community,
      meta: {
        title: 'MCP社区指南 - 用户指南 - RemoteMCP.org'
      }
    },
    {
      path: '/developers',
      name: 'developers',
      component: DevelopersPage,
      meta: {
        title: '开发者中心 - RemoteMCP.org'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: '关于我们 - RemoteMCP.org'
      }
    },
    {
      path: '/service/:id',
      name: 'service-detail',
      component: ServiceDetailPage,
      meta: {
        title: 'MCP服务详情 - RemoteMCP.org'
      }
    },
    // 重定向
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 动态修改页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'RemoteMCP.org'
  next()
})

export default router 