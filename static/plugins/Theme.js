document.addEventListener('DOMContentLoaded', function() {    
    let style = document.createElement("style");
    style.innerHTML = `
    body {
        margin: 0 !important;
        padding: 40px 20px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        min-height: 100vh !important;
        background: #f0f0f0 !important;
    }
    `;
    document.head.appendChild(style);
});
