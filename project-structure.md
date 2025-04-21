# remotemcp.org 项目结构

这个文档描述了Vue.js项目的推荐文件和目录结构，帮助您组织和维护代码。

## 根目录结构

```
remotemcp.org/
├── .github/                  # GitHub相关配置
│   └── workflows/            # GitHub Actions工作流
├── public/                   # 静态资源目录
│   ├── favicon.ico           # 网站图标
│   └── robots.txt            # 搜索引擎规则
├── data/                     # MCP服务数据存储
│   ├── services/             # 服务数据Markdown文件
│   │   ├── category1/        # 按分类组织
│   │   └── category2/        
│   └── guides/               # 指南和教程
├── src/                      # 源代码目录
│   ├── assets/               # 项目资源文件
│   ├── components/           # Vue组件
│   ├── views/                # 页面视图组件
│   ├── router/               # 路由配置
│   ├── store/                # 状态管理
│   ├── utils/                # 工具函数
│   ├── styles/               # 全局样式
│   ├── App.vue               # 根组件
│   └── main.js               # 入口文件
├── scripts/                  # 构建和辅助脚本
├── .gitignore                # Git忽略文件配置
├── index.html                # HTML入口文件
├── package.json              # 项目依赖和脚本
├── README.md                 # 项目说明
├── vite.config.js            # Vite配置
└── tailwind.config.js        # Tailwind CSS配置
```

## 详细结构说明

### 源代码目录 (`src/`)

#### 组件目录 (`components/`)

按功能模块组织组件：

```
components/
├── common/                   # 通用组件
│   ├── AppHeader.vue         # 页头组件
│   ├── AppFooter.vue         # 页脚组件
│   ├── AppNavigation.vue     # 导航组件
│   ├── SearchBar.vue         # 搜索栏组件
│   └── ...
├── directory/                # 目录相关组件
│   ├── ServiceCard.vue       # 服务卡片组件
│   ├── ServiceList.vue       # 服务列表组件
│   ├── CategoryFilter.vue    # 分类筛选组件
│   ├── TagCloud.vue          # 标签云组件
│   └── ...
├── service/                  # 服务详情相关组件
│   ├── ServiceHeader.vue     # 服务头部组件
│   ├── ServiceTabs.vue       # 服务选项卡组件
│   ├── CodeBlock.vue         # 代码块组件
│   ├── AuthConfig.vue        # 认证配置组件
│   └── ...
├── guide/                    # 指南相关组件
│   ├── GuideNavigation.vue   # 指南导航组件
│   ├── GuideContent.vue      # 指南内容组件
│   └── ...
└── ui/                       # 基础UI组件
    ├── BaseButton.vue        # 按钮组件
    ├── BaseCard.vue          # 卡片组件
    ├── BaseTag.vue           # 标签组件
    ├── BaseBadge.vue         # 徽章组件
    └── ...
```

#### 视图目录 (`views/`)

对应路由的页面级组件：

```
views/
├── Home.vue                  # 首页视图
├── Directory/                # 目录页面
│   ├── DirectoryView.vue     # 目录主视图
│   ├── CategoryView.vue      # 分类筛选视图
│   └── TagView.vue           # 标签筛选视图
├── Service/                  # 服务详情页面
│   └── ServiceDetailView.vue # 服务详情视图
├── Guide/                    # 指南页面
│   ├── GuideIndexView.vue    # 指南索引视图
│   └── GuideDetailView.vue   # 指南详情视图
├── Developer/                # 开发者中心页面
│   └── DeveloperView.vue     # 开发者中心视图
├── About.vue                 # 关于页面
├── Submit.vue                # 提交服务页面
└── NotFound.vue              # 404页面
```

#### 路由配置 (`router/`)

```
router/
├── index.js                  # 路由配置主文件
└── routes/                   # 路由模块
    ├── directory.js          # 目录相关路由
    ├── service.js            # 服务相关路由
    ├── guide.js              # 指南相关路由
    └── ...
```

#### 状态管理 (`store/`)

使用Pinia组织状态：

```
store/
├── index.js                  # 状态管理主文件
└── modules/                  # 状态模块
    ├── services.js           # 服务数据状态
    ├── categories.js         # 分类数据状态
    ├── tags.js               # 标签数据状态
    └── ...
```

#### 工具函数 (`utils/`)

```
utils/
├── api.js                    # API请求封装
├── markdown.js               # Markdown处理工具
├── filters.js                # 数据过滤器
├── formatters.js             # 格式化工具
└── constants.js              # 常量定义
```

#### 样式 (`styles/`)

```
styles/
├── main.css                  # 主样式文件
├── variables.css             # CSS变量定义
├── typography.css            # 排版样式
└── transitions.css           # 过渡动画样式
```

### 数据目录 (`data/`)

MCP服务数据的存储结构：

```
data/
├── services/                 # 服务数据
│   ├── data-access/          # 数据访问与存储类别
│   │   ├── filesystem-mcp-server.md
│   │   ├── postgres-mcp-server.md
│   │   └── ...
│   ├── development/          # 开发与编程工具类别
│   │   ├── github-mcp-server.md
│   │   ├── git-mcp-server.md
│   │   └── ...
│   ├── network/              # 网络与通信类别
│   │   └── ...
│   └── ...
├── guides/                   # 教程和指南
│   ├── getting-started.md    # 入门指南
│   ├── using-mcp-services.md # 使用MCP服务
│   └── ...
└── metadata/                 # 元数据
    ├── categories.json       # 分类数据
    ├── tags.json             # 标签数据
    └── featured.json         # 精选服务数据
```

## 开发规范

### 命名规范

- 组件采用 PascalCase 命名法：`ServiceCard.vue`
- 工具函数和变量采用 camelCase 命名法：`fetchServiceData`
- CSS类名采用 kebab-case 命名法：`service-card`
- 常量采用 UPPER_SNAKE_CASE 命名法：`MAX_SERVICES_PER_PAGE`

### 文件组织规范

- 每个组件都应该有自己的目录，包含组件本身以及相关的测试和文档
- 相关的功能应该放在同一个目录中
- 公共/共享的功能应该放在 common 或 shared 目录中

### 样式组织

使用Tailwind CSS，结合以下规范：

- 基本样式通过Tailwind类实现
- 复杂和重复的样式封装为组件
- 全局样式定义在`styles/`目录中
- 组件特定样式使用作用域CSS（scoped）

## 构建和部署

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### 部署流程

1. 提交代码到GitHub仓库
2. GitHub Actions自动构建项目
3. 部署到Cloudflare Pages
4. 自动分配域名和SSL证书

## 推荐的VS Code扩展

- Volar - Vue 3支持
- ESLint - 代码质量检查
- Prettier - 代码格式化
- Tailwind CSS IntelliSense - Tailwind类自动完成 