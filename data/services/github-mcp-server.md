---
id: github-mcp-server
name: GitHub MCP 服务器
description: 官方GitHub MCP参考实现，允许AI助手通过MCP协议与GitHub交互，支持代码库检索、PR管理和问题跟踪等功能。
version: 1.0.0
homepage: https://modelcontextprotocol.io/examples
repository: https://github.com/modelcontextprotocol/servers/tree/main/src/github
author: Model Context Protocol团队
license: MIT

category: programming
tags: [代码托管, 版本控制, 项目管理, 远程服务, 官方参考实现]

complexity: intermediate
technicalRequirement: 基本GitHub知识
setupEffort: 少量配置

supportedFeatures:
  resources: true
  prompts: false
  tools: true
  sampling: false

authentication:
  required: true
  method: GitHub Token
  authDocUrl: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

compatibility:
  platforms: [Windows, macOS, Linux]
  languages: [JavaScript, TypeScript]
  clients: [Claude Desktop, Cursor, VS Code]

createdAt: 2023-12-01
updatedAt: 2024-04-01
---

# GitHub MCP 服务器

GitHub MCP 服务器是官方MCP参考实现之一，它连接AI助手与GitHub，让AI能够浏览代码库、搜索代码、管理问题和拉取请求等。这使AI能够帮助开发者更高效地管理GitHub项目，而无需开发者共享GitHub凭证。

## 使用场景

这个MCP服务适用于以下场景：

1. **代码库探索**：浏览仓库结构、查找文件和理解代码库架构
2. **问题跟踪**：查询、分类和分析项目问题
3. **代码审查**：分析拉取请求中的代码并提供审查建议
4. **文档查找**：检索README、API文档和项目指南
5. **自动化工作流**：辅助GitHub Actions工作流和CI/CD流程

## 快速入门

### 安装与认证配置

GitHub MCP服务需要GitHub令牌才能访问：

1. 在GitHub创建个人访问令牌 [GitHub PAT](https://github.com/settings/tokens)
   - 需要的权限：`repo`, `read:org`（如需访问组织仓库）
   - 对于私有仓库，还需添加适当的私有仓库权限

2. 使用npm安装并配置服务：

```bash
npx -y @modelcontextprotocol/server-github
```

3. 配置Claude Desktop或其他MCP客户端：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y", 
        "@modelcontextprotocol/server-github",
        "--token",
        "YOUR_GITHUB_TOKEN"
      ]
    }
  }
}
```

### 基本使用示例

一旦配置完成，您可以通过以下方式使用：

1. **浏览仓库文件**：
   "请查看modelcontextprotocol/servers仓库的结构并概述其主要组件"

2. **搜索代码**：
   "在modelcontextprotocol组织的仓库中搜索处理鉴权的代码示例"

3. **查看问题**：
   "列出modelcontextprotocol/servers仓库中最近10个开放的问题"

4. **分析拉取请求**：
   "帮我审查modelcontextprotocol/servers仓库中最近的拉取请求"

## 功能详情

GitHub MCP服务提供以下核心功能：

### 仓库操作
- **仓库浏览**：获取仓库列表、文件结构和分支信息
- **代码获取**：检索和分析代码文件内容
- **目录导航**：浏览仓库目录结构和文件
- **提交历史**：查看代码提交历史和变更

### 问题管理
- **问题查询**：搜索和过滤项目问题
- **问题分析**：分析问题趋势和模式
- **标签管理**：查看和理解问题标签系统

### 拉取请求
- **PR浏览**：查看和分析拉取请求
- **代码差异**：查看代码变更和差异
- **审查评论**：查看PR审查评论和讨论

### 组织功能
- **团队结构**：浏览组织团队和成员
- **仓库权限**：查看仓库权限和访问级别

## 认证与安全

### 令牌管理
GitHub令牌是敏感信息，应妥善保管：
- 使用最小所需权限原则
- 考虑设置令牌过期时间
- 不要在公共代码库中分享令牌

### API使用限制
GitHub API有使用限制，通常为每小时5,000个请求（认证用户）。超出限制可能导致暂时无法使用服务。

## 社区资源

- [官方MCP服务库](https://github.com/modelcontextprotocol/servers)
- [GitHub API官方文档](https://docs.github.com/en/rest)
- [MCP社区讨论](https://github.com/orgs/modelcontextprotocol/discussions)

---

**注意**：使用GitHub MCP服务时，请注意遵守GitHub的服务条款和API使用限制。 