const Theme = {
    init() {
        this.createGlassStyle();
        this.wrapAppInGlass();
        this.adjustHeaderLayout();
        this.addAnimations();
    },

    // 毛玻璃核心样式（和图二完全一样）
    createGlassStyle() {
        const style = document.createElement('style');
        style.textContent = `
            /* 全局毛玻璃容器 */
            #glassShell {
                max-width: 600px;
                margin: 2rem auto;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }

            /* 头像+标题布局（和图二完全对齐） */
            #header {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            }
            #header .avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: cover;
            }
            #header .title-group {
                flex: 1;
            }
            #header .title {
                font-size: 24px;
                font-weight: bold;
                margin: 0;
                background: linear-gradient(90deg, #6366f1, #8b5cf6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            #header .subtitle {
                font-size: 14px;
                opacity: 0.8;
                margin: 4px 0 0;
            }

            /* 文章列表美化（和图二一样） */
            .article-item {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                margin: 0.5rem 0;
                padding: 0.8rem 1rem;
                transition: all 0.3s ease;
            }
            .article-item:hover {
                background: rgba(255, 255, 255, 0.1);
                transform: translateY(-2px);
            }

            /* 页面淡入动画 */
            body {
                opacity: 0;
                transition: opacity 0.6s ease;
            }
        `;
        document.head.appendChild(style);
    },

    // 把整个页面装进毛玻璃容器
    wrapAppInGlass() {
        const app = document.body;
        if (!app) return;

        const glass = document.createElement('div');
        glass.id = 'glassShell';

        // 把 body 里所有内容移到毛玻璃里
        while (app.firstChild) {
            glass.appendChild(app.firstChild);
        }
        app.appendChild(glass);
    },

    // 调整头像+标题布局
    adjustHeaderLayout() {
        const header = document.getElementById('header');
        if (!header) return;

        // 把头像和标题包成 flex 布局
        const avatar = header.querySelector('img');
        const titleGroup = document.createElement('div');
        titleGroup.className = 'title-group';

        const title = header.querySelector('h1') || document.createElement('h1');
        title.className = 'title';
        title.textContent = document.title || 'Blog Title';

        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle';
        subtitle.textContent = '你的博客描述';

        titleGroup.appendChild(title);
        titleGroup.appendChild(subtitle);

        header.innerHTML = '';
        if (avatar) header.appendChild(avatar);
        header.appendChild(titleGroup);
    },

    // 页面加载完成后显示
    addAnimations() {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
};

// 页面加载完成后自动启动
window.addEventListener('DOMContentLoaded', () => {
    Theme.init();
});
