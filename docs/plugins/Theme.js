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
            /* 全局背景 */
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

            /* 毛玻璃主容器 */
            #glassShell {
                width: 100%;
                max-width: 600px;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.2) !important;
                backdrop-filter: blur(30px) !important;
                -webkit-backdrop-filter: blur(30px) !important;
                border-radius: 24px !important;
                border: 1px solid rgba(255,255,255,0.3) !important;
                box-shadow: 0 12px 40px rgba(0,0,0,0.18) !important;
                position: relative;
                z-index: 10;
            }

            /* 头部布局 */
            #header {
                display: flex !important;
                align-items: center !important;
                gap: 16px !important;
                margin-bottom: 2rem !important;
                padding-bottom: 1rem !important;
                border-bottom: 1px solid rgba(255,255,255,0.3) !important;
            }
            #header .avatar {
                width: 60px !important;
                height: 60px !important;
                border-radius: 50% !important;
                object-fit: cover !important;
            }
            #header .title-group {
                flex: 1 !important;
            }
            #header .title {
                font-size: 24px !important;
                font-weight: bold !important;
                margin: 0 !important;
                color: #222 !important;
            }
            #header .subtitle {
                font-size: 14px !important;
                opacity: 0.8 !important;
                margin: 4px 0 0 !important;
            }

            /* ====================================== */
            /* 🔥 文章表格 超强毛玻璃（肉眼可见版） */
            /* ====================================== */
            #glassShell *[class*="table"],
            #glassShell table,
            #glassShell tr,
            #glassShell td {
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(20px) !important;
                -webkit-backdrop-filter: blur(20px) !important;
                border: 1px solid rgba(255,255,255,0.35) !important;
                border-radius: 12px !important;
                margin-bottom: 8px !important;
                transition: all 0.3s ease !important;
            }

            #glassShell tr:hover {
                background: rgba(255, 255, 255, 0.25) !important;
                transform: translateY(-2px) !important;
            }

            #glassShell table {
                width: 100% !important;
                border-collapse: separate !important;
                border-spacing: 0 6px !important;
                overflow: visible !important;
            }

            #glassShell td {
                padding: 12px 14px !important;
            }

            /* 淡入动画 */
            body {
                opacity: 0 !important;
                transition: opacity 0.6s ease !important;
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
        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle';
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
