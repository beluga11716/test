const Theme = {
    init() {
        this.wrapContent();
        this.createGlassStyle();
    },

    // 把所有内容包进一个容器
    wrapContent() {
        const container = document.createElement('div');
        container.id = 'glassContainer';
        // 把 body 里所有内容移进去
        while (document.body.firstChild) {
            container.appendChild(document.body.firstChild);
        }
        document.body.appendChild(container);
    },

    createGlassStyle() {
        const style = document.createElement('style');
        style.textContent = `
/* 全局背景（雪山图） */
html, body {
    background: url('https://picsum.photos/id/1036/1920/1080') center/cover fixed no-repeat !important;
    min-height: 100vh;
    margin: 0;
    padding: 30px;
}

/* 🔥 唯一的毛玻璃容器，整体居中 */
#glassContainer {
    max-width: 600px !important;
    margin: 0 auto !important;
    padding: 30px !important;
    background: rgba(255,255,255,0.25) !important;
    backdrop-filter: blur(25px) !important;
    -webkit-backdrop-filter: blur(25px) !important;
    border-radius: 24px !important;
    border: 1px solid rgba(255,255,255,0.3) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important;
}

/* 头部横排布局 */
#header, header {
    display: flex !important;
    align-items: center !important;
    gap: 16px !important;
    margin-bottom: 20px !important;
    padding-bottom: 15px !important;
    border-bottom: 1px solid rgba(255,255,255,0.3) !important;
}
#header img, header img {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50% !important;
}

/* 文章表格毛玻璃 */
table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 8px !important;
}
table td {
    background: rgba(255,255,255,0.15) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-radius: 10px !important;
    padding: 12px 14px !important;
    transition: 0.3s !important;
}
table td:hover {
    background: rgba(255,255,255,0.25) !important;
    transform: translateY(-2px) !important;
}

/* 页脚样式 */
footer {
    text-align: center;
    margin-top: 20px;
    padding-top: 15px !important;
    border-top: 1px solid rgba(255,255,255,0.3) !important;
    color: #333;
}
`;
document.head.appendChild(style);
    }
};

window.addEventListener('load', () => Theme.init());
