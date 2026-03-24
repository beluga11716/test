const Theme = {
    init() {
        this.createGlassStyle();
    },

    createGlassStyle() {
        const style = document.createElement('style');
        style.textContent = `

/* 1. 全局背景 + 强制让页面内容居中 */
html, body {
    background: url('https://picsum.photos/id/1036/1920/1080') center/cover fixed !important;
    min-height: 100vh !important;
    margin: 0 !important;
    padding: 40px !important;
    box-sizing: border-box !important;
}

/* 2. 给 Gmeek 默认的根容器加毛玻璃 + 居中 */
body {
    display: flex !important;
    justify-content: center !important;
}
body > div {
    width: 100% !important;
    max-width: 600px !important;
    padding: 30px !important;
    background: rgba(255, 255, 255, 0.25) !important;
    backdrop-filter: blur(25px) !important;
    -webkit-backdrop-filter: blur(25px) !important;
    border-radius: 24px !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
}

/* 3. 头部横排布局 */
#header {
    display: flex !important;
    align-items: center !important;
    gap: 16px !important;
    margin-bottom: 25px !important;
    padding-bottom: 15px !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;
}
#header img {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50% !important;
}

/* 4. 文章列表 毛玻璃效果（你要的轻微半透） */
table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 8px !important;
}
table tr {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-radius: 10px !important;
    transition: all 0.3s ease !important;
}
table tr:hover {
    background: rgba(255, 255, 255, 0.25) !important;
    transform: translateY(-2px) !important;
}
table td {
    padding: 12px 14px !important;
    border: none !important;
}

/* 5. 页脚样式 */
footer {
    text-align: center !important;
    margin-top: 25px !important;
    padding-top: 15px !important;
    border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
    color: #333 !important;
}

`;
        document.head.appendChild(style);
    }
};

window.addEventListener('DOMContentLoaded', () => Theme.init());
