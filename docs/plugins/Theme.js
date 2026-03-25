document.addEventListener('DOMContentLoaded', function() {    
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

        /* 居中和毛玻璃覆盖 */
        .container-lg, .Layout, .markdown-body {
            margin: 0 auto !important;
            max-width: 900px !important;
            background: rgba(255,255,255,0.25) !important;
            backdrop-filter: blur(20px) saturate(1.35) !important;
            -webkit-backdrop-filter: blur(20px) saturate(1.35) !important;
            border-radius: 12px !important;
            box-shadow: 0 28px 90px rgba(0,0,0,0.36) !important;
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

    let style = document.createElement("style");
    style.innerHTML = baseStyle();
    document.head.appendChild(style);
});
