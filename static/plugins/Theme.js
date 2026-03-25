document.addEventListener('DOMContentLoaded', function() {    
    // 背景遮罩
    function ensureBackgroundOverlay() {
        if (document.getElementById('bgOverlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'bgOverlay';
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15));
        `;
        document.body.insertBefore(overlay, document.body.firstChild);
    }

    // GlassShell 容器
    function ensureGlassShell() {
        if (document.getElementById('glassShell')) return;
        const shell = document.createElement('div');
        shell.id = 'glassShell';
        const nodes = Array.from(document.body.childNodes);
        for (const node of nodes) {
            if (node && node.nodeType === 1) {
                const el = node;
                if (el.id === 'bgOverlay') continue;
            }
            shell.appendChild(node);
        }
        document.body.appendChild(shell);
    }

    // 样式：毛玻璃 + 动画阴影
    function baseStyle() {
        return `
        body {
            margin: 0 !important;
            padding: 40px 20px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-start !important;
            min-height: 100vh !important;
            background: #f0f0f0 !important;
        }

        #glassShell {
            position: relative !important;
            z-index: 2 !important;
            width: 100% !important;
            max-width: 900px !important;
            margin: 0 auto !important;
            padding: 44px !important;
            background: rgba(255, 255, 255, 0.25) !important;
            border-radius: 18px !important;
            backdrop-filter: blur(20px) saturate(1.35) !important;
            -webkit-backdrop-filter: blur(20px) saturate(1.35) !important;
            animation: floatShadow 1.2s ease-in-out infinite alternate !important;
        }

        @keyframes floatShadow {
            from {
                box-shadow: 0 18px 45px rgba(0,0,0,0.22);
                transform: translateY(0);
            }
            to {
                box-shadow: 0 28px 90px rgba(0,0,0,0.36);
                transform: translateY(-6px);
            }
        }
        `;
    }

    // 注入样式并启用容器
    let style = document.createElement("style");
    style.innerHTML = baseStyle();
    document.head.appendChild(style);
    ensureBackgroundOverlay();
    ensureGlassShell();
});
