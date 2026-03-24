const Theme = {
    init() {
        this.createGlassStyle();
        this.createLayout();
        this.addAnimation();
    },

    // 毛玻璃核心样式
    createGlassStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
            /* 毛玻璃主容器 */
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

            /* 头像 + 标题 布局（和对方完全一样） */
            #header {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 2rem;
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
                font-size: 22px;
                font-weight: bold;
                margin: 0;
            }

            #header .subtitle {
                font-size: 14px;
                opacity: 0.8;
                margin: 4px 0 0;
            }

            /* 文章列表动画 */
            .article-item {
                transition: all 0.3s ease;
            }
            .article-item:hover {
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(style);
    },

    // 把页面装进毛玻璃
    createLayout() {
        const app = document.getElementById('app');
        if (!app) return;

        const glass = document.createElement('div');
        glass.id = 'glassShell';
        while (app.firstChild) {
            glass.appendChild(app.firstChild);
        }
        app.appendChild(glass);
    },

    // 简单流畅动画
    addAnimation() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
};

// 自动启动
window.addEventListener('DOMContentLoaded', () => {
    Theme.init();
});
