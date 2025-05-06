---
id: amap-mcp-server-sse
name: Amap MCP Server SSE
description: Amap MCP Server SSE 提供基于SSE协议的地图服务，涵盖12个核心接口，支持地理编码、路线规划等功能，简化开发者接入流程。
version: 1.0.0
homepage: https://developer.amap.com/api/mcp-server/summary
repository: https://www.modelscope.cn/mcp/servers/@amap/amap-maps
author: Amap Open Platform
license: None

category: ai
tags: [map, geocoding, route-planning, sse, location]

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
  authDocUrl: https://console.amap.com/dev/key/app

compatibility:
  platforms: [Windows, macOS, Linux]
  languages: [JavaScript, Python, Java]
  clients: [Claude Desktop, Cursor, VS Code, Cherry Studio]

createdAt: 2025-05-06
updatedAt: 2025-05-06
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
[官方文档](https://developer.amap.com/api/mcp-server/summary)

### 安装与认证配置

首先，您需要获取Amap Open Platform的API Key。然后，配置您的应用以使用MCP Server SSE服务。

```bash

{
  "mcpServers": {
    "amap-amap-sse": {
      "url": "https://mcp.amap.com/sse?key=您在高德官网上申请的key"
    }
  }
}
```

### 一个用例

- mcp客户端： Cherry Studio
- LLM：deepseek-chat
- prompt:
```md
我计划去杭州余杭区工作，大概明天从江苏张家港出发，到达杭州后，需要在三天内找到合适的房子租住，请帮我考虑注意事项并规划行程，将你的规划以一个设计优美的html页面作为结果给我
```
- results:

![](https://www.chaofan.online/media/objectsstorage/BaiduSyncdisk/objstorage/image_ds5y8rR.png)

![](https://www.chaofan.online/media/objectsstorage/BaiduSyncdisk/objstorage/image_LqPm6ro.png)

## 评价
该mcp服务存在部分工具说明不够清晰导致llm无法正确生成工具调用参数的情况。


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

使用Amap MCP Server SSE服务需要API Key认证。请确保您的API Key安全，避免泄露。详细的认证流程请参考[认证文档](https://console.amap.com/dev/key/app)。

## 社区资源

- [高德开发者平台](https://developer.amap.com/)


---

**注意**：在使用过程中，请确保遵守Amap Open Platform的使用规范和法律法规。