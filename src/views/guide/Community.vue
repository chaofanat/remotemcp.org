<template>
  <div class="community-guide">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <h1>MCP 社区指南</h1>
        <p>加入蓬勃发展的 Model Context Protocol 社区，交流经验并获取最新资讯</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">首页</router-link> &gt;
          <router-link to="/guide">用户指南</router-link> &gt;
          <span>社区指南</span>
        </div>
        
        <div class="guide-content">
          <p>
            MCP社区是由开发者、研究人员和企业用户组成的全球性网络，致力于推进Model Context Protocol的发展和应用。
            加入我们的社区，您将有机会与行业专家交流、获取最新资讯、分享您的经验并参与协议的未来发展。
          </p>
          
          <!-- 社区平台部分 -->
          <h2>社区平台</h2>
          <div class="platform-grid">
            <div class="platform-card" v-for="platform in communityPlatforms" :key="platform.name">
              <div class="platform-icon" :class="platform.icon"></div>
              <div class="platform-content">
                <h3>{{ platform.name }}</h3>
                <p>{{ platform.description }}</p>
                <div class="platform-meta">
                  <span class="platform-members">{{ platform.members }}</span>
                  <span class="platform-activity" :class="platform.activityLevel">{{ platform.activity }}</span>
                </div>
                <a :href="platform.link" target="_blank" class="platform-link">
                  加入社区 <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 社区活动部分 -->
          <h2>社区活动</h2>
          <div class="events-section">
            <div class="event-card" v-for="event in communityEvents" :key="event.title">
              <div class="event-date">
                <span class="event-day">{{ event.day }}</span>
                <span class="event-month">{{ event.month }}</span>
              </div>
              <div class="event-content">
                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>
                <div class="event-details">
                  <span class="event-type" :class="event.type">{{ event.typeLabel }}</span>
                  <span class="event-location">{{ event.location }}</span>
                  <span class="event-time">{{ event.time }}</span>
                </div>
                <a :href="event.link" target="_blank" class="event-link">
                  了解详情 <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 社区贡献部分 -->
          <h2>参与贡献</h2>
          <div class="contribute-grid">
            <div class="contribute-card" v-for="contribution in contributionWays" :key="contribution.title">
              <div class="contribute-icon" :class="contribution.icon"></div>
              <div class="contribute-content">
                <h3>{{ contribution.title }}</h3>
                <p>{{ contribution.description }}</p>
                <a :href="contribution.link" target="_blank" class="contribute-link">
                  {{ contribution.linkText }} <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 社区规范部分 -->
          <h2>社区规范</h2>
          <div class="guidelines-section">
            <p>
              为确保MCP社区维持积极、包容和有建设性的氛围，我们制定了一系列社区规范。
              所有社区成员都应当遵守这些规范，共同营造一个相互尊重、开放合作的环境。
            </p>
            <div class="guidelines-list">
              <div class="guideline-item" v-for="(guideline, index) in communityGuidelines" :key="index">
                <div class="guideline-icon"></div>
                <div class="guideline-content">
                  <h4>{{ guideline.title }}</h4>
                  <p>{{ guideline.description }}</p>
                </div>
              </div>
            </div>
            <div class="guidelines-link">
              <a href="https://github.com/modelcontextprotocol/community/code-of-conduct" target="_blank">
                查看完整的行为准则
              </a>
            </div>
          </div>
          
          <!-- 社区成功案例部分 -->
          <h2>社区成功案例</h2>
          <div class="success-stories">
            <div class="story-card" v-for="story in successStories" :key="story.title">
              <div class="story-image" :style="{ backgroundImage: `url(${story.image})` }"></div>
              <div class="story-content">
                <h3>{{ story.title }}</h3>
                <p class="story-company">{{ story.company }}</p>
                <p>{{ story.description }}</p>
                <a :href="story.link" target="_blank" class="story-link">
                  阅读全文 <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 常见问题部分 -->
          <h2>常见问题</h2>
          <div class="faq-section">
            <div class="faq-item" v-for="(faq, index) in communityFaqs" :key="index">
              <div class="faq-question" @click="faq.isOpen = !faq.isOpen">
                <span>{{ faq.question }}</span>
                <span class="faq-toggle" :class="{ 'open': faq.isOpen }"></span>
              </div>
              <div class="faq-answer" :class="{ 'open': faq.isOpen }">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
          
          <div class="guide-navigation">
            <router-link to="/guide/learning-resources" class="btn">&larr; 学习资源</router-link>
            <router-link to="/guide/faq" class="btn">常见问题 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 社区平台数据
const communityPlatforms = [
  {
    name: "GitHub 讨论区",
    description: "参与MCP核心协议的讨论、问题报告和功能建议，直接与MCP维护者和贡献者交流。",
    icon: "icon-github",
    members: "5200+ 成员",
    activity: "非常活跃",
    activityLevel: "very-active",
    link: "https://github.com/modelcontextprotocol/discussions"
  },
  {
    name: "Discord 社区",
    description: "实时交流平台，包含多个专题频道，适合即时讨论和获取技术支持。",
    icon: "icon-discord",
    members: "15000+ 成员",
    activity: "非常活跃",
    activityLevel: "very-active",
    link: "https://discord.gg/modelcontextprotocol"
  },
  {
    name: "MCP 开发者论坛",
    description: "深入的技术讨论平台，包含经验分享、教程和长期技术问题的解答。",
    icon: "icon-forum",
    members: "7800+ 成员",
    activity: "活跃",
    activityLevel: "active",
    link: "https://forum.modelcontextprotocol.org"
  },
  {
    name: "Twitter/X 社区",
    description: "获取MCP最新动态、公告和社区亮点，与更广泛的AI和开发者社区互动。",
    icon: "icon-twitter",
    members: "25000+ 关注者",
    activity: "非常活跃",
    activityLevel: "very-active",
    link: "https://twitter.com/MCProtocol"
  }
];

// 社区活动数据
const communityEvents = [
  {
    title: "MCP开发者大会2024",
    description: "一年一度的MCP开发者大会，汇聚全球MCP社区成员，分享最新进展、案例和未来规划。",
    day: "15",
    month: "6月",
    type: "conference",
    typeLabel: "大会",
    location: "线上+北京、旧金山、伦敦",
    time: "09:00-18:00 (GMT+8)",
    link: "https://conf.modelcontextprotocol.org/2024"
  },
  {
    title: "MCP实战工作坊：构建高级助手应用",
    description: "动手实践工作坊，学习如何使用MCP构建复杂的智能助手应用，包括多工具调用和上下文管理。",
    day: "28",
    month: "4月",
    type: "workshop",
    typeLabel: "工作坊",
    location: "线上",
    time: "19:00-21:00 (GMT+8)",
    link: "https://events.modelcontextprotocol.org/workshop-assistant"
  },
  {
    title: "社区问答直播：MCP 2.0新特性",
    description: "与MCP核心团队成员一起探讨即将发布的MCP 2.0版本的新特性和改进，并回答社区问题。",
    day: "10",
    month: "5月",
    type: "online",
    typeLabel: "直播",
    location: "线上 (YouTube/Bilibili)",
    time: "20:00-21:30 (GMT+8)",
    link: "https://live.modelcontextprotocol.org/qa-mcp2"
  }
];

// 社区贡献方式
const contributionWays = [
  {
    title: "参与协议开发",
    description: "直接为MCP核心协议贡献代码，提交Bug修复、新功能或改进建议，帮助完善MCP规范。",
    icon: "icon-code-branch",
    link: "https://github.com/modelcontextprotocol/specification/contributing.md",
    linkText: "查看贡献指南"
  },
  {
    title: "分享使用案例",
    description: "分享您如何在实际项目中应用MCP的经验和案例，帮助其他开发者学习和借鉴。",
    icon: "icon-case-study",
    link: "https://forum.modelcontextprotocol.org/share-case-study",
    linkText: "分享您的案例"
  },
  {
    title: "创建学习资源",
    description: "创建教程、文章或视频等学习资源，帮助新开发者更好地理解和使用MCP。",
    icon: "icon-learning",
    link: "https://github.com/modelcontextprotocol/learning-resources",
    linkText: "提交学习资源"
  },
  {
    title: "回答社区问题",
    description: "在论坛和讨论区帮助回答其他开发者的问题，分享您的知识和经验。",
    icon: "icon-question",
    link: "https://forum.modelcontextprotocol.org/unanswered",
    linkText: "查看待回答问题"
  }
];

// 社区规范
const communityGuidelines = [
  {
    title: "相互尊重",
    description: "尊重所有社区成员，无论其背景、经验水平或观点。不允许任何形式的骚扰、歧视或攻击性言论。"
  },
  {
    title: "建设性沟通",
    description: "提供建设性的反馈和意见，避免无意义的批评。即使在不同意的情况下，也应保持专业和礼貌。"
  },
  {
    title: "知识共享",
    description: "积极分享知识和经验，帮助其他社区成员成长。记录并分享您的解决方案，以便他人学习。"
  },
  {
    title: "诚信与透明",
    description: "在分享信息和参与讨论时保持诚实和透明。明确标注您分享内容的来源，尊重知识产权。"
  }
];

// 社区成功案例
const successStories = [
  {
    title: "如何利用MCP构建智能研究助手",
    company: "智研科技",
    description: "智研科技利用MCP构建了一个专门用于科研领域的智能助手，帮助研究人员更高效地获取和整理文献资料，提高研究效率。",
    image: "/images/stories/research-assistant.jpg",
    link: "https://blog.modelcontextprotocol.org/case-study-research-assistant"
  },
  {
    title: "MCP如何帮助我们改进客户支持系统",
    company: "云客服平台",
    description: "云客服平台通过MCP实现了智能客服系统的重大升级，使客服人员能够更准确地回答客户问题，降低了50%的响应时间。",
    image: "/images/stories/customer-support.jpg",
    link: "https://blog.modelcontextprotocol.org/case-study-customer-support"
  }
];

// 社区常见问题
const communityFaqs = [
  {
    question: "如何开始参与MCP社区？",
    answer: "加入我们的Discord或GitHub讨论区是开始参与的最佳方式。您可以先浏览现有的讨论，了解社区关注的主题，然后逐渐参与到讨论中。我们也欢迎您参加社区组织的线上活动和工作坊。",
    isOpen: false
  },
  {
    question: "我是新手，如何获取MCP相关问题的帮助？",
    answer: "您可以在Discord的'新手问答'频道或GitHub讨论区的'Help Wanted'标签下提问。社区成员通常会在24小时内回复。我们也建议您浏览论坛上的教程和常见问题解答，可能已经有人回答了类似的问题。",
    isOpen: false
  },
  {
    question: "我想为MCP贡献代码，如何开始？",
    answer: "首先，请阅读我们的贡献指南，了解代码贡献的流程和标准。然后，您可以查看GitHub上标记为'good first issue'的问题开始尝试。提交PR前，确保您的代码符合我们的代码风格并通过所有测试。",
    isOpen: false
  },
  {
    question: "如何申请成为MCP社区大使？",
    answer: "社区大使计划每季度开放一次申请。您需要已经积极参与社区至少3个月，并有明显的贡献记录。申请表格和详细要求可在我们的官网'社区'页面找到。",
    isOpen: false
  }
];
</script>

<style scoped>
.community-guide {
  color: #333;
}

.hero {
  background: linear-gradient(135deg, #4a6cf7 0%, #24ccda 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

.section {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumbs {
  margin-bottom: 30px;
  color: #666;
}

.breadcrumbs a {
  color: #4a6cf7;
  text-decoration: none;
}

.guide-content {
  line-height: 1.6;
}

.guide-content h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 10px;
}

.guide-content h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #4a6cf7;
}

.platform-grid, 
.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.platform-card,
.contribute-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid #eee;
}

.platform-card:hover,
.contribute-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.platform-icon,
.contribute-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #4a6cf7;
}

.platform-content h3,
.contribute-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.platform-meta {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  font-size: 0.9rem;
  color: #666;
}

.platform-activity {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
}

.platform-activity.very-active {
  background-color: #e6f7e6;
  color: #2e7d32;
}

.platform-activity.active {
  background-color: #e3f2fd;
  color: #1976d2;
}

.platform-link,
.contribute-link,
.event-link,
.story-link {
  display: inline-block;
  margin-top: 10px;
  color: #4a6cf7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.platform-link:hover,
.contribute-link:hover,
.event-link:hover,
.story-link:hover {
  color: #2440c2;
}

.arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.platform-link:hover .arrow,
.contribute-link:hover .arrow,
.event-link:hover .arrow,
.story-link:hover .arrow {
  transform: translateX(5px);
}

.events-section {
  margin-top: 30px;
}

.event-card {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid #eee;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4a6cf7;
  color: white;
  padding: 15px;
  min-width: 80px;
  text-align: center;
}

.event-day {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
}

.event-month {
  font-size: 1rem;
  margin-top: 5px;
}

.event-content {
  padding: 20px;
  flex-grow: 1;
}

.event-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.event-details {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0;
  font-size: 0.9rem;
  color: #666;
}

.event-type {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.event-type.conference {
  background-color: #ffe0b2;
  color: #e65100;
}

.event-type.workshop {
  background-color: #e1f5fe;
  color: #0277bd;
}

.event-type.online {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.guidelines-section {
  background-color: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-top: 30px;
}

.guidelines-list {
  margin-top: 20px;
}

.guideline-item {
  display: flex;
  margin-bottom: 15px;
}

.guideline-icon {
  margin-right: 15px;
  width: 24px;
  height: 24px;
  background-color: #4a6cf7;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
}

.guideline-icon::before {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
}

.guideline-content h4 {
  margin: 0 0 5px 0;
}

.guidelines-link {
  margin-top: 20px;
  text-align: center;
}

.guidelines-link a {
  color: #4a6cf7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.guidelines-link a:hover {
  color: #2440c2;
  text-decoration: underline;
}

.success-stories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.story-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
}

.story-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.story-content {
  padding: 20px;
}

.story-content h3 {
  margin-top: 0;
}

.story-company {
  color: #666;
  font-size: 0.9rem;
  margin: 5px 0 15px;
}

.faq-section {
  margin-top: 30px;
}

.faq-item {
  border-bottom: 1px solid #eee;
}

.faq-question {
  padding: 20px 0;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-toggle {
  position: relative;
  width: 20px;
  height: 20px;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background-color: #666;
  transition: transform 0.3s ease;
}

.faq-toggle::before {
  width: 2px;
  height: 20px;
  left: 9px;
  top: 0;
}

.faq-toggle::after {
  width: 20px;
  height: 2px;
  left: 0;
  top: 9px;
}

.faq-toggle.open::before {
  transform: rotate(90deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.open {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 0 20px;
  margin: 0;
}

.guide-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8f9fa;
  color: #4a6cf7;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #4a6cf7;
  color: white;
}

@media (max-width: 768px) {
  .platform-grid,
  .contribute-grid,
  .success-stories {
    grid-template-columns: 1fr;
  }
  
  .event-card {
    flex-direction: column;
  }
  
  .event-date {
    flex-direction: row;
    padding: 10px;
  }
  
  .event-day, .event-month {
    margin: 0 5px;
  }
  
  .event-details {
    flex-direction: column;
    gap: 5px;
  }
}
</style> 