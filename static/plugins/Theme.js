document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

    // 背景遮罩
    function ensureBackgroundOverlay() {
        if (document.getElementById('bgOverlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'bgOverlay';
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

    // 主页主题------------------------------------------------------------------------------
    if (currentUrl == '/test/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        .blogTitle { display: unset !important; }

        #header { 
            height: 300px !important; 
            display: grid !important; 
            grid-template-columns: 1fr auto 1fr !important; 
            grid-template-rows: auto auto !important; 
            align-items: center !important; 
            text-align: center !important; 
        }

        #header .title-left { 
            grid-column: 2 !important; 
            grid-row: 1 / span 2 !important; 
            display: flex !important; 
            flex-direction: column !important; 
            align-items: center !important; 
            gap: 10px !important; 
        }

        #header .title-left .avatar { 
            width: 150px !important; 
            height: 150px !important; 
            border-radius: 50% !important; 
            border: 4px solid rgba(255,255,255,0.72) !important; 
            box-shadow: 0 18px 45px rgba(0,0,0,0.22) !important; 
        }

        #header .title-left a.blogTitle { 
            font-size: clamp(40px, 3.2vw, 44px) !important; 
            background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(132,170,255,0.98)) !important; 
            -webkit-background-clip: text !important; 
            background-clip: text !important; 
            color: transparent !important; 
        }

        #header .title-right { 
            grid-column: 3 !important; 
            grid-row: 2 !important; 
            display: flex !important; 
            gap: 10px !important; 
        }

        body { margin:0 !important; padding:28px 16px !important; }

        #glassShell { 
            max-width:900px !important; 
            margin:0 auto !important; 
            padding:44px !important; 
            background:rgba(255,255,255,0.14) !important; 
            border-radius:18px !important; 
            backdrop-filter:blur(20px) saturate(1.35) !important; 
        }

        .SideNav { 
            background:rgba(255,255,255,0.10) !important; 
            border-radius:16px !important; 
            backdrop-filter:blur(10px) saturate(1.15) !important; 
        }

        .SideNav-item:hover { 
            background:linear-gradient(135deg, rgba(195,228,227,0.72), rgba(255,255,255,0.55)) !important; 
            border-radius:12px !important; 
        }

        .pagination a:hover { border-color: rebeccapurple !important; }
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
        body { margin:0 !important; padding:28px 16px !important; }

        #glassShell { 
            max-width:900px !important; 
            margin:0 auto !important; 
            padding:44px !important; 
            background:rgba(255,255,255,0.14) !important; 
            border-radius:18px !important; 
            backdrop-filter:blur(20px) saturate(1.35) !important; 
        }

        .markdown-body img { 
            border-radius:8px !important; 
            border:1px solid rgba(255,255,255,0.78) !important; 
        }

        .markdown-alert { border-radius:8px !important; }

        .markdown-body .highlight pre { 
            background-color:rgba(245,246,248,0.92) !important; 
            border-radius:8px !important; 
            padding-top:20px !important; 
        }

        .markdown-body code { background-color:#c9daf8 !important; }

        .markdown-body h1 { 
            display:inline-block !important; 
            font-size:1.3rem !important; 
            font-weight:bold !important; 
            background:rgb(239,112,96) !important; 
            color:#fff !important; 
            padding:3px 10px !important; 
            border-radius:8px !important; 
            margin-top:1.8rem !important; 
        }
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
        body { margin:0 !important; padding:28px 16px !important; }

        #glassShell { 
            max-width:900px !important; 
            margin:0 auto !important; 
            padding:44px !important; 
            background:rgba(255,255,255,0.14) !important; 
            border-radius:18px !important; 
            backdrop-filter:blur(20px) saturate(1.35) !important; 
        }

        .SideNav { 
            background:rgba(255,255,255,0.10) !important; 
            border-radius:16px !important; 
            backdrop-filter:blur(10px) saturate(1.15) !important; 
        }

        .SideNav-item:hover { 
            background:linear-gradient(135deg, rgba(195,228,227,0.72), rgba(255,255,255,0.55)) !important; 
            border-radius:12px !important; 
        }

        .subnav-search-input { border-radius:2em !important; }
        .subnav-search-icon { top:9px !important; }
        button.btn.float-left { display:none !important; }
        .subnav-search { height:36px !important; }
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
