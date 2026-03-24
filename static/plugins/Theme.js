const Theme = {
    init() {
        this.createGlassStyle();
        this.wrapAppInGlass();
        this.adjustHeaderLayout();
        this.addAnimations();
    },

    createGlassStyle() {
        const style = document.createElement('style');
        style.textContent = `
            /* 全局背景（雪山图） */
            html, body {
                background: url('https://picsum.photos/id/1036/1920/1080') no-repeat center center fixed !important;
                background-size: cover !important;
                min-height: 100vh;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding-top: 2rem;
            }

            /* 毛玻璃主容器（居中+毛玻璃） */
            #glassShell {
                width: 100%;
                max-width: 600px;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.2) !important;
                backdrop-filter: blur(30px) !important;
                -webkit-backdrop-filter: blur(30px) !important;
                border-radius: 24px;
                border: 1px solid rgba(255, 255, 255, 0.3) !important;
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18) !important;
                position: relative;
                z-index: 10;
            }

            /* 头像+标题布局 */
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
                color: #6366f1;
            }
            #header .subtitle {
                font-size: 14px;
                opacity: 0.8;
                margin: 4px 0 0;
            }

            /* 文章列表毛玻璃（核心修复） */
            .article-item, table {
                background: rgba(255, 255, 255, 0.15) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border-radius: 10px !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                transition: all 0.3s ease;
            }
            .article-item:hover, table tr:hover {
                background: rgba(255, 255, 255, 0.25) !important;
                transform: translateY(-2px);
            }

            /* 表格样式适配 */
            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                overflow: hidden;
            }
            table td, table th {
                border: none !important;
                padding: 0.8rem 1rem;
            }

            /* 淡入动画 */
            body {
                opacity: 0;
                transition: opacity 0.6s ease;
            }
        `;
        document.head.appendChild(style);
    },

    wrapAppInGlass() {
        const app = document.body;
        if (!app) return;
        const glass = document.createElement('div');
        glass.id = 'glassShell';
        while (app.firstChild) {
            glass.appendChild(app.firstChild);
        }
        app.appendChild(glass);
    },

    adjustHeaderLayout() {
        const header = document.querySelector('header') || document.getElementById('header');
        if (!header) return;
        const avatar = header.querySelector('img');
        const titleGroup = document.createElement('div');
        titleGroup.className = 'title-group';
        const title = header.querySelector('h1') || document.createElement('h1');
        title.className = 'title';
        title.textContent = 'Blog Title';
        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle';
        subtitle.textContent = '你的博客描述';
        titleGroup.appendChild(title);
        titleGroup.appendChild(subtitle);
        header.innerHTML = '';
        if (avatar) header.appendChild(avatar);
        header.appendChild(titleGroup);
    },

    addAnimations() {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    Theme.init();
});
