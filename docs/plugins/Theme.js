document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

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

    function baseStyle() {
        return `
        body {
            margin: 0 !important;
            padding: 40px 20px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-start !important;
            min-height: 100vh !important;
            background: url('/test/img/bg.jpg') no-repeat center center fixed !important;
            background-size: cover !important;
        }

        #glassShell {
            position: relative !important;
            z-index: 2 !important;
            width: 100% !important;
            max-width: 900px !important;
            margin: 0 auto !important;
            padding: 44px !important;
            background: rgba(255, 255, 255, 0.18) !important;
            border-radius: 18px !important;
            box-shadow: 0 28px 90px rgba(0,0,0,0.36) !important;
            backdrop-filter: blur(20px) saturate(1.35) !important;
            -webkit-backdrop-filter: blur(20px) saturate(1.35) !important;
        }
        `;
    }

    if (currentUrl == '/test/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        let style = document.createElement("style");
        style.innerHTML = baseStyle();
        document.head.appendChild(style);
        ensureBackgroundOverlay();
        ensureGlassShell();
    }
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        let style = document.createElement("style");
        style.innerHTML = baseStyle();
        document.head.appendChild(style);
        ensureBackgroundOverlay();
        ensureGlassShell();
    }
    else if (currentUrl.includes('/tag')) {
        let style = document.createElement("style");
        style.innerHTML = baseStyle();
        document.head.appendChild(style);
        ensureBackgroundOverlay();
        ensureGlassShell();
    }
});
