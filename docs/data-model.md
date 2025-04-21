# MCP服务数据模型

为了确保所有MCP服务信息的一致性和完整性，每个服务应包含以下属性。这些属性将以Markdown文件的YAML前置元数据格式存储。

## 基本属性

```yaml
---
# 基本信息
id: string                    # 唯一标识符，例如：github-mcp-server
name: string                  # 服务名称，例如：GitHub MCP Server
description: string           # 简短描述（100-150字）
version: string               # 版本号，例如：1.0.0
homepage: url                 # 官方主页链接
repository: url               # 代码仓库链接
author: string                # 作者/维护团队
license: string               # 许可证类型，例如：MIT

# 分类与标签
category: string              # 主要分类，例如：开发工具、数据访问、网络服务等
tags: string[]                # 标签数组，例如：[GitHub, 代码管理, 版本控制]

# 使用难度评估
complexity: enum              # 复杂度级别：简单/中等/复杂
technicalRequirement: enum    # 技术要求：无需技术背景/需要基本概念/需要编程知识
setupEffort: enum             # 配置难度：即插即用/需少量配置/需定制开发

# 功能支持
supportedFeatures:            # 支持的MCP功能
  resources: boolean          # 是否支持资源功能
  prompts: boolean            # 是否支持提示功能
  tools: boolean              # 是否支持工具功能
  sampling: boolean           # 是否支持采样功能

# 认证与安全
authentication:               # 认证信息
  required: boolean           # 是否需要认证
  method: string              # 认证方式，例如：OAuth, API Key, 无
  authDocUrl: url             # 认证文档链接

# 兼容性
compatibility:                # 兼容性信息
  platforms: string[]         # 支持的平台，例如：[Windows, macOS, Linux]
  languages: string[]         # 支持的编程语言，例如：[JavaScript, Python]
  clients: string[]           # 已知兼容的MCP客户端，例如：[Claude Desktop, Cursor]

# 元数据
createdAt: date               # 首次添加日期
updatedAt: date               # 最后更新日期
---
```

## 正文内容结构

Markdown文件的正文应包含以下部分：

### 1. 概述

简要介绍服务的主要功能和特点。这部分应该简洁明了，突出服务的核心价值。

### 2. 使用场景

详细描述服务的实际应用场景，包括：
- 这个服务解决了什么问题
- 谁会从中受益（目标用户）
- 具体的应用案例和示例

### 3. 快速入门

提供服务的基本使用方法：
- 安装步骤
- 基本配置示例
- 简单使用示例

### 4. 功能详情

详细介绍服务提供的功能：
- 支持的资源类型（如适用）
- 提供的工具功能（如适用）
- 支持的提示模板（如适用）
- 特殊功能和限制

### 5. 认证配置

如果服务需要认证，提供详细的配置指南：
- 获取认证凭据的步骤
- 配置认证的方法
- 权限范围说明
- 安全注意事项

### 6. 常见问题

列出使用过程中的常见问题和解决方案。

### 7. 社区资源

- 相关教程链接
- 社区讨论链接
- 相关项目或工具

## 示例

```markdown
---
id: github-mcp-server
name: GitHub MCP Server
description: 一个允许AI助手通过MCP协议访问和操作GitHub仓库的服务，支持查看代码、创建Issue、管理Pull Request等功能。
version: 1.2.0
homepage: https://github.com/modelcontextprotocol/servers/tree/main/github
repository: https://github.com/modelcontextprotocol/servers
author: MCP团队
license: MIT

category: 开发工具
tags: [GitHub, 代码管理, 版本控制, 协作]

complexity: 中等
technicalRequirement: 需要基本概念
setupEffort: 需少量配置

supportedFeatures:
  resources: true
  prompts: true
  tools: true
  sampling: false

authentication:
  required: true
  method: OAuth
  authDocUrl: https://github.com/modelcontextprotocol/servers/tree/main/github#authentication

compatibility:
  platforms: [Windows, macOS, Linux]
  languages: [JavaScript, TypeScript]
  clients: [Claude Desktop, Cursor, Continue]

createdAt: 2025-03-15
updatedAt: 2025-04-18
---

# GitHub MCP Server

GitHub MCP Server是一个强大的工具，它允许AI助手直接与您的GitHub仓库交互，使代码管理和团队协作变得更加简单高效。

## 使用场景

这个MCP服务主要解决以下问题：

1. **代码探索**：让AI助手直接阅读和理解您的GitHub仓库代码，无需复制粘贴
2. **任务管理**：通过自然语言创建和管理Issues，追踪项目进度
3. **代码审查**：分析Pull Requests内容，提供改进建议
4. **文档自动化**：自动生成或更新项目文档

(更多内容...)
```

## 注意事项

1. 每个服务文件名应与`id`属性匹配，例如`github-mcp-server.md`
2. 所有URL应为有效链接
3. 日期格式应为ISO 8601标准：`YYYY-MM-DD`
4. 标签应使用统一的命名风格
5. 描述应简洁明了，避免技术术语过多 
6. 分类与标签参见文档 'docs/caategories.md'