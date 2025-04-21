---
id: brave-search-mcp-server
name: Brave Search MCP 服务器
description: 官方Brave Search MCP参考实现，允许AI助手通过MCP协议访问Brave搜索引擎进行实时网络搜索和内容检索，支持多语言搜索和结果摘要。
version: 1.0.0
homepage: https://modelcontextprotocol.io/examples
repository: https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search
author: Model Context Protocol团队
license: MIT

category: 搜索
tags: [搜索引擎, 网络浏览, 实时信息, 远程服务, 官方参考实现]

complexity: 简单
technicalRequirement: 无需技术背景
setupEffort: 少量配置

supportedFeatures:
  resources: true
  prompts: false
  tools: true
  sampling: false

authentication:
  required: true
  method: API Key
  authDocUrl: https://brave.com/search/api/

compatibility:
  platforms: [Windows, macOS, Linux]
  languages: [JavaScript, TypeScript]
  clients: [Claude Desktop, Cursor, VS Code]

createdAt: 2023-12-01
updatedAt: 2024-04-01
---

# Brave Search MCP 服务器

Brave Search MCP 服务器是官方MCP参考实现之一，它连接AI助手与Brave搜索引擎，让AI能够实时获取网络信息，提供基于最新事实的回答和见解。

## 使用场景

这个MCP服务适用于需要实时信息的场景：

1. **回答时事问题**：获取最新新闻、事件和信息
2. **事实核查**：验证特定信息的准确性
3. **研究辅助**：收集特定主题的最新研究和数据
4. **技术支持**：查找产品文档、问题解决方案和开源代码示例
5. **市场分析**：获取公司、产品和行业的最新动态

## 快速入门

### 安装与认证配置

Brave Search MCP服务需要API密钥才能访问：

1. 访问 [Brave Search API](https://brave.com/search/api/) 注册并创建API密钥
2. 使用npm安装并配置服务：

```bash
npx -y @modelcontextprotocol/server-brave-search
```

3. 配置Claude Desktop或其他MCP客户端：

```json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-brave-search",
        "--api-key",
        "YOUR_BRAVE_API_KEY"
      ]
    }
  }
}
```

### 基本使用示例

一旦配置完成，您可以通过以下方式使用：

1. **基本搜索**：
   "请搜索关于'可再生能源最新发展'的信息"

2. **特定查询**：
   "帮我查找'如何在Vue.js中实现无限滚动'"

3. **综合分析**：
   "搜索并总结2024年人工智能领域的三大趋势"

4. **多语言搜索**：
   "用德语搜索'柏林最佳咖啡馆'"

## 功能详情

Brave Search MCP服务提供以下核心功能：

### 搜索功能
- **一般搜索**：执行通用搜索查询
- **新闻搜索**：专注于新闻文章和时事
- **图片搜索**：查找相关图片和视觉内容
- **视频搜索**：查找相关视频内容

### 搜索控制
- **语言设置**：指定搜索结果的语言
- **地理位置**：基于特定地区的搜索结果
- **日期范围**：限制结果为特定时间段
- **安全搜索**：控制成人内容过滤

### 结果处理
- **摘要生成**：自动总结搜索结果的关键信息
- **内容提取**：从网页中提取相关信息
- **结果比较**：分析多个来源以验证信息

## 认证与安全

### API密钥管理
Brave Search API使用API密钥进行认证。该密钥应妥善保管：
- 不要在公共代码库中分享密钥
- 考虑设置使用限制，避免超额费用
- 定期轮换密钥以提高安全性

### 使用限制
Brave Search API有使用限制，请参考Brave官方文档了解最新的限制政策。

## 社区资源

- [官方MCP服务库](https://github.com/modelcontextprotocol/servers)
- [Brave Search API官方文档](https://brave.com/search/api/)
- [MCP社区讨论](https://github.com/orgs/modelcontextprotocol/discussions)

---

**注意**：使用Brave Search MCP服务时，请注意遵守Brave的使用条款和API限制。 