/**
 * RemoteMCP.org 主JavaScript文件
 * 包含网站通用功能和交互逻辑
 */

document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    setupMobileNav();
    
    // 初始化页面滚动效果
    initScrollEffects();
    
    // 处理URL参数
    handleUrlParams();
});

/**
 * 设置移动端导航菜单
 */
function setupMobileNav() {
    // 创建移动导航按钮
    const header = document.querySelector('header');
    if (!header) return;
    
    const nav = document.querySelector('header nav');
    const menuButton = document.createElement('div');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    header.querySelector('.header-container').appendChild(menuButton);
    
    // 添加按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-button {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 20px;
            cursor: pointer;
        }
        
        .mobile-menu-button span {
            height: 3px;
            width: 100%;
            background-color: var(--primary-color);
            border-radius: 3px;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-button {
                display: flex;
            }
            
            .nav-menu {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                padding: 20px;
                z-index: 100;
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .nav-menu li {
                margin: 10px 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 添加点击事件
    menuButton.addEventListener('click', function() {
        const menu = document.querySelector('.nav-menu');
        menu.classList.toggle('active');
    });
}

/**
 * 初始化页面滚动效果
 */
function initScrollEffects() {
    // 显示/隐藏回到顶部按钮
    const scrollThreshold = 300;
    let scrollButton = document.querySelector('.scroll-to-top');
    
    // 如果按钮不存在，创建一个
    if (!scrollButton) {
        scrollButton = document.createElement('button');
        scrollButton.className = 'scroll-to-top';
        scrollButton.innerHTML = '↑';
        document.body.appendChild(scrollButton);
        
        // 添加按钮样式
        const style = document.createElement('style');
        style.textContent = `
            .scroll-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 40px;
                height: 40px;
                background-color: var(--primary-color);
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .scroll-to-top:hover {
                background-color: var(--secondary-color);
            }
            
            .scroll-to-top.visible {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
        
        // 添加点击事件
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
}

/**
 * 处理URL参数
 */
function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // 目录页面分类过滤
    if (window.location.pathname.includes('directory')) {
        const category = urlParams.get('category');
        if (category) {
            const categoryOption = document.querySelector(`.filter-option[data-filter="category"][data-value="${category}"]`);
            if (categoryOption) {
                // 模拟点击分类选项
                categoryOption.click();
            }
        }
    }
}

/**
 * 格式化日期
 * @param {Date|string} date - 日期对象或日期字符串
 * @param {string} format - 格式化模式
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    let formatted = format;
    formatted = formatted.replace('YYYY', year);
    formatted = formatted.replace('MM', month);
    formatted = formatted.replace('DD', day);
    
    return formatted;
}

/**
 * 防抖函数，用于优化搜索和输入事件
 * @param {Function} func - 要执行的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
function debounce(func, wait = 300) {
    let timeout;
    
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 显示通知消息
 * @param {string} message - 消息内容
 * @param {string} type - 消息类型 (success, error, info)
 * @param {number} duration - 显示时间（毫秒）
 */
function showNotification(message, type = 'info', duration = 3000) {
    // 创建通知样式
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: var(--border-radius);
                box-shadow: 0 3px 10px rgba(0,0,0,0.15);
                color: white;
                font-weight: 500;
                z-index: 1000;
                transform: translateY(-100px);
                opacity: 0;
                transition: all 0.3s ease;
            }
            
            .notification.show {
                transform: translateY(0);
                opacity: 1;
            }
            
            .notification-success {
                background-color: #4caf50;
            }
            
            .notification-error {
                background-color: #f44336;
            }
            
            .notification-info {
                background-color: var(--primary-color);
            }
        `;
        document.head.appendChild(style);
    }
    
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 自动关闭
    setTimeout(() => {
        notification.classList.remove('show');
        
        // 移除元素
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
} 