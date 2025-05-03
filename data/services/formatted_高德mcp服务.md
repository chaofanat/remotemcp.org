---
id: amap-mcp-server-sse
name: Amap MCP Server SSE
description: Amap MCP Server SSE 提供基于SSE协议的地图服务，涵盖12个核心接口，支持地理编码、路线规划等功能，简化开发者接入流程。
version: 1.0.0
homepage: https://www.amap.com/
repository: https://github.com/amap/amap-mcp-server-sse
author: Amap Open Platform
license: Apache-2.0

category: ai
tags: map, geocoding, route-planning, sse, location

complexity: intermediate
technicalRequirement: 熟悉HTTP协议和SSE技术，具备基本的编程能力。
setupEffort: 少量配置

supportedFeatures:
  resources: true
  prompts: false
  tools: true
  sampling: false

authentication:
  required: true
  method: API Key
  authDocUrl: https://www.amap.com/api/auth

compatibility:
  platforms: [Windows, macOS, Linux]
  languages: [JavaScript, Python, Java]
  clients: [Claude Desktop, Cursor, VS Code]

createdAt: 2023-10-01
updatedAt: 2023-10-10
---

# Amap MCP Server SSE

Amap MCP Server SSE 是基于SSE协议的地图服务解决方案，旨在提升LBS服务与LLM的交互效率。该服务覆盖12个核心接口，包括地理编码、逆地理编码、IP定位、天气查询、路线规划等，适用于多种场景。通过SSE技术，开发者可以轻松建立与服务器之间的持久连接，实现实时数据推送。

## 使用场景

这个MCP服务适用于以下场景：

1. 地理位置信息查询与转换
2. 实时天气查询
3. 多模式路线规划（步行、骑行、驾车、公共交通）
4. POI信息搜索与详情查询

## 快速入门

### 安装与认证配置

首先，您需要获取Amap Open Platform的API Key。然后，配置您的应用以使用MCP Server SSE服务。

```bash
# 示例配置
{
  "mcpServers": {
    "amap-maps": {
      "type": "sse",
      "url": "https://mcp.api-inference.modelscope.cn/sse/cfe6e2fef64e46"
    }
  }
}
```

### 基本使用示例

以下是一个简单的地理编码请求示例：

```javascript
const eventSource = new EventSource('https://mcp.api-inference.modelscope.cn/sse/cfe6e2fef64e46?address=北京市朝阳区&city=北京市');

eventSource.onmessage = function(event) {
  console.log('Received data:', event.data);
};

eventSource.onerror = function(error) {
  console.error('EventSource failed:', error);
};
```

## 功能详情

### 地理编码

将详细的结构化地址转换为经纬度坐标。

**输入**: address（地址信息），city（城市信息，可选）

**输出**: location（经纬度）

### 逆地理编码

将Amap经纬度坐标转换为行政区划地址信息。

**输入**: location（经纬度）

**输出**: addressComponent（位置信息，包括省、市、区等）

### IP定位

根据用户提供的IP地址确定位置。

**输入**: IP

**输出**: province（省份），city（城市），adcode（城市代码）

### 天气查询

根据城市名称或标准adcode查询指定城市的天气。

**输入**: city（城市名称或城市adcode）

**输出**: forecasts（天气预报）

### 路线规划

支持骑行、步行、驾车和公共交通路线规划，考虑各种道路情况。

**输入**: origin（起点经纬度），destination（终点经纬度）

**输出**: distance（规划距离），duration（规划时间），steps（规划步骤信息）

### POI搜索

基于关键词搜索相关POI位置信息。

**输入**: keywords（搜索关键词），city（查询城市，可选）

**输出**: suggestion（搜索建议），pois（位置信息列表）

## 认证与安全

使用Amap MCP Server SSE服务需要API Key认证。请确保您的API Key安全，避免泄露。详细的认证流程请参考[认证文档](https://www.amap.com/api/auth)。

## 社区资源

- [Amap开发者论坛](https://developer.amap.com/forum)
- [GitHub代码仓库](https://github.com/amap/amap-mcp-server-sse)

---

**注意**：在使用过程中，请确保遵守Amap Open Platform的使用规范和法律法规。