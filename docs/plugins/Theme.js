document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

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

    function ensureBackgroundOverlay() {
        if (document.getElementById('bgOverlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'bgOverlay';
        document.body.insertBefore(overlay, document.body.firstChild);
    }

    // 主页主题------------------------------------------------------------------------------
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        .blogTitle { display: unset; }
        #header { height: 300px; display: grid !important; grid-template-columns: 1fr auto 1fr; grid-template-rows: auto auto; align-items: center; text-align: center; }
        #header .title-left { grid-column: 2; grid-row: 1 / span 2; display: flex; flex-direction: column; align-items: center; gap: 10px; }
        #header .title-left .avatar { width: 150px; height: 150px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.72); }
        #header .title-left a.blogTitle { font-size: clamp(40px, 3.2vw, 44px); background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(132,170,255,0.98)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        #header .title-right { grid-column: 3; grid-row: 2; display: flex; gap: 10px; }
        body { margin:0; padding:28px 16px; }
        #glassShell { max-width:900px; margin:0 auto; padding:44px; background:rgba(255,255,255,0.14); border-radius:18px; backdrop-filter:blur(20px) saturate(1.35); }
        .SideNav { background:rgba(255,255,255,0.10); border-radius:16px; backdrop-filter:blur(10px) saturate(1.15); }
        .SideNav-item:hover { background:linear-gradient(135deg, rgba(195,228,227,0.72), rgba(255,255,255,0.55)); border-radius:12px; }
        .pagination a:hover { border-color: rebeccapurple; }
        `;
        document.head.appendChild(style);
        ensureBackgroundOverlay();
        ensureGlassShell();
    }

    // 文章页主题------------------------------------------------------------------------------
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        body { margin:0; padding:28px 16px; }
        #glassShell { max-width:900px; margin:0 auto; padding:44px; background:rgba(255,255,255,0.14); border-radius:18px; backdrop-filter:blur(20px) saturate(1.35); }
        .markdown-body img { border-radius:8px; border:1px solid rgba(255,255,255,0.78); }
        .markdown-alert { border-radius:8px; }
        .markdown-body .highlight pre { background-color:rgba(245,246,248,0.92); border-radius:8px; padding-top:20px; }
        .markdown-body code { background-color:#c9daf8; }
        .markdown-body h1 { display:inline-block; font-size:1.3rem; font-weight:bold; background:rgb(239,112,96); color:#fff; padding:3px 10px; border-radius:8px; margin-top:1.8rem; }
        `;
        document.head.appendChild(style);
        ensureBackgroundOverlay();
        ensureGlassShell();
    }

    // 搜索页主题------------------------------------------------------------------------------
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        body { margin:0; padding:28px 16px; }
        #glassShell { max-width:900px; margin:0 auto; padding:44px; background:rgba(255,255,255,0.14); border-radius:18px; backdrop-filter:blur(20px) saturate(1.35); }
        .SideNav { background:rgba(255,255,255,0.10); border-radius:16px; backdrop-filter:blur(10px) saturate(1.15); }
        .SideNav-item:hover { background:linear-gradient(135deg, rgba(195,228,227,0.72), rgba(255,255,255,0.55)); border-radius:12px; }
        .subnav-search-input { border-radius:2em; }
        .subnav-search-icon { top:9px; }
        button.btn.float-left { display:none; }
        .subnav-search { height:36px; }
        `;
        document.head.appendChild(style);
        ensureBackgroundOverlay();
        ensureGlassShell();

        // 搜索框回车触发
        let input = document.getElementsByClassName("form-control subnav-search-input float-left")[0];
        let button = document.getElementsByClassName("btn float-left")[0];
        if (input && button) {
            input.addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    button.click();
                }
            });
        }
    }
});
