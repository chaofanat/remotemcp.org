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

// 必填字段列表
const requiredFields = ['id', 'name', 'description', 'category'];

// 校验字段类型
function validateFieldType(field, value, type) {
  switch(type) {
    case 'string':
      return typeof value === 'string';
    case 'array':
      return Array.isArray(value);
    case 'object':
      return typeof value === 'object' && value !== null && !Array.isArray(value);
    case 'boolean':
      return typeof value === 'boolean';
    case 'url':
      try {
        // 简单URL格式校验
        return typeof value === 'string' && 
          (value.startsWith('http://') || value.startsWith('https://'));
      } catch (e) {
        return false;
      }
    default:
      return true;
  }
}

// 校验单个服务文件
function validateServiceFile(filename, data) {
  const errors = [];
  
  // 检查必填字段
  for (const field of requiredFields) {
    if (!data[field]) {
      errors.push(`缺少必填字段: ${field}`);
    }
  }
  
  // 校验字段类型
  const typeValidations = [
    { field: 'id', type: 'string' },
    { field: 'name', type: 'string' },
    { field: 'description', type: 'string' },
    { field: 'version', type: 'string' },
    { field: 'homepage', type: 'url' },
    { field: 'repository', type: 'url' },
    { field: 'tags', type: 'array' },
    { field: 'supportedFeatures', type: 'object' },
    { field: 'authentication', type: 'object' },
    { field: 'compatibility', type: 'object' },
  ];
  
  for (const { field, type } of typeValidations) {
    if (data[field] && !validateFieldType(field, data[field], type)) {
      errors.push(`字段 ${field} 类型错误，应为 ${type}`);
    }
  }
  
  // 校验ID与文件名是否匹配
  const fileBaseName = path.basename(filename, '.md');
  if (data.id && data.id !== fileBaseName) {
    errors.push(`ID "${data.id}" 与文件名 "${fileBaseName}" 不匹配`);
  }
  
  return errors;
}

// 处理每个Markdown文件
const servicesData = [];
const skippedFiles = [];

for (const filename of markdownFiles) {
  try {
    const filePath = path.join(sourceDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // 解析前置元数据和内容
    const { data, content } = matter(fileContent);
    
    // 验证数据格式
    const validationErrors = validateServiceFile(filename, data);
    
    if (validationErrors.length > 0) {
      console.warn(`⚠️ 跳过文件 ${filename}，格式不符合要求:`);
      validationErrors.forEach(error => console.warn(`   - ${error}`));
      skippedFiles.push({ file: filename, errors: validationErrors });
      continue;
    }
    
    // 提取文件名作为ID（如果元数据中没有提供）
    const id = data.id || path.basename(filename, '.md');
    
    // 创建服务对象
    servicesData.push({
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
    });
    
    console.log(`✓ 已验证服务文件: ${filename}`);
  } catch (error) {
    console.error(`❌ 处理文件 ${filename} 时出错:`, error.message);
    skippedFiles.push({ file: filename, errors: [error.message] });
  }
}

// 将数据写入JSON文件
fs.writeFileSync(targetFile, JSON.stringify(servicesData, null, 2));

// 输出处理结果
console.log(`\n✅ 已生成服务数据文件: ${path.relative(process.cwd(), targetFile)}`);
console.log(`   成功处理 ${servicesData.length} 个服务`);

if (skippedFiles.length > 0) {
  console.log(`   跳过 ${skippedFiles.length} 个不符合要求的文件`);
  
  // 写入错误日志文件
  const logFile = path.resolve(__dirname, '../logs/validation-errors.json');
  const logDir = path.dirname(logFile);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  fs.writeFileSync(logFile, JSON.stringify({ timestamp: new Date().toISOString(), errors: skippedFiles }, null, 2));
  console.log(`   详细错误日志已写入: ${path.relative(process.cwd(), logFile)}`);
} 