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

        /* 🔥 表格毛玻璃效果 */
        #glassShell table,
        #glassShell table tr,
        #glassShell table td,
        #glassShell .table,
        #glassShell .table tr,
        #glassShell .table td {
            background: rgba(255, 255, 255, 0.18) !important;
            backdrop-filter: blur(15px) !important;
            -webkit-backdrop-filter: blur(15px) !important;
            border: 1px solid rgba(255, 255, 255, 0.25) !important;
            border-radius: 10px !important;
            transition: all 0.3s ease !important;
        }
        #glassShell table tr:hover,
        #glassShell .table tr:hover {
            background: rgba(255, 255, 255, 0.28) !important;
            transform: translateY(-2px) !important;
        }
        #glassShell table,
        #glassShell .table {
            width: 100%;
            border-collapse: separate !important;
            border-spacing: 0 8px !important;
            overflow: hidden !important;
        }
        #glassShell table td,
        #glassShell .table td {
            padding: 0.8rem 1rem !important;
        }

        /* 📖 文章主体毛玻璃效果 */
        #glassShell main,
        #glassShell article,
        #glassShell .post-content {
            background: rgba(255, 255, 255, 0.18) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-radius: 16px !important;
            border: 1px solid rgba(255, 255, 255, 0.25) !important;
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
            transition: all 0.3s ease !important;
        }
        #glassShell main:hover,
        #glassShell article:hover,
        #glassShell .post-content:hover {
            background: rgba(255, 255, 255, 0.28) !important;
            transform: translateY(-2px) !important;
        }

        /* 淡入动画 */
        body {
            opacity: 0;
            transition: opacity 0.6s ease;
        }
    `;
    document.head.appendChild(style);
}
