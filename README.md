# RemoteMCP.org

RemoteMCP.org旨在成为最全面的**远程MCP服务目录**，帮助普通用户无需配置任何环境即可轻松使用MCP（Model Context Protocol）服务。


## 项目愿景

- 为普通用户提供全面的远程MCP服务资源
- 通过用户反馈筛选和排列高质量服务
- 重点展示服务的使用复杂度、具体用途和价值
- 简化MCP服务的发现和使用流程

## 项目进度 （停滞）
我对远程mcp服务的发展产生了质疑，sse和steamable http并不是必要的，完全可以使用stdio的方式在本地完成相关远程服务api调用的封装。

## 核心特点

- 简洁易用的服务目录与详细说明页
- 基于用户实际需求的服务分类系统
- 统一的服务评价和反馈机制
- 完整的服务文档与使用示例
- 社区驱动的内容贡献模式

## 数据模型

每个MCP服务以Markdown文件形式存储，详细信息参见文件'docs/data-model.md'

## 技术架构

- 基于Vue 3和Vite构建的现代化Web应用
- 使用Markdown文件存储服务数据，便于社区参与
- 响应式设计，支持多种设备访问
- 简洁直观的用户界面

## 项目结构

```
remotemcp.org/
├── docs/              # 文档
├── public/            # 静态资源
├── src/               # 源代码
│   ├── assets/        # 图片、样式等资源
│   ├── components/    # 可复用组件
│   ├── views/         # 页面视图组件
│   ├── router/        # 路由配置
│   ├── store/         # 状态管理
│   ├── services/      # API服务
│   ├── utils/         # 工具函数
│   ├── App.vue        # 根组件
│   └── main.js        # 入口文件
├── data/              # MCP服务Markdown数据
│   └── services/      # 服务描述文件
├── docs/              # 项目文档
├── .gitignore         # git忽略文件
├── package.json       # 项目配置
├── vite.config.js     # Vite配置
└── README.md          # 项目说明
```

## 安装与开发

1. 克隆项目代码

```bash
git clone https://github.com/yourusername/remotemcp.org.git
cd remotemcp.org
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 构建生产版本

```bash
npm run build
```

## 数据贡献

项目数据通过以下方式收集：

- 个人研究和整理
- 社区贡献
- 自动抓取公开信息

欢迎通过Pull Request提交新的MCP服务描述文件。

## 目标用户

- 希望利用AI助手但缺乏技术背景的普通用户
- 寻找特定MCP服务解决方案的专业人士
- 想要贡献和分享MCP服务的开发者

## 许可证

MIT
