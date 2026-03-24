const Theme = {
    init() {
        this.createGlassStyle();
    },

    createGlassStyle() {
        const style = document.createElement('style');
        style.textContent = `

/* 全局背景 + 让内容强制居中 */
html, body {
    background: url('https://picsum.photos/id/1036/1920/1080') center/cover fixed !important;
    min-height: 100vh !important;
    margin: 0 !important;
    padding: 40px 20px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: flex-start !important;
}

/* 整体毛玻璃外壳 + 居中 */
body > * {
    max-width: 620px !important;
    width: 100% !important;
    padding: 35px !important;
    background: rgba(255,255,255,0.22) !important;
    backdrop-filter: blur(22px) !important;
    -webkit-backdrop-filter: blur(22px) !important;
    border-radius: 24px !important;
    border: 1px solid rgba(255,255,255,0.3) !important;
    box-shadow: 0 10px 35px rgba(0,0,0,0.1) !important;
    margin: 0 auto !important;
}

/* 头部横排 */
#header {
    display: flex !important;
    align-items: center !important;
    gap: 16px !important;
    margin-bottom: 25px !important;
}
#header img {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50% !important;
}

/* ====================== */
/* 文章表格 毛玻璃效果 */
/* ====================== */
table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 8px !important;
}
table td {
    background: rgba(255,255,255,0.15) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border-radius: 10px !important;
    padding: 13px 16px !important;
    transition: 0.25s ease !important;
}
table td:hover {
    background: rgba(255,255,255,0.25) !important;
    transform: translateY(-1.5px) !important;
}

`;
        document.head.appendChild(style);
    }
};

window.addEventListener('load', () => Theme.init());
