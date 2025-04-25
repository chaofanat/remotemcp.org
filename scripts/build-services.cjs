const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

// 源Markdown文件目录和目标JSON文件
const sourceDir = path.resolve(__dirname, '../data/services');
const targetFile = path.resolve(__dirname, '../src/data/serviceData.json');

// 确保目标目录存在
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 查找所有Markdown文件
const markdownFiles = glob.sync('*.md', { cwd: sourceDir });

// 处理每个Markdown文件
const servicesData = markdownFiles.map(filename => {
  const filePath = path.join(sourceDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // 解析前置元数据和内容
  const { data, content } = matter(fileContent);
  
  // 提取文件名作为ID（如果元数据中没有提供）
  const id = data.id || path.basename(filename, '.md');
  
  // 创建服务对象
  return {
    id,
    name: data.name || '未命名服务',
    description: data.description || '',
    version: data.version,
    homepage: data.homepage,
    repository: data.repository,
    author: data.author,
    provider: data.author || data.provider,
    license: data.license,
    category: data.category || '其他',
    tags: data.tags || [],
    complexity: data.complexity || 'intermediate',
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    lastUpdated: data.updatedAt || data.createdAt,
    supportedFeatures: data.supportedFeatures,
    authentication: data.authentication,
    compatibility: data.compatibility,
    technicalRequirement: data.technicalRequirement,
    setupEffort: data.setupEffort,
    // 保存原始Markdown内容
    content: content.trim()
  };
});

// 将数据写入JSON文件
fs.writeFileSync(targetFile, JSON.stringify(servicesData, null, 2));

console.log(`✅ 已生成服务数据文件: ${path.relative(process.cwd(), targetFile)}`);
console.log(`   处理了 ${servicesData.length} 个服务`); 